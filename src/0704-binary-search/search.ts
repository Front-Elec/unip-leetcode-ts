// #704 - Binary Search
// https://leetcode.com/problems/binary-search/
// Dificultad: Easy
// Complejidad Tiempo: O(log n) — dividimos el espacio de búsqueda a la mitad en cada paso
// Complejidad Espacio: O(1) — búsqueda iterativa, sin recursión ni estructuras auxiliares

/**
 * Busca un elemento en un arreglo ordenado ascendentemente y devuelve su índice.
 *
 * Estrategia — Búsqueda Binaria Iterativa:
 *  - Mantenemos dos punteros `left` y `right` que delimitan la región de búsqueda.
 *  - En cada iteración calculamos el índice medio `mid`.
 *    · Si `nums[mid] === target` → encontrado, retornamos `mid`.
 *    · Si `nums[mid] < target`  → el target está en la mitad derecha: `left = mid + 1`.
 *    · Si `nums[mid] > target`  → el target está en la mitad izquierda: `right = mid - 1`.
 *  - Si los punteros se cruzan sin encontrarlo → retornamos -1.
 *
 * Nota: usamos `left + Math.floor((right - left) / 2)` en lugar de
 * `Math.floor((left + right) / 2)` para evitar desbordamiento de enteros.
 *
 * @param nums   - arreglo de enteros ordenado ascendentemente (sin duplicados)
 * @param target - valor a buscar
 * @returns índice del target si existe, -1 en caso contrario
 */
export function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2); // evita overflow

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;  // buscar en la mitad derecha
    } else {
      right = mid - 1; // buscar en la mitad izquierda
    }
  }

  return -1; // no encontrado
}
