export default function getContrastRatio(color1, color2) {
  // Function to convert hex to RGB
  function hexToRgb(hex) {
      // Remove the hash if it exists
      hex = hex.replace(/^#/, '');

      // Parse the hex value
      const bigint = parseInt(hex, 16);

      // Extract RGB components
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;

      // Return as an object
      return { r, g, b };
  }

  // Function to calculate relative luminance
  function getRelativeLuminance(color) {
      const gammaCorrect = (value) => {
          value = value / 255;
          return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
      };

      const { r, g, b } = hexToRgb(color);

      const rLinear = gammaCorrect(r);
      const gLinear = gammaCorrect(g);
      const bLinear = gammaCorrect(b);

      return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
  }

  // Get relative luminance values for both colors
  const luminance1 = getRelativeLuminance(color1);
  const luminance2 = getRelativeLuminance(color2);

  // Calculate the contrast ratio
  const contrastRatio = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);

  return contrastRatio.toFixed(2);
}