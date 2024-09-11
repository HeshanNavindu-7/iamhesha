type ColorValue = string | number;

interface ColorPalette {
  [key: string]: ColorValue | ColorPalette;
}

/**
 * Flattens a nested color palette into a single-level object.
 * 
 * @param colors - The nested color palette object.
 * @returns A flat object where nested keys are joined with a dash (`-`).
 */
export const flattenColorPalette = (colors: ColorPalette): Record<string, ColorValue> => {
  const result: Record<string, ColorValue> = {};

  const recurse = (obj: ColorPalette, currentKey: string = '') => {
    if (typeof obj === 'object' && obj !== null) {
      Object.keys(obj).forEach((key) => {
        const value = obj[key];
        const newKey = currentKey ? `${currentKey}-${key}` : key;
        if (typeof value === 'object' && value !== null) {
          recurse(value as ColorPalette, newKey);
        } else {
          result[newKey] = value;
        }
      });
    }
  };

  recurse(colors);

  return result;
};
