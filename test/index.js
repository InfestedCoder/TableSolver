import {answer} from '../index';
import assert from 'assert';

describe('meaning of life', () => {

    it('returns 42', () => {
        const result = answer();
        assert.equal(result, 42);
    });

});