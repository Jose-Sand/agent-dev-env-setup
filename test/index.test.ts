// @description Pruebas unitarias y de integración
// @author [Tu nombre]

import * as fs from 'fs';
import * as path from 'path';

import { Config } from '../src/config';

describe('Configuración del entorno de desarrollo', () => {
  it('debe leer la configuración correctamente', () => {
    const config = new Config();
    expect(config.platform).toBe('local');
    expect(config.tech).toBe('typescript');
  });

  it('debe cambiar la plataforma a desarrollo', () => {
    const config = new Config();
    config.changePlatform('development');
    expect(config.platform).toBe('development');
  });

  it('debe cambiar la tecnología a javascript', () => {
    const config = new Config();
    config.changeTech('javascript');
    expect(config.tech).toBe('javascript');
  });
});