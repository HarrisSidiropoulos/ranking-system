/* eslint-disable class-methods-use-this, no-console */
// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method

const MAX = 8;
const MIN = -8;

class User {
  constructor(rank = MIN, progress = 0) {
    this.rank = rank;
    this.progress = progress;
  }
  incProgress(rank) {
    if (rank > MAX || rank < MIN || rank === 0) {
      throw new Error('Invalid rank');
    }
    const r = this.rank < 0 && rank > 0 ? rank - 1 : rank;
    const d = r - this.rank;
    if (d === -1 || (rank === -1 && this.rank === 1)) {
      this.progress += 1;
    } else if (d === 0) {
      this.progress += 3;
    } else if (d > 0) {
      this.progress += 10 * d * d;
    }
    while (this.progress >= 100) {
      this.progress -= 100;
      this.rank += this.rank === -1 ? 2 : 1;
    }
    this.rank = Math.min(MAX, this.rank);
    this.progress = this.rank === MAX ? 0 : this.progress;
  }
}

export default User;
