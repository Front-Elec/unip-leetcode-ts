// #21 - Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

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
