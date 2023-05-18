/*
* File: app.spec.js
* Author: Molnár Csenge Anna
* Copyright: 2023, Molnár Csenge Anna
* Group: Szoft I-1 N
* Date: 2023-05-18
* Github: https://github.com/Verfarkas02/s1n_Dolgozat_3_tehengfeljs
* Licenc: GNU GPL
*/
describe("Henger felszíne", () => {
    it('5, 10 magasság, felszín: 471.23889803846896', () => {
        let act = calcSurface(5, 10);
        expect(act).toBe(471.23889803846896)
    });

    it('30, 13 , felszín: 8105.309046261666', () => {
        let act = calcSurface(30, 13);
        expect(act).toBe(8105.309046261666)
    });
})