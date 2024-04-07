import { test, expect, Page } from '@playwright/test';
import { ElementsPage } from '../locator/elements-page';

export class LinksPage{
    readonly page:Page;
    constructor(page:Page){this.page = page;}

    async goToLink(){
        const element = new ElementsPage(this.page);
        await element.elementMenu.sLink.isVisible();
        await element.elementMenu.sLink.click();
    }

    async openSimpleNewPage(){
        const element = new ElementsPage(this.page);
        await element.links.linkHome.click();
    }

    async openDynamicNewPage(){
        const element = new ElementsPage(this.page);
        await element.links.linkHomeIEE.click();
    }

    async verifyNewPage(){
        const element = new ElementsPage(this.page);
        await this.page.waitForNavigation();

        const pageTitle = await this.page.title();
        if (pageTitle === 'DEMOQA') console.log('New Page load Successfully');
        else throw new Error('Page Doesnt load as expected');
    }

    async callAPIandVerify(){
        const apiLocators = {
            apiCreated: '#created',
            apiNoContent: '#no-content',
            apiMoved: '#moved',
            apiBadRequest: '#bad-request',
            apiUnauthorized: '#unauthorized',
            apiForbidden: '#forbidden',
            apiInvalidUrl: '#invalid-url'
        };
        
        const apiResponses = {
            apiCreated: 'Created',
            apiNoContent: 'No Content',
            apiMoved: 'Moved',
            apiBadRequest: 'Bad Request',
            apiUnauthorized: 'Unauthorized',
            apiForbidden: 'Forbidden',
            apiInvalidUrl: 'Not Found'
        };
        
        for (const [key, value] of Object.entries(apiLocators)) {
            const locator = await this.page.locator(value);
            await locator.click(); // Click the locator first
            const responseText = await locator.textContent();

            const expectedResponse = apiResponses[key];
            if (responseText === expectedResponse) {
                console.log(`Response for ${key} matches the expected value.`);
            } else {
                //console.log(apiResponses[key]);
                throw new Error(`Response for ${key} does not match the expected value.`);
                //console.log(responseText);
            }
        }
    }
}