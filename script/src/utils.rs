use anyhow::{Context, Result};
use colored::*;
use std::process::Command;

pub async fn install_dependencies(deps: &[&str]) -> Result<()> {
    println!("{} {}...", "📦 Installing dependencies:".bright_blue(), deps.join(", "));
    
    let mut cmd = if cfg!(target_os = "windows") {
        let mut c = Command::new("cmd");
        c.args(["/C", "npm", "install"]);
        c.args(deps);
        c
    } else {
        let mut c = Command::new("npm");
        c.args(["install"]);
        c.args(deps);
        c
    };

    let status = cmd.status().context("Failed to run npm install")?;
    if !status.success() {
        println!("{}", "⚠ Failed to install some dependencies. Please install them manually.".yellow());
    }
    Ok(())
}
