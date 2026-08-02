const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productList = document.getElementById("productName");
const optionList = productList.options;

console.log(optionList);
console.log(optionList[0]);
console.log(optionList[1]);

for (let i = 0; i < optionList.length; i++) {
    console.log(optionList[i]);
}

for (let j = 0; j < products.length; j++) {
    const newOption = document.createElement("option");
    newOption.textContent = products[j].name;
    newOption.value = products[j].id;
    productList.appendChild(newOption);
}
