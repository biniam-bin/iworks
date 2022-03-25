var expect = require('chai').expect;

describe('Simple App testing', () => {

    beforeEach(() => {
        $("~app-root").waitForDisplayed(10000, false)
    });

    it('Add Member: valid case', async => {
        $('~name').setValue("Biniam Daniel");
        $("~add").click();

        $("~members").waitForDisplayed(11000);
        const status = $("~members").getText();
        expect(status).to.equal('1');
    });
    it('Add Member: valid case', async => {
        $('~name').setValue("Biniam Daniel");
        $("~add").click();

        $("~members").waitForDisplayed(11000);
        const status = $("~members").getText();
        expect(status).to.equal('0');
    });
})