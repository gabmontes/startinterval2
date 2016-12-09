const { expect } = require('chai')
const sinon = require('sinon')

const startInterval = require('../lib')

describe('startInterval', function () {
  it('should call the function and allow stopping it', function (done) {
    const fn = sinon.spy()
    const id = startInterval(fn, 50)
    setTimeout(function () {
      expect(fn.callCount).to.equals(3)
      clearInterval(id)
    }, 125)
    setTimeout(function () {
      expect(fn.callCount).to.equals(3)
      done()
    }, 175)
  })

  it('should call the function in the next tick', function (done) {
    const fn = sinon.spy()
    const id = startInterval(fn, 50)
    expect(fn.called).to.be.false
    setTimeout(function () {
      expect(fn.calledOnce).to.be.true
      clearInterval(id)
    }, 0)
    setTimeout(function () {
      expect(fn.calledOnce).to.be.true
      done()
    }, 75)
  })

  it('should pass received parameters', function (done) {
    const fn = sinon.spy()
    const id = startInterval(fn, 50, 'val1', 'val2')
    setTimeout(function () {
      expect(fn.calledWith('val1', 'val2')).to.be.true
    }, 0)
    setTimeout(function () {
      expect(fn.calledWith('val1', 'val2')).to.be.true
      clearInterval(id)
      done()
    }, 75)
  })
})
