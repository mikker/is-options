const test = require('brittle')
const isOptions = require('./')

test('works', function (t) {
  t.ok(isOptions({}))
  t.absent(isOptions(''))
  t.absent(isOptions(Buffer.from('hi')))
  t.absent(isOptions())
  t.absent(isOptions(null))
  t.absent(isOptions(42))
  t.absent(isOptions(undefined))
})
