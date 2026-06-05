// #53 - Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
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
