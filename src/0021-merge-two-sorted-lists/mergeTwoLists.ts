// #21 - Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/
// Dificultad: Easy
// Complejidad Tiempo: O(m + n) — visitamos cada nodo exactamente una vez
// Complejidad Espacio: O(1) — re-enlazamos punteros, no creamos nodos nuevos (salvo el centinela)

/**
 * Nodo de lista enlazada individual.
 */
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Fusiona dos listas enlazadas ordenadas en una sola lista ordenada.
 *
 * Estrategia — Iterativa con nodo centinela:
 *  - Usamos un nodo dummy para evitar casos especiales en la cabeza.
 *  - En cada paso comparamos los valores de l1 y l2, enlazamos el menor
 *    al resultado y avanzamos ese puntero.
 *  - Al terminar uno de los dos, enchufamos el resto del otro directamente.
 *
 * @param list1 - cabeza de la primera lista ordenada (ascendente)
 * @param list2 - cabeza de la segunda lista ordenada (ascendente)
 * @returns cabeza de la lista fusionada y ordenada
 */
export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode(0); // centinela: simplifica el manejo de la cabeza
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Enchufa la lista que no se agotó (ya está ordenada)
  current.next = list1 ?? list2;

  return dummy.next;
}
