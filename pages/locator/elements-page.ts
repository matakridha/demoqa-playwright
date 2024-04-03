import { Page,Locator } from "playwright";

export class elementsPage {
    readonly page:Page;
    readonly elementMenu: { [key: string]: Locator; };
    readonly textBox: { [key: string]: Locator; };

    constructor (page:Page){
        this.page = page;

        //element
        this.elementMenu = {
            side1 : page.locator('.element-group:nth-child(1)'),
            
            sTextBox : page.locator('li#item-0.btn.btn-light'),
            sCheckBox : page.locator('li#item-0.btn.btn-light'),
            sRadioBox : page.locator('li#item-0.btn.btn-light'),
            sWebTable : page.locator('li#item-0.btn.btn-light'),
            sButton : page.locator('li#item-0.btn.btn-light'),
            sLink : page.locator('li#item-0.btn.btn-light'),
            sBrokenLink : page.locator('li#item-0.btn.btn-light'),
            sUploadDownload : page.locator('li#item-0.btn.btn-light'),
            sDynamicProperty : page.locator('li#item-0.btn.btn-light'),
        };

        this.textBox = {
            inputFullName : page.locator('#userName]'),
            inputEmail : page.locator('#userEmail'),
            inputCurrentAddress : page.locator('#currentAddress]'),
            inputPermaAddress : page.locator('#permanentAddress]'),
            btnSubmit : page.locator('button[id=submit]'),
        };

    }
}

