function combineArrays(colors, items, promotions) {
  const maxLength = Math.min(colors.length, items.length, promotions.length);
  let combinedArray = [];

  for (let i = 0; i < maxLength; i++) {
    combinedArray.push(
      `${capitalize(items[i])} ${capitalize(colors[i])} ${capitalize(
        promotions[i]
      )}`
    );
  }

  return combinedArray;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

let colors = ["merah", "kuning", "hijau", "pink", "ungu", "maroon"];
let items = ["baju", "celana", "topi", "jaket", "sepatu", "baju"];
let promotions = ["Diskon", "Sale", "Diskon", "Sale", "Sale", "Diskon"];

let result = combineArrays(colors, items, promotions);
console.log(result);
