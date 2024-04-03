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

    }
}