import { CommandLineArgs } from '../shared/CommandLineArgs';

export function isDev(): boolean {
  return process.env.NODE_ENV === 'development';
}

export function isTesting(): boolean {
  return isDev() && process.argv.includes(CommandLineArgs.Testing);
}

export function ensureIsBoolean(arg: unknown, fallbackValue: boolean): boolean {
  if (typeof arg === 'boolean') {
    return arg;
  }
  return fallbackValue;
}

export function stringOrNull(arg: unknown): string | null {
  if (typeof arg === 'string') {
    return arg;
  }
  return null;
}

/** Ensures a path's drive letter is lowercase. */
export function lowercaseDriveLetter(filePath: string): string {
  return filePath.replace(/^\/[A-Z]:\//, (letter) => letter.toLowerCase());
}

export function timeout(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
