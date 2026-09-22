const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '..', 'src', 'assets', 'images');

const imagesToProcess = [
  'profile.jpg',
  'cargo_partner_logo.jpg',
  'cars24_logo.png',
  'cost_optimization.jpg',
  'financial_growth.jpg',
  'finance_dashboard.jpg',
  'audit_compliance.jpg',
  'business_partnering.jpg',
  'achievement_award.jpg',
  'icai_logo.png',
  'rajasthan_university_logo.png'
];

async function run() {
  const metadataMap = {};

  for (const file of imagesToProcess) {
    const inputPath = path.join(imagesDir, file);
    if (!fs.existsSync(inputPath)) {
      console.warn(`File not found: ${file}`);
      continue;
    }
    const meta = await sharp(inputPath).metadata();
    const baseName = path.basename(file, path.extname(file));
    metadataMap[file] = {
      width: meta.width,
      height: meta.height,
      format: meta.format,
      aspectRatio: (meta.width / meta.height).toFixed(2)
    };

    // Output WebP
    const webpPath = path.join(imagesDir, `${baseName}.webp`);
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(webpPath);

    // Also generate a 2x / resized responsive version for project card images if large
    if (meta.width >= 800) {
      const webpSmallPath = path.join(imagesDir, `${baseName}-sm.webp`);
      await sharp(inputPath)
        .resize({ width: 400 })
        .webp({ quality: 85 })
        .toFile(webpSmallPath);
    }

    console.log(`Converted: ${file} -> ${baseName}.webp (Original: ${meta.width}x${meta.height})`);
  }

  console.log('\n--- Metadata Summary ---');
  console.log(JSON.stringify(metadataMap, null, 2));
}

run().catch(console.error);
