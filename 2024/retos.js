// Reto #1: 🎁 ¡Primer regalo repetido!
export default function prepareGifts(gifts) {
  return [...new Set(gifts)].sort((a, b) => a - b);
}

// Reto #2: 🖼️ Enmarcando nombres
export default function createFrame(names) {
  const maxLength = Math.max(...names.map(name => name.length));
  const border = "*".repeat(maxLength + 4);
  const framedNames = names.map(name => `* ${name.padEnd(maxLength)} *`)
  return [border, ...framedNames, border].join("\n");
}

// Reto #3: 🏗️ Organizando el inventario
export default function organizeInventory(inventory) {

  let object = {}

  for (const { name, quantity, category } of inventory) {
    object[category] = object[category] || {};
    object[category][name] = (object[category][name] || 0) + quantity;
  }

  return object
}

// Reto #4: 🎄 Decorando el árbol de Navidad
export default function createXmasTree(height, ornament) {
  const totalWidth = (height * 2) - 1;
  const centerIndex = Math.floor(totalWidth / 2);
  const trunk = `${"_".repeat(centerIndex)}#${"_".repeat(centerIndex)}`;
  const tree = [];

  for (let i = 0; i < height; i++) {
    const ornamentsRow = ornament.repeat(2 * i + 1);
    const branches = ornamentsRow.padStart(centerIndex + i + 1, "_").padEnd(totalWidth, "_");
    tree.push(branches);
  }

  tree.push(trunk, trunk);
  return tree.join("\n");
}