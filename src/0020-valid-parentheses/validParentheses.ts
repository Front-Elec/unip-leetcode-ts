// #20 - Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
// Dificultad: Easy
// Complejidad Tiempo: O(n) — recorremos la cadena una sola vez
// Complejidad Espacio: O(n) — en el peor caso el stack guarda todos los chars

/**
 * Determina si una cadena de paréntesis, llaves y corchetes está correctamente cerrada.
 *
 * Estrategia — Stack (pila):
 *  - Al encontrar un símbolo de apertura lo apilamos.
 *  - Al encontrar un símbolo de cierre, verificamos que el tope del stack sea
 *    su pareja de apertura. Si no coincide (o el stack está vacío) → inválido.
 *  - Al finalizar, el stack debe quedar completamente vacío.
 *
 * @param s - cadena que contiene solo los caracteres '(', ')', '{', '}', '[', ']'
 * @returns true si la cadena es válida, false en caso contrario
 */
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
