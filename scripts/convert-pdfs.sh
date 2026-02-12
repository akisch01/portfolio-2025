#!/bin/bash

CERTIFS_DIR="certifs"
cd "$(dirname "$0")/.."

echo "🔄 Conversion des PDFs en images JPG..."
echo ""

# Parcourir tous les PDFs
for pdf_file in "$CERTIFS_DIR"/*.pdf; do
    if [ -f "$pdf_file" ]; then
        # Nom du fichier sans extension
        base_name=$(basename "$pdf_file" .pdf)
        jpg_file="$CERTIFS_DIR/${base_name}.jpg"
        
        # Vérifier si le JPG existe déjà
        if [ -f "$jpg_file" ]; then
            echo "⏭  Déjà converti: $base_name.jpg"
            continue
        fi
        
        # Convertir la première page du PDF en JPG
        echo "📄 Conversion: $(basename "$pdf_file")"
        pdftoppm -jpeg -f 1 -l 1 -r 200 "$pdf_file" "$CERTIFS_DIR/${base_name}" 2>/dev/null
        
        # Renommer le fichier généré (pdftoppm crée nom-1.jpg)
        if [ -f "$CERTIFS_DIR/${base_name}-1.jpg" ]; then
            mv "$CERTIFS_DIR/${base_name}-1.jpg" "$jpg_file"
            echo "✓ Converti: $base_name.jpg"
        else
            echo "✗ Erreur lors de la conversion de $base_name"
        fi
    fi
done

echo ""
echo "✅ Conversion terminée!"

