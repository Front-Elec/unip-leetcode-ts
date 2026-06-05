// #20 - Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
export function isValid(s: string): boolean {
  const stack: string[] = [];

  // Mapa de cierre → apertura para lookup O(1)
  const matching: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of s) {
    if (char in matching) {
      // Es un símbolo de cierre: el tope del stack debe ser su pareja
      if (stack.pop() !== matching[char]) {
        return false;
      }
    } else {
      // Es un símbolo de apertura: lo apilamos
      stack.push(char);
    }
  }

  // Si el stack quedó vacío, todos los abiertos fueron correctamente cerrados
  return stack.length === 0;
}
