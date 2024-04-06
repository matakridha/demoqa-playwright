import { Page, Locator } from "playwright";
import { ElementsPage } from "../locator/elements-page";
import { expect } from "playwright/test";
import * as faker from 'faker';

const expectUrl = 'https://demoqa.com/text-box';
/*
// Define elements globally
let elements: elementsPage;
// Initialize elements in a function before using it
export async function initializeElements(page: Page) {
    elements = new elementsPage(page);
}
*/
export class textBox {
    readonly page:Page;
    readonly sTextBox2:Locator;
    constructor (page:Page){this.page = page; this.sTextBox2 = page.locator('//span[text()="Text Box"]')}
   
    async inputCorrectValue(){
        const elements = new ElementsPage(this.page);

        await elements.elementMenu.side1.isVisible();
        await elements.elementMenu.side1.click();
        await elements.elementMenu.sTextBox.isVisible();
        await elements.elementMenu.sTextBox.click();
        await expect(this.page).toHaveURL(expectUrl);

        //declarate variable with faker value
        const rName = faker.name.firstName();
        const rEmail = faker.internet.email();
        const rCaddress = faker.address.streetAddress();
        const rPaddress = faker.address.city();
        await elements.textBox.inputFullName.type(rName);
        await elements.textBox.inputEmail.type(rEmail);
        await elements.textBox.inputCurrentAddress.type(rCaddress);
        await elements.textBox.inputPermaAddress.type(rPaddress);
        await elements.textBox.btnSubmit.click();

        //get locator to verify
        const nameText = await this.page.locator('p#name').innerText();
        const emailText = await this.page.locator('p#email').innerText();
        const cAddressText = await this.page.locator('p#currentAddress').innerText();
        const pAddressText = await this.page.locator('p#permanentAddress').innerText();
        
        //verify element have same value as expected
        expect(nameText).toContain('Name:'+ rName);
        expect(emailText).toContain('Name:'+ rEmail);
        expect(cAddressText).toContain('Name:'+ rCaddress);
        expect(pAddressText).toContain('Name:'+ rPaddress);
    }

    async inputIncorrectEmail(){
        const elements = new ElementsPage(this.page);
        const errorEmail = this.page.locator('.mr-sm-2.field-error.form-control');
        
        expect(errorEmail).toBeHidden;
        await elements.textBox.inputEmail.type('notAnEmail');
        await elements.textBox.btnSubmit.click();

        expect(errorEmail).toBeVisible;
    }

    async inputNothing(){
        const elements = new ElementsPage(this.page);
        await expect(this.page).toHaveURL(expectUrl);
        await elements.textBox.btnSubmit.click();
        const contentPopUp = this.page.locator('//div[contains(@class, "border col-md-12 col-sm-12")]');
        expect(contentPopUp).toBeHidden;
    }
}