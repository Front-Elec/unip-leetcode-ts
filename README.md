# unip-leetcode-ts

Soluciones a problemas de LeetCode en **TypeScript**, con análisis de complejidad y comentarios técnicos.

## Estructura

```
src/
├── 0001-two-sum/
│   └── twoSum.ts
├── 0002-add-two-numbers/
│   └── addTwoNumbers.ts
├── 0003-longest-substring-without-repeating/
│   └── lengthOfLongestSubstring.ts
└── 0004-median-of-two-sorted-arrays/
    └── findMedianSortedArrays.ts
```

Cada carpeta sigue el patrón `XXXX-problem-slug/` donde `XXXX` es el número del problema con ceros a la izquierda.

## Problemas resueltos

| # | Problema | Dificultad | Complejidad Tiempo | Complejidad Espacio |
|---|----------|------------|-------------------|---------------------|
| 1 | [Two Sum](./src/0001-two-sum/twoSum.ts) | Easy | O(n) | O(n) |
| 2 | [Add Two Numbers](./src/0002-add-two-numbers/addTwoNumbers.ts) | Medium | O(max(m,n)) | O(max(m,n)) |
| 3 | [Longest Substring Without Repeating Characters](./src/0003-longest-substring-without-repeating/lengthOfLongestSubstring.ts) | Medium | O(n) | O(min(n,σ)) |
| 4 | [Median of Two Sorted Arrays](./src/0004-median-of-two-sorted-arrays/findMedianSortedArrays.ts) | Hard | O(log(min(m,n))) | O(1) |
