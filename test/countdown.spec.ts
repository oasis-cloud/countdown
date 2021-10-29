import oasis from '../src/index'

const assert = require("assert");
const [clearCountdown, addCountdown] = oasis.countdown();

describe("Typescript usage suite", () => {
    it("add countdown taskOne", () => {
        let remaining = 1000
        addCountdown('taskOne', {remaining, unit: 'sec'}, (c) => {
            assert(typeof remaining, 'number')
            assert(remaining > c)
            remaining = c
        })
    });
    it("add countdown taskTwo", () => {
        addCountdown('taskTwo', {remaining: 2000, unit: 'sec'}, (remaining) => {
            assert(typeof remaining, 'number')
        })
    });
    it("remove countdown taskOne", () => {
        clearCountdown('taskOne')
    })
    it("remove countdown taskTwo", () => {
        clearCountdown('taskTwo')
    })
});
