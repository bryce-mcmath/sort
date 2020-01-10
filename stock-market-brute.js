// Create a function maxProfit, which, given a list of stock
// prices for a given day, returns the maximum profit that
// could have been made by buying a stock at the given price
// and then selling the stock later on.

const maxProfit = stockPrices => {
  // Input validation & sanitation
  if (!Array.isArray(stockPrices)) {
    return -1;
  }
  stockPrices = stockPrices.filter(
    price => Number.isInteger(price) && price > 0
  );

  const len = stockPrices.length;
  let profit = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (stockPrices[j] - stockPrices[i] > profit) {
        profit = stockPrices[j] - stockPrices[i];
      }
    }
  }

  if (profit) {
    return profit;
  }
};

let testStocks = [1, -4, 24, 3, "hello", 5, 61, 72, -2, 5];
console.log(maxProfit(testStocks));
