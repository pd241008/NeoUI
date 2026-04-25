use anyhow::Result;
use clap::{Parser, Subcommand};

mod assets;
mod commands;
mod config;
mod utils;

#[derive(Parser)]
#[command(name = "neoui")]
#[command(about = "High-performance Neo aesthetic component injector", long_about = None)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Initialize NeoUI in your project
    Init,
    /// Add a component to your project
    Add { 
        /// Name of the component (e.g., button, card)
        component: String,
        /// Overwrite existing files
        #[arg(short, long)]
        overwrite: bool,
    },
}

#[tokio::main]
async fn main() -> Result<()> {
    let cli = Cli::parse();

    match cli.command {
        Commands::Init => commands::init::handle().await?,
        Commands::Add { component, overwrite } => commands::add::handle(component, overwrite).await?,
    }

    Ok(())
}
