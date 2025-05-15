"use strict";
function range(start, end, step = 1) {
    return {
        [Symbol.iterator]() {
            let current = start;
            return {
                next() {
                    if ((step > 0 && current < end) ||
                        (step < 0 && current > end)) {
                        const value = current;
                        current += step;
                        return { value, done: false };
                    }
                    return { value: undefined, done: true };
                },
            };
        },
    };
}
function* rangeGenerator(start, end, step = 1) {
    let current = start;
    while ((step > 0 && current < end) || (step < 0 && current > end)) {
        yield current;
        current += step;
    }
}
for (const value of range(0, 10, 1)) {
    console.log(value);
}
console.log([...range(1, 10, 1)]);
const iterator = range(1, 10, 1);
console.log(iterator[Symbol.iterator]().next());
for (const value of rangeGenerator(0, 10, 1)) {
    console.log(value);
}
console.log([...rangeGenerator(1, 10, 1)]);
const generatorIterator = rangeGenerator(1, 10, 1);
console.log(generatorIterator.next());
console.log(generatorIterator.next());
console.log(generatorIterator.next());
