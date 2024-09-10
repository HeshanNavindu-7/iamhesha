// utils/flattenColorPalette.ts
export const flattenColorPalette = (colors: any) => {
    const result: any = {};
  
    const recurse = (obj: any, currentKey: string = '') => {
      Object.keys(obj).forEach((key) => {
        const value = obj[key];
        const newKey = currentKey ? `${currentKey}-${key}` : key;
        if (typeof value === 'object' && value !== null) {
          recurse(value, newKey);
        } else {
          result[newKey] = value;
        }
      });
    };
  
    recurse(colors);
  
    return result;
  };
  