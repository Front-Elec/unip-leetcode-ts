// #4 - Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  // Siempre hacemos binary search sobre el array más corto
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;
  const halfLen = Math.floor((m + n + 1) / 2);

  let lo = 0;
  let hi = m;

  while (lo <= hi) {
    const partitionX = Math.floor((lo + hi) / 2);
    const partitionY = halfLen - partitionX;

    // ±Infinity maneja los casos borde sin if/else extra
    const maxLeftX  = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minRightX = partitionX === m ?  Infinity : nums1[partitionX];
    const maxLeftY  = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minRightY = partitionY === n ?  Infinity : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      // Partición válida encontrada
      if ((m + n) % 2 === 1) {
        return Math.max(maxLeftX, maxLeftY);
      } else {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      }
    } else if (maxLeftX > minRightY) {
      hi = partitionX - 1; // partitionX demasiado a la derecha
    } else {
      lo = partitionX + 1; // partitionX demasiado a la izquierda
    }
  }

  throw new Error("Arrays no ordenados o restricciones violadas");
}
