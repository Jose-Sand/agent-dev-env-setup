// @description Configuración del entorno de desarrollo
// @author [Tu nombre]
// @version 1.0.0

import * as fs from 'fs';
import * as path from 'path';

interface IConfig {
  stack: string[];
  features: string[];
}

const config: IConfig = {
  stack: ['yarn', 'npm'],
  features: ['configuración automática', 'soporte para varias plataformas']
};

function getConfigFile(): string | null {
  const homeDir = process.env.HOME || process.env.USERPROFILE;
  if (!homeDir) return null;

  const configFilePath = path.join(homeDir, '.dev-env-setup.json');
  try {
    fs.accessSync(configFilePath);
    return configFilePath;
  } catch (error) {
    return null;
  }
}

function getConfig(): IConfig | null {
  const configFile = getConfigFile();
  if (!configFile) return config;

  try {
    const configFileContent = fs.readFileSync(configFile, 'utf8');
    return JSON.parse(configFileContent);
  } catch (error) {
    console.error('Error al leer archivo de configuración:', error);
    return config;
  }
}

export default getConfig();