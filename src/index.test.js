import { expect } from "chai"
import User from "./index"

import * as index from "./index"
describe('User Class', () => {
  const user = new User();
  beforeEach(() => {
    user.rank = -8;
    user.progress = 0;
  });
  describe('class', () => {
    it('should not be undefined', () => {
      expect(user).to.not.be.an('undefined');
    });
    it('should be an object', () => {
      expect(user).to.be.an('object');
    });
    describe('public method rank', () => {
      it('should not be undefined', () => {
        expect(user.rank).to.not.be.an('undefined');
      });
    });
    describe('public method progress', () => {
      it('should not be undefined', () => {
        expect(user.progress).to.not.be.an('undefined');
      });
    });
    describe('Class properties rank and progress initial values', () => {
      describe('rank', () => {
        it('should be -8', () => {
          expect(user.rank).to.be.equal(-8);
        });
      });
      describe('progress', () => {
        it('should be 0', () => {
          expect(user.progress).to.be.equal(0);
        });
      });
    });
  });
  describe('Completing an activity that is ranked the same as that of the user\'s will be worth 3 points', () => {
    describe('progress', () => {
      it('should be 3', () => {
        user.incProgress(-8);
        expect(user.progress).to.be.equal(3);
      });
    });
  });
  describe('Completing an activity that is ranked one ranking lower than the user\'s will be worth 1 point', () => {
    describe('progress', () => {
      it('should be 1', () => {
        user.rank = -7;
        user.incProgress(-8);
        expect(user.progress).to.be.equal(1);
      });
    });
  });
  describe('Any activities completed that are ranking 2 levels or more lower than the user\'s ranking will be ignored', () => {
    describe('progress', () => {
      it('should be 0', () => {
        user.rank = -6;
        user.incProgress(-8);
        expect(user.progress).to.be.equal(0);
      });
    });
  });
  describe('Completing an activity ranked higher than the current user\'s rank will accelerate the rank progression. ', () => {
    describe('If a user ranked -8 completes an activity ranked -7 they will receive 10 progress', () => {
      describe('progress', () => {
        it('should be 10', () => {
          user.incProgress(-7);
          expect(user.progress).to.be.equal(10);
        });
      });
    });
    describe('If a user ranked -8 completes an activity ranked -6 they will receive 40 progress', () => {
      describe('progress', () => {
        it('should be 40', () => {
          user.incProgress(-6);
          expect(user.progress).to.be.equal(40);
        });
      });
    });
    describe('If a user ranked -8 completes an activity ranked -5 they will receive 90 progress', () => {
      describe('progress', () => {
        it('should be 90', () => {
          user.incProgress(-5);
          expect(user.progress).to.be.equal(90);
        });
      });
    });
    describe(`If a user ranked -8 completes an activity ranked -4 they
              will receive 160 progress, resulting in the user being upgraded
              to rank -7 and having earned 60 progress towards their next rank`, () => {
      describe('progress', () => {
        it('should be 60', () => {
          user.incProgress(-4);
          expect(user.progress).to.be.equal(60);
        });
      });
      describe('rank', () => {
        it('should be -7', () => {
          user.incProgress(-4);
          expect(user.rank).to.be.equal(-7);
        });
      });
    });
    describe('If a user ranked -1 completes an activity ranked 1 they will receive 10 progress (remember, zero rank is ignored)', () => {
      describe('progress', () => {
        it('should be 10', () => {
          user.rank = -1;
          user.incProgress(1);
          expect(user.progress).to.be.equal(10);
        });
      });
    });
    describe('Icrease rank 10 times', () => {
      describe('rank', () => {
        it('should be -2', () => {
          user.incProgress(1);
          expect(user.rank).to.be.equal(-2);
        });
      });
    });
    describe('Icrease rank 10 times', () => {
      beforeEach(() => {
        for (let i = 0; i < 10; i += 1) {
          user.incProgress(-7);
        }
      });
      describe('progress', () => {
        it('should be 0', () => {
          expect(user.progress).to.be.equal(0);
        });
      });
      describe('rank', () => {
        it('should be -7', () => {
          expect(user.rank).to.be.equal(-7);
        });
      });
    });
    describe('Icrease rank 11 times', () => {
      beforeEach(() => {
        for (let i = 0; i < 11; i += 1) {
          user.incProgress(-7);
        }
      });
      describe('progress', () => {
        it('should be 3', () => {
          expect(user.progress).to.be.equal(3);
        });
      });
      describe('rank', () => {
        it('should be -7', () => {
          expect(user.rank).to.be.equal(-7);
        });
      });
    });
  });
  describe('If a user ranked 1 completes an activity ranked -1 they will receive 1 progress', () => {
    beforeEach(() => {
      user.rank = 1;
      user.incProgress(-1);
    });
    describe('progress', () => {
      it('should be 1', () => {
        expect(user.progress).to.be.equal(1);
      });
    });
  });
  describe(`The only acceptable range of rank values is
            -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8.
            Any other value should raise an error.`, () => {
    it('should raise an error if value is -9', () => {
      expect(() => user.incProgress(-9)).to.throw(Error);
    });
    it('should raise an error if value is 9', () => {
      expect(() => user.incProgress(9)).to.throw(Error);
    });
    it('should raise an error if value is 0', () => {
      expect(() => user.incProgress(0)).to.throw(Error);
    });
  });
});

// @ponicode
describe("incProgress", () => {
    let inst

    beforeEach(() => {
        inst = new index.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.incProgress(80)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.incProgress(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.incProgress(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.incProgress(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.incProgress(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.incProgress(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
