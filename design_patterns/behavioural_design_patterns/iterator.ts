interface MyIterator<T> {
  hasNext(): boolean;
  next(): T;
  remove(): void;
}

interface MyAggregate<T> {
  createIterator(): MyIterator<T>;
}

class MyArrayIterator<T> implements MyIterator<T> {
  private index: number = 0;

  constructor(private array: T[]) {}

  hasNext(): boolean {
    return this.index < this.array.length;
  }

  next(): T {
    return this.array[this.index++];
  }

  remove(): void {
    this.array.splice(this.index - 1, 1);
    this.index--;
  }
}

class MyArrayAggregate<T> implements MyAggregate<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  createIterator(): MyIterator<T> {
    return new MyArrayIterator<T>(this.items);
  }
}

const aggregate = new MyArrayAggregate<number>();
aggregate.add(1);
aggregate.add(2);
aggregate.add(3);

const iterator = aggregate.createIterator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
