# unip-leetcode-ts

Soluciones optimizadas a problemas de LeetCode utilizando **TypeScript** con tipado fuerte, análisis de complejidad computacional y explicaciones técnicas de cada algoritmo.

---

## 👥 Integrantes

| Estudiante | Ejercicios Asignados |
| :--- | :--- |
| **Integrante A** | #1, #2, #3, #4, #5 |
| **Integrante B (Tú)** | #20, #21, #53, #121, #704 |

---

## 📂 Estructura del Proyecto

```text
src/
├── 0001-two-sum/
│   └── twoSum.ts
├── 0002-add-two-numbers/
│   └── addTwoNumbers.ts
├── 0003-longest-substring-without-repeating/
│   └── lengthOfLongestSubstring.ts
├── 0004-median-of-two-sorted-arrays/
│   └── findMedianSortedArrays.ts
├── 0005-longest-palindromic-substring/
│   └── longestPalindrome.ts
├── 0020-valid-parentheses/
│   └── validParentheses.ts
├── 0021-merge-two-sorted-lists/
│   └── mergeTwoLists.ts
├── 0053-maximum-subarray/
│   └── maxSubArray.ts
├── 0121-best-time-to-buy-and-sell-stock/
│   └── maxProfit.ts
└── 0704-binary-search/
    └── search.ts
```

Cada directorio sigue la convención de nomenclatura `XXXX-nombre-del-problema/`, donde `XXXX` representa el identificador numérico de LeetCode con ceros a la izquierda.

---

## 📊 Tabla Resumen de Soluciones

| # | Problema | Dificultad | Enfoque Algorítmico | Complejidad Tiempo | Complejidad Espacio | Autor |
| :--- | :--- | :---: | :--- | :---: | :---: | :--- |
| 1 | [Two Sum](./src/0001-two-sum/twoSum.ts) | **Easy** | Hash Map (un solo recorrido) | $O(n)$ | $O(n)$ | Integrante A |
| 2 | [Add Two Numbers](./src/0002-add-two-numbers/addTwoNumbers.ts) | **Medium** | Simulación iterativa con acarreo | $O(\max(m, n))$ | $O(\max(m, n))$ | Integrante A |
| 3 | [Longest Substring Without Repeating](./src/0003-longest-substring-without-repeating/lengthOfLongestSubstring.ts) | **Medium** | Ventana Deslizante (Sliding Window) | $O(n)$ | $O(\min(n, \sigma))$ | Integrante A |
| 4 | [Median of Two Sorted Arrays](./src/0004-median-of-two-sorted-arrays/findMedianSortedArrays.ts) | **Hard** | Búsqueda Binaria sobre Partición | $O(\log(\min(m, n)))$ | $O(1)$ | Integrante A |
| 5 | [Longest Palindromic Substring](./src/0005-longest-palindromic-substring/longestPalindrome.ts) | **Medium** | Expansión desde el centro | $O(n^2)$ | $O(1)$ | Integrante A |
| 20 | [Valid Parentheses](./src/0020-valid-parentheses/validParentheses.ts) | **Easy** | Estructura de Pila (Stack) | $O(n)$ | $O(n)$ | Integrante B |
| 21 | [Merge Two Sorted Lists](./src/0021-merge-two-sorted-lists/mergeTwoLists.ts) | **Easy** | Punteros iterativos con centinela | $O(m + n)$ | $O(1)$ | Integrante B |
| 53 | [Maximum Subarray](./src/0053-maximum-subarray/maxSubArray.ts) | **Medium** | Algoritmo de Kadane | $O(n)$ | $O(1)$ | Integrante B |
| 121 | [Best Time to Buy and Sell Stock](./src/0121-best-time-to-buy-and-sell-stock/maxProfit.ts) | **Easy** | Enfoque Greedy (un solo recorrido) | $O(n)$ | $O(1)$ | Integrante B |
| 704 | [Binary Search](./src/0704-binary-search/search.ts) | **Easy** | Búsqueda Binaria iterativa | $O(\log n)$ | $O(1)$ | Integrante B |

---

## 📝 Detalle de Soluciones Técnicas

### #1 - Two Sum
- **Enfoque**: Hash Map (un solo recorrido). La solución por fuerza bruta itera sobre cada par $(i, j)$ resultando en $O(n^2)$. Esta solución logra tiempo lineal guardando los valores previos en un mapa hash.
- **Idea central**: En vez de preguntar si existe un número complementario recorriendo todo el array restante, preguntamos en $O(1)$ si ya hemos visto dicho complemento en nuestro mapa de registros previos.
- **Complejidades**: Tiempo: $O(n)$ \| Espacio: $O(n)$.

### #2 - Add Two Numbers
- **Enfoque**: Simulación iterativa con acarreo. Las listas ya vienen en orden inverso (dígito menos significativo primero), permitiendo emular una suma aritmética clásica columna por columna.
- **Decisiones clave**: Uso de un nodo centinela (dummy head) para simplificar la creación de la lista unificada y evitar lógica condicional al establecer el primer nodo del resultado.
- **Complejidades**: Tiempo: $O(\max(m, n))$ \| Espacio: $O(\max(m, n))$.

### #3 - Longest Substring Without Repeating Characters
- **Enfoque**: Ventana deslizante (Sliding Window) + Hash Map. La ventana $[left, right]$ mantiene los caracteres únicos. Al encontrar un duplicado, en vez de desplazar el puntero `left` de uno en uno, saltamos directamente a la posición posterior del último índice guardado en el mapa.
- **Guard crítico**: `lastIndex >= left` para ignorar duplicados que pertenezcan a ventanas previas ya descartadas.
- **Complejidades**: Tiempo: $O(n)$ \| Espacio: $O(\min(n, \sigma))$.

### #4 - Median of Two Sorted Arrays
- **Enfoque**: Búsqueda Binaria sobre particiones de dos arreglos. En lugar de fusionar los dos arreglos en uno solo ($O(m+n)$), buscamos un punto de corte que divida el set combinado en dos mitades balanceadas.
- **Decisiones clave**: Ejecutar la búsqueda binaria estrictamente sobre el arreglo más pequeño para garantizar la máxima velocidad computacional.
- **Complejidades**: Tiempo: $O(\log(\min(m, n)))$ \| Espacio: $O(1)$.

### #5 - Longest Palindromic Substring
- **Enfoque**: Expansión desde el centro. Para evitar una evaluación de todas las subcadenas posibles ($O(n^3)$), consideramos cada carácter (e índices intermedios para palíndromos pares) como el centro simétrico y expandimos hacia afuera mientras los extremos coincidan.
- **Complejidades**: Tiempo: $O(n^2)$ \| Espacio: $O(1)$.

---

### #20 - Valid Parentheses
- **Enfoque**: Pila (Stack) auxiliar. Los caracteres de cierre deben cerrarse en el orden inverso al que se abrieron (LIFO - Last In, First Out).
- **Idea central**: Usar una pila estructurada sobre un array convencional. Los caracteres de apertura se apilan y los de cierre extraen y verifican el último elemento de la pila en $O(1)$.
- **Complejidades**: Tiempo: $O(n)$ \| Espacio: $O(n)$.

### #21 - Merge Two Sorted Lists
- **Enfoque**: Fusión iterativa utilizando un nodo centinela (dummy node).
- **Decisiones clave**: Modificar la estructura `next` in-place directamente sobre las listas originales en lugar de instanciar nuevos objetos en la memoria dinámica.
- **Complejidades**: Tiempo: $O(m + n)$ \| Espacio: $O(1)$.

### #53 - Maximum Subarray
- **Enfoque**: Algoritmo de Kadane (Programación Dinámica lineal).
- **Idea central**: En cada elemento, evaluamos si es más óptimo extender el subarray máximo acumulado previo o iniciar un subarray totalmente nuevo a partir del índice actual.
- **Complejidades**: Tiempo: $O(n)$ \| Espacio: $O(1)$.

### #121 - Best Time to Buy and Sell Stock
- **Enfoque**: Greedy de recorrido único.
- **Idea central**: Mantener registro continuo del precio de compra mínimo histórico (`minPrice`) y calcular la diferencia contra el precio actual en cada iteración para actualizar el récord de beneficio.
- **Complejidades**: Tiempo: $O(n)$ \| Espacio: $O(1)$.

### #704 - Binary Search
- **Enfoque**: Búsqueda Binaria iterativa por bisección.
- **Decisiones clave**: Calcular el índice medio usando `left + Math.floor((right - left) / 2)` en lugar de sumas clásicas que son propensas a causar desbordamiento de enteros (overflow).
- **Complejidades**: Tiempo: $O(\log n)$ \| Espacio: $O(1)$.
