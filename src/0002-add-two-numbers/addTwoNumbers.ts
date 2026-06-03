// #2 - Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0); // nodo centinela — evita casos especiales en la cabeza
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1?.val ?? 0;
    const val2 = l2?.val ?? 0;

    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10); // siempre 0 ó 1
    current.next = new ListNode(sum % 10);

    current = current.next;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummy.next;
}
