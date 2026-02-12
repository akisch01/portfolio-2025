const fs = require('fs');
const path = require('path');
const pdf = require('pdf-poppler');

const certifsDir = path.join(__dirname, '..', 'certifs');

// Fonction pour convertir un PDF en JPG
async function convertPdfToJpg(pdfPath) {
  const options = {
    format: 'jpeg',
    out_dir: certifsDir,
    out_prefix: path.basename(pdfPath, path.extname(pdfPath)),
    page: 1, // Convertir seulement la première page
    density: 200, // Résolution
  };

  try {
    await pdf.convert(pdfPath, options);
    const jpgPath = path.join(certifsDir, `${options.out_prefix}-1.jpg`);
    // Renommer pour enlever le -1
    const finalPath = path.join(certifsDir, `${options.out_prefix}.jpg`);
    if (fs.existsSync(jpgPath)) {
      fs.renameSync(jpgPath, finalPath);
      console.log(`✓ Converti: ${path.basename(pdfPath)} -> ${path.basename(finalPath)}`);
      return finalPath;
    }
  } catch (error) {
    console.error(`✗ Erreur pour ${path.basename(pdfPath)}:`, error.message);
  }
}

// Fonction principale
async function main() {
  console.log('🔄 Conversion des PDFs en images JPG...\n');

  const files = fs.readdirSync(certifsDir);
  const pdfFiles = files.filter(file => file.endsWith('.pdf'));

  console.log(`📄 ${pdfFiles.length} fichiers PDF trouvés\n`);

  for (const pdfFile of pdfFiles) {
    const pdfPath = path.join(certifsDir, pdfFile);
    const jpgName = pdfFile.replace('.pdf', '.jpg');
    const jpgPath = path.join(certifsDir, jpgName);

    // Vérifier si l'image existe déjà
    if (fs.existsSync(jpgPath)) {
      console.log(`⏭  Déjà converti: ${jpgName}`);
      continue;
    }

    await convertPdfToJpg(pdfPath);
  }

  console.log('\n✅ Conversion terminée!');
}

main().catch(console.error);

