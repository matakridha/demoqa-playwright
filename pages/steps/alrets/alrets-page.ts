import { Page,Locator } from "playwright";
import { AlretsPage } from "../../locator/alrets-page";

export class AlretPage{
    readonly page:Page;
    constructor(page:Page){this.page = page;}
     
    async goToAlret(){
        const alret = new AlretsPage(this.page);
        await alret.alretsMenu.sAlrets.isVisible();
        await alret.alretsMenu.sAlrets.click();
    }

    async directAlret(){
        const alret = new AlretsPage(this.page);
        
        //await this.page.waitForTimeout(100);
        await alret.alrets.btnDirectAlret.isVisible();
        //await alret.alrets.btnConfirmAlret.click();
        await alret.alrets.btnDirectAlret.dblclick();
        // Wait for the alert dialog to appear
        const dialog = await this.page.waitForEvent('dialog');

        // Check if the dialog is present
        if (dialog.type() === 'alert', dialog.message()) {
            // Accept the alert (click the "OK" button)
            await dialog.accept();
        } else {
            throw new Error('Alert dialog did not appear.');
        }
    }
}