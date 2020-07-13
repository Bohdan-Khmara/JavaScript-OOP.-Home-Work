'use strict'

class User {
    /**
     *
     *Реализуйте класс Student (Студент), который будет наследовать от класса User.
     * Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
     * surname (фамилия, наследуется от User), year (год поступления в вуз).
     * Класс должен иметь метод getFullName() (наследуется от User), с помощью которого
     * можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод
     * getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется
     * так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
     *
     * @param {string} name
     * @param {string} surname
     * @param {number} year
     */
    constructor(name, surname, year) {
        this._name = name;
        this._surname = surname;
        this._year = year;
    }

    getFullName() {
        return `${this._name} ${this._surname}`;
    }

}

class Student extends User {
    constructor(name, surname, year, thisYear) {
        super(name, surname, year);
        this._thisYear = thisYear;
    }
    getCourse(){
        return this._thisYear - this._year;
    }

}

const student1 = new Student('Bohdan', 'Khmara', 2017, 2020);