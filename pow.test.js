// Write failing test and commit (use a meaningful commit message).

const pow = require('./pow.js');

describe('pow', () => {
    it('takes a base and exponent and raises the base to the exponent power', async() => {
        const base = '420';
        const exponent = '69';
        expect(pow(base, exponent)).toEqual(1.0097201832880355e+181);
    });

    it('takes a base and exponent and raises the base to the exponent power', async() => {
        const base = '4';
        const exponent = '0.5';
        expect(pow(base, exponent)).toEqual(2);
    });

    it('takes a base and exponent and raises the base to the exponent power', async() => {
        const base = '7';
        const exponent = '-2';
        expect(pow(base, exponent)).toEqual(0.020408163265306124);
    });

    it('takes a base and exponent and raises the base to the exponent power', async() => {
        const base = '-7';
        const exponent = '0.5';
        expect(pow(base, exponent)).toEqual(NaN);
    });

});