import { Page,Locator, chromium, Browser } from "playwright";
import { AlretsPage } from "../../locator/alrets-page";

export class BrowserPage{
    readonly page:Page;
    constructor(page:Page){this.page = page;}

    async gotToBrowserPage(){
        const alret = new AlretsPage(this.page);
        await alret.alretsMenu.sBrowser.isVisible();
        await alret.alretsMenu.sBrowser.click();
    }

    async newTab(){
        const alret = new AlretsPage(this.page);
        await alret.browserWindow.btnTab.isVisible();
        await alret.browserWindow.btnTab.click();
    }
    
    async verifyNewPage(){
        const alret = new AlretsPage(this.page);
        await this.page.waitForNavigation();

        const pageTitle = await this.page.title();
        if (pageTitle === 'demoqa.com/sample') console.log('New Page load Successfully');
        else throw new Error('Page Doesnt load as expected');
    }

    async newWindow(){
    }
    
    async newMsgWindow(){
    }
}