use serde::{Deserialize, Serialize};
use std::fs;
use std::path::Path;

#[derive(Debug, Serialize, Deserialize)]
pub struct NeoConfig {
    pub style_dir: String,
    pub components_dir: String,
    pub registry_url: Option<String>,
}

impl Default for NeoConfig {
    fn default() -> Self {
        Self {
            style_dir: "lib/utils.ts".to_string(),
            components_dir: "components/neoui".to_string(),
            registry_url: Some("https://raw.githubusercontent.com/neoui/registry/main".to_string()),
        }
    }
}

impl NeoConfig {
    pub fn load() -> Self {
        fs::read_to_string("neoui.json")
            .ok()
            .and_then(|s| serde_json::from_str(&s).ok())
            .unwrap_or_default()
    }

    pub fn save(&self) -> std::io::Result<()> {
        let config_json = serde_json::to_string_pretty(self).unwrap();
        fs::write("neoui.json", config_json)
    }

    pub fn exists() -> bool {
        Path::new("neoui.json").exists()
    }
}
