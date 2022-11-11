"use strict"
let result = [];
const sales = document.getElementById("itemsold")
const finalSaleSheet = document.getElementById("final")

class store {
  constructor(order, total, saleSheet) {
this.order,
this.total
  };
   
}
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
  final.textContent = outcome [0]
  finalSaleSheet.appendChild(final)
    }
  );


