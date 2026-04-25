use anyhow::Result;
use colored::*;
use std::fs;
use std::path::Path;
use crate::config::NeoConfig;
use crate::assets::Asset;

pub async fn handle() -> Result<()> {
    println!("{}", "🚀 Initializing NeoUI...".bright_cyan());

    if NeoConfig::exists() {
        println!("{}", "ℹ NeoUI is already initialized.".yellow());
    } else {
        let config = NeoConfig::default();
        config.save()?;
        println!("{} {}", "✔ Created".green(), "neoui.json");
    }

    let config = NeoConfig::load();

    // Create utility file
    if let Some(file) = Asset::get("base/utils.ts") {
        let content = std::str::from_utf8(file.data.as_ref())?;
        let target = Path::new(&config.style_dir);
        
        if let Some(parent) = target.parent() { fs::create_dir_all(parent)?; }
        fs::write(target, content)?;
        println!("{} {}", "✔ Created".green(), config.style_dir);
    }

    // Create globals.css template
    if let Some(file) = Asset::get("base/globals.css") {
        let content = std::str::from_utf8(file.data.as_ref())?;
        let target = Path::new("app/globals.css"); // Default Next.js path
        
        if !target.exists() {
            if let Some(parent) = target.parent() { fs::create_dir_all(parent)?; }
            fs::write(target, content)?;
            println!("{} {}", "✔ Created".green(), "app/globals.css (Neo Design Tokens)");
        }
    }

    println!("\n{}", "✨ NeoUI initialized successfully!".bright_green());
    Ok(())
}
