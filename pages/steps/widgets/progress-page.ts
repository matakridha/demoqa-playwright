import { Page,Locator } from "playwright";
import { WidgetPage } from "../../locator/widget-page";
import { expect } from "playwright/test";

export class ProgressPage{
    readonly page:Page;
    constructor(page:Page){this.page = page;}

    async goToProgressBar(){
        const widget = new WidgetPage(this.page);
        await widget.widgetMenu.sProgressBar.isVisible();
        await widget.widgetMenu.sProgressBar.click();
    }

    async progress70(){
        const widget = new WidgetPage(this.page);
        async function clickWhenProgressIsAt(page: any, targetValue: number) {
            let currentProgress = 0;
            await widget.progressBar.btnContorl.click();
            while (currentProgress < targetValue) {
                const progressBar = await page.$('[role="progressbar"]');
                currentProgress = await progressBar.evaluate((bar) => parseInt(bar.getAttribute('aria-valuenow')));
            }
            //console.log(`Progress reached ${targetValue}%, clicking the button...`);
            await widget.progressBar.btnContorl.click();
        }
        
        // Usage:
        try {
            await clickWhenProgressIsAt(this.page, 70);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async verifyProgress70(){
        const widget = new WidgetPage(this.page);
        const progress70 = await this.page.locator('//div[@role="progressbar" and @aria-valuenow="70"]');
        expect (await progress70.isVisible()).toBe(true);
    }

    async progress100(){
        const widget = new WidgetPage(this.page);
        await widget.progressBar.btnContorl.click();
    }

    async verifyProgress100(){
        const widget = new WidgetPage(this.page);
        const progress100 = await this.page.locator('//div[@role="progressbar" and @aria-valuenow="100"]');
        await this.page.waitForTimeout(6000);
        expect (await progress100.isVisible()).toBe(true);
    }

    async resetProgress(){
        const widget = new WidgetPage(this.page);
        await widget.progressBar.btnReset.click();
    }

    async verifyresetProgress(){
        const widget = new WidgetPage(this.page);
        const progress0 = await this.page.locator('//div[@role="progressbar" and @aria-valuenow="0"]');
        expect (await progress0.isVisible()).toBe(true);
    }
}