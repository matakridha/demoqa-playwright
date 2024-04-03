import { Page,Locator } from "playwright";
import { expect } from "playwright/test";



export class homePage{
    readonly page:Page;
    readonly menuPage: {
        [key:string]:Locator;
    };

    constructor (page:Page) {
        this.page = page;
        this.menuPage = {
            btnElements : page.locator('//h5[text()="Elements"'),
            btnForms : page.locator('//h5[text()="Forms"'),
            btnAlrets : page.locator('//h5[text()="Alerts, Frame & Windows"'),
            btnWidgets : page.locator('//h5[text()="Widgets"'),
            btnInteractions : page.locator('//h5[text()="Interactions"'),
            btnBookStore : page.locator('//h5[text()="Book Store Application"'),
        }
    }

    async goToElement(){
        await this.menuPage.btnElements.click();
    }
}