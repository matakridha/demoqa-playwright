import { Page,Locator } from "playwright";

export class SideBar {
    readonly page:Page;
    readonly testBox:Locator;

    constructor (page:Page){
        this.page = page;
        this.testBox = page.locator('li#item-0.btn.btn-light');
    }
}

   