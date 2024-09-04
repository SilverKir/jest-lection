
//const { calculateTotal } = require('../src/calculate.js')
import { calculateTotal } from '../calculate.js';
test('basic test', () => {
    const result = 4;
    expect(result).toBe(4);
});

test('calculateTotal sum  without discount', () => {
    const list = [
        {
            id: 435,
            name: 'Книги',
            count: 3,
            price: 400
        },
        {
            id: 111,
            name: 'Учебник',
            count: 1,
            price: 1000
        }
    ]

    const result = calculateTotal(list);
    expect(result).toBe(2200);

})

test('calculateTotal sum with discount', () => {
    const list = [
        {
            id: 435,
            name: 'Книги',
            count: 3,
            price: 400
        },
        {
            id: 111,
            name: 'Учебник',
            count: 1,
            price: 1000
        }
    ]

    const result = calculateTotal(list, true);
    expect(result).toBeCloseTo(1100);

})