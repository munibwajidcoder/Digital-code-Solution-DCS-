const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function removeWhiteBg(inputFile, outputFile) {
  try {
    const { data, info } = await sharp(inputFile)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];
      
      // More aggressive white/grey removal for Illustrator
      // Even if it's slightly off-white (e.g. compression artifacts)
      if (r > 150 && g > 150 && b > 150 && Math.abs(r - g) < 40 && Math.abs(g - b) < 40) {
        // Also ensure we don't accidentally remove orange (orange has high R, moderate G, low B)
        // Illustrator orange is around (255, 154, 0). So B is very low.
        // If B is > 150, it's definitely not the orange part.
        data[i+3] = 0; // Make transparent
      }
    }

    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    }).png().toFile(outputFile);
    console.log(`Processed ${inputFile} -> ${outputFile}`);
  } catch (err) {
    console.error(`Error processing ${inputFile}:`, err);
  }
}

async function main() {
  const dir = path.join(__dirname, 'public', 'images', 'uploaded-logos');
  
  // Reprocess Illustrator with more aggressive white removal
  await removeWhiteBg(path.join(dir, 'logo_ai.jpg'), path.join(dir, 'logo_ai_transparent.png'));
}

main();
