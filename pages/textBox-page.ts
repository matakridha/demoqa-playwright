import { Page,Locator } from "playwright";

export class textBox {
    readonly page:Page;
    readonly inputFullName:Locator;
    readonly inputEmail:Locator;
    readonly inputCurrentAddress:Locator;
    readonly inputPermaAddress:Locator;
    readonly btnSubmit:Locator;

    constructor (page:Page){
        this.page = page;
        this.inputFullName = page.locator('input[id=userName]');
        this.inputEmail = page.locator('input[id=userEmail]');
        this.inputCurrentAddress = page.locator('textarea[id=currentAddress]');
        this.inputPermaAddress = page.locator('textarea[id=permanentAddress]');
        this.btnSubmit = page.locator('button[id=submit]');
    }
}