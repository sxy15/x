import { describe, expect, it } from 'vitest'

import { noop, extend, isArray, isObject, isDef, isFunction, isPromise, Numeric } from '../src/basic'

describe('noop', () => {
  it('should be a function', () => {
    expect(typeof noop).toBe('function')
  })

  it('should not throw an error when called', () => {
    expect(() => { noop() }).not.toThrow()
  })

  it('should return undefined when called', () => {
    expect(noop()).toBeUndefined()
  })
})

describe('extend', () => {
  it('extend should be Object.assign', () => {
    expect(extend).toBe(Object.assign)
  })
})

describe('isArray', () => {
  it('{} should be false', () => {
    expect(isArray({})).toBe(false)
  })

  it('[] should be true', () => {
    expect(isArray([])).toBe(true)
  })
})

describe('isObject', () => {
  it('isObject should correctly identify objects', () => {
    expect(isObject({})).toBe(true)
    expect(isObject(null)).toBe(false)
    expect(isObject([])).toBe(true)
    expect(isObject('string')).toBe(false)
  })
})

describe('isDef', () => {
  it('isDef should correctly identify defined values', () => {
    expect(isDef(1)).toBe(true)
    expect(isDef(null)).toBe(false)
    expect(isDef(undefined)).toBe(false)
    expect(isDef('string')).toBe(true)
  })
})

describe('isFunction', () => {
  it('isFunction should correctly identify functions', () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(function() {})).toBe(true)
    expect(isFunction({})).toBe(false)
  })
})

describe('isPromise', () => {
  it('isPromise should correctly identify promises', () => {
    expect(isPromise(Promise.resolve())).toBe(true)
    expect(isPromise({ then: () => {}, catch: () => {} })).toBe(true)
    expect(isPromise({})).toBe(false)
    expect(isPromise(null)).toBe(false)
  })
})

describe('numeric', () => {
  it('Numeric type should include number and string', () => {
    const num: Numeric = 1
    const str: Numeric = 'string'
    expect(typeof num === 'number' || typeof num === 'string').toBe(true)
    expect(typeof str === 'number' || typeof str === 'string').toBe(true)
  })
})
