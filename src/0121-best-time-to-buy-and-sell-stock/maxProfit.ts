// #121 - Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Dificultad: Easy
// Complejidad Tiempo: O(n) — recorremos los precios una sola vez
// Complejidad Espacio: O(1) — solo guardamos el precio mínimo y el profit máximo

/**
 * Calcula el máximo beneficio posible comprando y vendiendo una acción una vez.
 *
 * Estrategia — Greedy (un solo recorrido):
 *  - Mantenemos `minPrice`: el precio más bajo visto hasta ahora (mejor día de compra).
 *  - En cada día calculamos el profit si vendiéramos hoy: `price - minPrice`.
 *  - Actualizamos `maxProfit` si encontramos un beneficio mayor.
 *  - La restricción "comprar antes de vender" se respeta naturalmente porque
 *    `minPrice` siempre precede al día actual.
 *
 * Ejemplo: [7, 1, 5, 3, 6, 4] → 5  (comprar en día 2 a 1, vender en día 5 a 6)
 *
 * @param prices - arreglo donde prices[i] es el precio de la acción el día i
 * @returns el beneficio máximo, o 0 si no hay operación rentable
 */
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
