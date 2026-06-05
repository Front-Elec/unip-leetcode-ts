// #704 - Binary Search
// https://leetcode.com/problems/binary-search/
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
