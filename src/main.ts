import * as fs from 'fs';
import * as path from 'path';

import { Config } from './config';

const config = new Config();

if (process.platform === 'win32') {
  console.log('Configurando entorno de desarrollo en Windows');
  // Implementar lógica para configuración en Windows
} else if (process.platform === 'darwin') {
  console.log('Configurando entorno de desarrollo en macOS');
  // Implementar lógica para configuración en macOS
} else {
  console.log('Configurando entorno de desarrollo en Linux');
  // Implementar lógica para configuración en Linux
}

console.log(`Configuración finalizada. Tecnología seleccionada: ${config.selectedTechnology}`);

// Creamos el directorio node_modules si no existe
if (!fs.existsSync(path.join(process.cwd(), 'node_modules'))) {
  fs.mkdirSync(path.join(process.cwd(), 'node_modules'));
}

// Instalamos las dependencias con yarn o npm según la configuración
const command = config.useYarn ? 'yarn' : 'npm';
console.log(`Instalando dependencias con ${command}`);
require('child_process').execSync(`${command} install`, { stdio: 'inherit' });