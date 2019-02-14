/* eslint-disable no-undef */

describe('filtering todos', () => {
  beforeEach(() => {

  })

  describe('initially', () => {
    it('filtering is set to all', () => {
      expect(true).to.be.false;
    })
  })

  describe('when filtered', () => {
    describe('to show only completed todos', () => {
      beforeEach(() => {

      })

      it('does not display active todo', () => {
        expect(true).to.be.false;
      })

      it('displays completed todo', () => {
        expect(true).to.be.false;
      })
    })

    describe('to show only active todos', () => {
      beforeEach(() => {

      })

      it('displays first active', () => {
        expect(true).to.be.false;
      })

      it('does not display completed todo', () => {
        expect(true).to.be.false;
      })
    })
  })
})
