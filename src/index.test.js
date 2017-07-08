import { expect } from 'chai';
import User from './index';

describe('User Class', () => {
  const user = new User();

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
      it('should be a function', () => {
        expect(user.rank).to.be.a('function');
      });
    });
    describe('public method progress', () => {
      it('should not be undefined', () => {
        expect(user.progress).to.not.be.an('undefined');
      });
      it('should be a function', () => {
        expect(user.progress).to.be.a('function');
      });
    });
  });
});
