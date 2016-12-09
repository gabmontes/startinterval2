function startInterval (fn, delay, ...params) {
  setTimeout(fn, 0, ...params)
  return setInterval(fn, delay, ...params)
}

module.exports = startInterval
