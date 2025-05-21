import type { Optional } from "@lib/types";

export class SinglyLinkedListNode<T> {
  val: T;
  next: Optional<SinglyLinkedListNode<T>>;

  constructor(value: T, next: Optional<SinglyLinkedListNode<T>> = null) {
    this.val = value;
    this.next = next;
  }
}

export class SinglyLinkedList<T> {
  head: Optional<SinglyLinkedListNode<T>>;

  constructor(head: Optional<SinglyLinkedListNode<T>> = null) {
    this.head = head;
  }

  addToBack(value: T) {
    if (this.head === null) {
      this.head = new SinglyLinkedListNode(value);
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    if (current) {
      current.next = new SinglyLinkedListNode(value);
    }
  }

  addToFront(value: T) {
    const node = new SinglyLinkedListNode(value);
    node.next = this.head;
    this.head = node;
  }

  removeFromFront(): Optional<SinglyLinkedListNode<T>> {
    if (!this.head) {
      return null;
    }

    const front = this.head;
    this.head = this.head.next;

    return front;
  }

  removeFromBack(): Optional<SinglyLinkedListNode<T>> {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    let prev = null;

    while (current.next !== null) {
      prev = current;
      current = current.next;
    }

    if (prev) {
      prev.next = null;
    }

    return current;
  }

  get first(): Optional<SinglyLinkedListNode<T>> {
    return this.head;
  }

  get last(): Optional<SinglyLinkedListNode<T>> {
    if (!this.head) {
      return null;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    return current;
  }

  find(value: T): Optional<SinglyLinkedListNode<T>> {
    if (!this.head) {
      return null;
    }

    let current: Optional<SinglyLinkedListNode<T>> = this.head;

    while (current !== null) {
      if (current.val === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  contains(value: T): boolean {
    return this.find(value) !== null;
  }

  get size(): number {
    let _size = 0;
    let current = this.head;

    if (!current) {
      return _size;
    }

    while (current !== null) {
      _size++;
      current = current.next;
    }

    return _size;
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.head = null;
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;

    if (!current) {
      return result;
    }

    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }

    return result;
  }

  [Symbol.iterator](): Iterator<Optional<SinglyLinkedListNode<T>>> {
    let current = this.head;

    return {
      next(): IteratorResult<Optional<SinglyLinkedListNode<T>>> {
        if (current) {
          const value = current;
          current = current.next;
          return { value, done: false };
        }

        return { value: null, done: true };
      },
    };
  }
}
