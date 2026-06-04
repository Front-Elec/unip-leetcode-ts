// #3 - Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
export function lengthOfLongestSubstring(s: string): number {
  const lastSeen = new Map<string, number>(); // char → último índice visto
  let max = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    const lastIndex = lastSeen.get(char);

    // El duplicado está dentro de la ventana actual → saltar left past él
    if (lastIndex !== undefined && lastIndex >= left) {
      left = lastIndex + 1;
    }

    lastSeen.set(char, right);
    max = Math.max(max, right - left + 1);
  }

  return max;
}
