'use strict'

let result = [];
const sales = document.getElementById("itemsold")
const finalSaleSheet = document.getElementById("final")
const itemSold = function (
phoneSold = [],
watchSold = [],
tabletSold = []
){
this.phoneSold = phoneSold;
this.watchSold = watchSold;
this.tabletSold = tabletSold
};
const saleSheet = () => {
Obj = {
phoneSold:['iphone', 'samsung', 'google pixel'],
watchSold: ['apple watch', 'samsung watch', 'store brand watch'],
tabletSold: ['ipad', 'samsung tablet', 'store branded tablet'],
  }
};
const getRandomPrice = (min, max) => {
    min = 100;
    max = 400
    return Math.random() * (min - max) + min;
};
const getRandom = (max) => {
    return Math.floor(math.random() * max)
};
randomitemSold = (saleSheet) => {
  outcome.push(`the phone will be ${Obj.phoneSold[getRandom(2)]}
for ${getRandomPrice} the watch would be ${obj.watchSold[getRandom(2)]}
for ${getRandomPrice} and the final item would be ${obj.tabletSold[getRandom(2)]}
for ${getRandomPrice}`)
};
sales.addeventlistner("click", (e) => {
  e.preventDefault();
   randomitemSold();
const final = document.createElement("h2")
final.textContent = outcome [1]
finalSaleSheet.appendChild(final)
  }
);















