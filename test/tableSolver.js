import {solve} from '../tableSolver';
import assert from 'assert';

describe('empty table', () => {

    it('empty table returns 0', () => {
        const result = solve([]);
        assert.equal(result, 0);
    });

    it('1 x 1 table', () => {
        const result = solve([[5]]);
        assert.equal(result, 5);
    });

    it('1 x 2 table', () => {
        const result = solve([[5,6]]);
        assert.equal(result, 11);
    });

    it('2 x 1 table', () => {
        const result = solve([[5],[6]]);
        assert.equal(result, 11);
    });

    it('2 x 2 table', () => {
        const result = solve([[5,1],[6,2]]);
        assert.equal(result, 13);
    });

    it('3 x 3 table', () => {
        const result = solve([[8,3,9],[5,7,6],[3,2,7]]);
        assert.equal(result, 33);
    });
});