const assert = require('assert')
const bcrypt = require('../server/queries/bcrypt.js')


describe('bcrypts', function() {
  describe('one missing', function() {
    it('should return "an array is required" if value is not present', function() {
      assert.equal('an array is required', bcrypt.writePass());
    });
  });
});
