// #5 - Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
export function longestPalindrome(s: string): string {
  if (s.length <= 1) return s;

  let bestStart = 0;
  let bestLen = 1;

  function expand(left: number, right: number): void {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // El último palíndromo válido fue [left+1, right-1]
    const len = right - left - 1;
    if (len > bestLen) {
      bestLen = len;
      bestStart = left + 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expand(i, i);     // palíndromos de longitud impar  (centro en un char)
    expand(i, i + 1); // palíndromos de longitud par    (centro en el gap)
  }

  return s.slice(bestStart, bestStart + bestLen);
}
