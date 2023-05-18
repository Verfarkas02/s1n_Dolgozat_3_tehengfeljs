/*
* File: app.spec.js
* Author: Molnár Csenge Anna
* Copyright: 2023, Molnár Csenge Anna
* Group: Szoft I-1 N
* Date: 2023-05-18
* Github: https://github.com/Verfarkas02/s1n_Dolgozat_3_tehengfeljs
* Licenc: GNU GPL
*/
describe('Bemenet input ellenőrzése', () => {
    it('21 szám  akkor igaz', () => {
        let act = isGoodInput(21);
        expect(act).toBe(true);
    });

    it('abc betű  akkor hamis', () => {
        let act = isGoodInput('abc');
        expect(act).toBe(false);
    });
});