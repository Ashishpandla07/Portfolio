const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const buildDir = path.join(__dirname, '..', 'build');

function compressFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.html', '.js', '.css', '.svg', '.json', '.txt', '.xml'].includes(ext)) {
    return;
  }
  const content = fs.readFileSync(filePath);

  // Gzip (level 9 - maximum compression)
  const gz = zlib.gzipSync(content, { level: 9 });
  fs.writeFileSync(`${filePath}.gz`, gz);

  // Brotli (quality 11 - maximum compression)
  const br = zlib.brotliCompressSync(content, {
    params: {
      [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
    },
  });
  fs.writeFileSync(`${filePath}.br`, br);
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.isFile() && !entry.name.endsWith('.gz') && !entry.name.endsWith('.br')) {
      compressFile(fullPath);
    }
  }
}

walkDir(buildDir);
console.log('Pre-compression complete: Brotli (.br) and Gzip (.gz) generated for all static assets.');
