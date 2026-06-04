// #1 - Two Sum
// https://leetcode.com/problems/two-sum/
export function twoSum(nums: number[], target: number): [number, number] {
  const seen = new Map<number, number>(); // valor → índice

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }

    seen.set(nums[i], i);
  }

  throw new Error("Sin solución — la entrada viola las restricciones del problema");
}
