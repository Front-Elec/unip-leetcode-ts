// #121 - Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
export function maxProfit(prices: number[]): number {
  let minPrice = Infinity; // el precio mínimo visto hasta el día actual
  let maxProfitVal = 0;    // mejor beneficio encontrado (0 si nunca es rentable)

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price; // encontramos un mejor día para comprar
    } else {
      // ¿Vender hoy sería más rentable que el mejor resultado anterior?
      maxProfitVal = Math.max(maxProfitVal, price - minPrice);
    }
  }

  return maxProfitVal;
}
