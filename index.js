'use strict'

let arr = [];

class RangeValidator {
    /**
     *
     * Реализовать класс RangeValidator, со следующими свойствами:
     ■  from (number);
     ■  to (number);
     Реализовать getter'ы и setter'ы для обоих свойств
     Реализовать getter range, который будет возвращать массив с двумя числами диапазона
     Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.
     *
     * @param {number} from
     * @param {number} to
     * @param {number} number
     */
    constructor(from, to, number) {
        this.from = from;
        this.to = to;
        this.number = number;
    }

    set from(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Value must be number!');
        }
        this._from = arr.push(v);
    }

    get from() {
        return arr[0];
    }

    set to(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Value must be number!');
        }
        if (v < arr[0]) {
            throw new RangeError('Value must be greater than the initial');
        }
        this._to = arr.push(v);
    }

    get to() {
        return arr[1];
    }

    set number(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Value must be number!');
        }
        this._number = v;
    }

    get number() {
        return this._number;
    }

    get getterRange() {
        return arr;
    }

    get validate() {
        return this.number >= arr[0] && this.number <= arr[1];
    }
}

const value = new RangeValidator(10, 20, 15);
