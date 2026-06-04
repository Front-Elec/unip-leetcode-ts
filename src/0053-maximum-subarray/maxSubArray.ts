// #53 - Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
// Dificultad: Medium
// Complejidad Tiempo: O(n) — un único recorrido lineal
// Complejidad Espacio: O(1) — solo almacenamos dos variables de control

/**
 * Encuentra la suma máxima de un subarray contiguo dentro del arreglo dado.
 *
 * Estrategia — Algoritmo de Kadane:
 *  - Mantenemos `currentSum`: la suma del subarray que termina en la posición actual.
 *  - Si `currentSum` se vuelve negativa, no vale la pena arrastrarla:
 *    descartamos ese prefijo y reiniciamos con el elemento actual.
 *  - `maxSum` registra el máximo global visto hasta el momento.
 *
 * Ejemplo: [-2, 1, -3, 4, -1, 2, 1, -5, 4] → 6  (subarray [4,-1,2,1])
 *
 * @param nums - arreglo de enteros (puede contener negativos)
 * @returns la suma máxima del subarray contiguo
 */
export function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];     // inicializamos con el primer elemento (puede ser negativo)
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Decidimos si "continuar" el subarray anterior o "empezar de cero" aquí
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
