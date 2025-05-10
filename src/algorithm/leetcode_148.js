// 排序链表

// https://leetcode.cn/problems/sort-list/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head; // 如果链表为空或只有一个节点，直接返回

  // 快慢指针找到中间节点
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 分割链表
  let mid = slow.next;
  slow.next = null; // 断开链表，分割为两部分
  let left = sortList(head); // 左半部分排序
  let right = sortList(mid); // 右半部分排序

  // 合并两个已排序的链表
  return merge(left, right);
};
