// @description Definición de plataformas soportadas por el proyecto
// @author [Tu nombre]

export enum Platform {
  WINDOWS = 'windows',
  LINUX = 'linux',
  MACOS = 'macos',
  ANDROID = 'android',
  IOS = 'ios'
}

export const SUPPORTED_PLATFORMS: Record<string, string> = {
  [Platform.WINDOWS]: 'windows',
  [Platform.LINUX]: 'linux',
  [Platform.MACOS]: 'darwin', // MacOS utiliza darwin en el sistema operativo
  [Platform.ANDROID]: 'android',
  [Platform.IOS]: 'ios'
};