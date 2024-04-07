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

    //issue - alret doesn't appear so for now I loop the click until alret appear
    async directAlret(){
        const alret = new AlretsPage(this.page);
        
        async function clickUntilAlertAppears(page: any, maxAttempts: number = 10, interval: number = 1000) {
            let attempts = 0;
            while (attempts < maxAttempts) {
                await alret.alrets.btnDirectAlret.click();
                const dialog = await page.waitForEvent('dialog', { timeout: 1000 }).catch(() => null); // Wait for dialog or timeout
                if (dialog && dialog.type() === 'alert') {
                    await dialog.accept();
                    console.log('Alert dialog appeared and accepted.');
                    return; // Exit the function
                }
                attempts++;
                await page.waitForTimeout(interval); // Wait for a specified interval before next attempt
            }
            console.error('Maximum attempts reached. Alert dialog did not appear.');
        }
        
        // Usage:
        try {
            await clickUntilAlertAppears(this.page);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    
}