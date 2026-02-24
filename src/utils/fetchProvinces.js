// Script to fetch provinces data from API and generate exportedFilev2.ts
// Run with: node src/utils/fetchProvinces.js

async function fetchAndGenerate() {
    const response = await fetch('https://provinces.open-api.vn/api/v2/?depth=2');
    const data = await response.json();

    // Transform API data to match the format needed by the app
    const provinces = data.map(province => {
        const wards = (province.wards || []).map(ward => ({
            value: ward.name,
            code: ward.code
        }));

        return {
            value: province.name,
            code: province.code,
            wards: wards
        };
    });

    // Generate TypeScript file content
    let tsContent = `// Auto-generated from https://provinces.open-api.vn/api/v2/?depth=2
// Generated on: ${new Date().toISOString()}
// Structure: Province -> Wards (no district level)

export class exportedFilev2 {

  loadAllProvince() {
    return this.loadAll()
  }

  loadAll() {
    return ${JSON.stringify(provinces, null, 2)}
  }

  checkVietHoaHoTen(str) {
    var convertToArray = str.toLowerCase().split(' ');
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(' ');
  }
}
`;

    const fs = require('fs');
    const path = require('path');
    const outputPath = path.join(__dirname, 'exportedFilev2.ts');
    fs.writeFileSync(outputPath, tsContent, 'utf8');

    console.log(`Generated ${outputPath}`);
    console.log(`Total provinces: ${provinces.length}`);

    let totalWards = 0;
    provinces.forEach(p => totalWards += p.wards.length);
    console.log(`Total wards: ${totalWards}`);
}

fetchAndGenerate().catch(console.error);
