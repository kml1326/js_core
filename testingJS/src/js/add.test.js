import {add, sub, multi, div, module} from './add.js'

describe('test for addition two numbers', () => {
	test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
	});

	test('adds 1 + 2 to equal 3', () => {
	  expect(add(1, 7)).toBe(8);
	});

	test('adds 1 + 2 to equal 3', () => {
	  expect(add(1, null)).toBe(null);
	});

	test('adds 1 + 2 to equal 3', () => {
	  expect(add(1, "string")).toBe(null);
	});

	test('adds 1 + 2 to equal 3', () => {
	  expect(add(1, "array")).toBe(null);
	});
})


describe('test for subtract two numbers', () => {
	test('subtract 1 - 2 to equal -1', () => {
  expect(sub(1, 2)).toBe(-1);
	});

	test('subtract 8 - 2 to equal 6', () => {
	  expect(sub(8, 2)).toBe(6);
	});

	test('subtract 8 - {} to equal null', () => {
	  expect(sub(8, "object")).toBe(null);
	});

	test('subtract [] - 2 to equal null', () => {
	  expect(sub("array", 2)).toBe(null);
	});

	test('subtract "string" - 2 to equal null', () => {
	  expect(sub("string", 2)).toBe(null);
	});
})


describe('test for multiply two numbers', () => {
	test('multiply 8 * 2 to equal 16', () => {
  expect(multi(8, 2)).toBe(16);
	});  


	test('multiply -8 * -2 to equal 16', () => {
	  expect(multi(-8, -2)).toBe(16);
	});

	test('multiply 8 * [] to equal 16', () => {
	  expect(multi(8, "array")).toBe(null);
	});

	test('multiply 8 * {} to equal 16', () => {
	  expect(multi(8, "object")).toBe(null);
	});

	test('multiply 8 * f() to equal 16', () => {
	  expect(multi(8, "function")).toBe(null);
	});
})


describe('test for division', () => {
	test('devide 8 / 2 to equal 4', () => {
  expect(div(8, 2)).toBe(4);
	});

	test('devide 2 / 4 to equal null', () => {
	  expect(div(2, 4)).toBe(null);
	});

	test('devide 8 / {} to equal null', () => {
	  expect(div(8, "object")).toBe(null);
	});

	test('devide [] / {} to equal null', () => {
	  expect(div("array", "object")).toBe(null);
	});

})


describe('test for modules', () => {
	test('module 3 / 2 to equal 1', () => {
	  expect(module(3, 2)).toBe(1);
	});

	test('module 4 / 2 to equal 0', () => {
	  expect(module(4, 2)).toBe(0);
	});

	test('module 3 / 6 to equal null', () => {
	  expect(module(3, 6)).toBe(null);
	});

	test('module [] / 6 to equal null', () => {
	  expect(module("array", 6)).toBe(null);
	});

	test('module 3 / {} to equal null', () => {
	  expect(module(3, "object")).toBe(null);
	});

	test('module f() / "string" to equal null', () => {
	  expect(module("function", "string")).toBe(null);
	});
})
