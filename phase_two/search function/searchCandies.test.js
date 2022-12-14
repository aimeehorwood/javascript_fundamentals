const searchCandies = require("./searchCandies");

describe('searchCandies', () => {
  it('returns correct search filter', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
  it('returns another correct search filter', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  });
  it('returns another correct search filter', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });
  it('returns another correct search filter', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });
  it('returns another correct search filter ignoring lowercase', () => {
    expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
});