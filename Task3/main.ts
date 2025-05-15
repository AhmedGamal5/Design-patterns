function range(start: number, end: number, step: number = 1): Iterable<number> {
  const isValid = (val: number) =>
    (step > 0 && val < end) || (step < 0 && val > end);

  return {
    [Symbol.iterator]() {
      let current = start;

      return {
        next(): IteratorResult<number> {
          if (isValid(current)) {
            const result = { value: current, done: false };
            current += step;
            return result;
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}


function* rangeGenerator(start: number, end: number, step: number = 1): Generator<number> {
  const isValid = (val: number) =>
    (step > 0 && val < end) || (step < 0 && val > end);

  for (let current = start; isValid(current); current += step) {
    yield current;
  }
}

console.log('==>>>Using iterable:');
for (const value of range(0, 10)) {
  console.log(value);
}

console.log([...range(1, 10)]);

const iterator = range(1, 10)[Symbol.iterator]();
console.log(iterator.next());


console.log('==>>>Using generator:');
for (const value of rangeGenerator(0, 10)) {
  console.log(value);
}

console.log([...rangeGenerator(1, 10)]);

const gen = rangeGenerator(1, 10);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
