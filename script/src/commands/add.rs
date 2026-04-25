use anyhow::{Context, Result};
use colored::*;
use std::fs;
use std::path::{PathBuf};
use crate::config::NeoConfig;
use crate::assets::Asset;
use crate::utils::install_dependencies;

pub async fn handle(component: String, overwrite: bool) -> Result<()> {
    let config = NeoConfig::load();
    println!("{} {}...", "📥 Fetching".bright_cyan(), component.bold());

    let target_path = PathBuf::from(&config.components_dir).join(format!("{}.tsx", component));

    if target_path.exists() && !overwrite {
        println!("{} {} already exists. Use --overwrite to replace it.", "✖ Error:".red(), target_path.display());
        return Ok(());
    }

    // Attempt to fetch from registry, fallback to embedded assets
    let content = match fetch_component_content(&config, &component).await {
        Ok(c) => c,
        Err(_) => {
            let asset_path = format!("ui/{}.tsx", component);
            Asset::get(&asset_path)
                .map(|f| std::str::from_utf8(f.data.as_ref()).map(|s| s.to_string()))
                .transpose()?
                .context(format!("Component '{}' not found in registry or local cache.", component))?
        }
    };

    if let Some(parent) = target_path.parent() { fs::create_dir_all(parent)?; }
    fs::write(&target_path, content)?;

    println!("{} {} {}", "✔ Added".green(), component.bold(), format!("to {}", target_path.display()).dimmed());
    
    // Post-install hooks
    match component.as_str() {
        "button" => install_dependencies(&["@radix-ui/react-slot"]).await?,
        "tabs" => install_dependencies(&["@radix-ui/react-tabs"]).await?,
        "theme-provider" => install_dependencies(&["next-themes"]).await?,
        "theme-toggle" => install_dependencies(&["next-themes", "lucide-react"]).await?,
        _ => {}
    }

    Ok(())
}

async fn fetch_component_content(config: &NeoConfig, component: &str) -> Result<String> {
    let base_url = config.registry_url.as_ref().context("No registry URL configured")?;
    let url = format!("{}/ui/{}.tsx", base_url, component);
    
    let resp = reqwest::get(url).await?;
    if resp.status().is_success() {
        Ok(resp.text().await?)
    } else {
        anyhow::bail!("Failed to fetch from registry")
    }
}
