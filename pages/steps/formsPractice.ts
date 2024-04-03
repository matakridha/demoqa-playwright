import { Page, Locator } from "playwright";
import { formsPage } from "../locator/forms-page";
import { expect } from "playwright/test";
import * as faker from 'faker';
import { transcode } from "buffer";

const expectUrl = 'https://demoqa.com/automation-practice-form';

// Define elements globally
let FormsPage: formsPage;
// Initialize elements in a function before using it
export async function initializeElements(page: Page) {
    FormsPage = new formsPage(page);
}

export class formsPractice{
    readonly page:Page;
    readonly fakerElement: {[key: string]: string};

    constructor(page:Page){
        this.page = page;

        this.fakerElement = {
            rfName : '',
            rlName : '',
            rEmail : '',
            rNumber : '',
            rCaddress : '',
        };
    }

    async inputValidForm(){
        this.fakerElement.rfName = faker.name.firstName();
        this.fakerElement.rlName = faker.name.lastName();
        this.fakerElement.rEmail = faker.internet.email();
        this.fakerElement.rNumber = faker.phone.phoneNumber();
        this.fakerElement.rCaddress = faker.address.streetAddress();
        
        await FormsPage.form.fName.type(this.fakerElement.rfName);
        await FormsPage.form.lName.type(this.fakerElement.rlName);
        await FormsPage.form.email.type(this.fakerElement.rEmail);
        await FormsPage.form.pNumber.type(this.fakerElement.rNumber);
        await FormsPage.form.currentAddress.type(this.fakerElement.rCaddress);

        await FormsPage.form.state.type('NCR');
        await FormsPage.form.state.press('Enter');

        await FormsPage.form.city.type('Delhi');
        await FormsPage.form.city.press('Enter');
    }

    async verifyFormValue(){
        const fullName = this.fakerElement.rfName + ' ' + this.fakerElement.rlName;
        const nameSelector = `td:has-text("${fullName}")`;
        const tdElement = await this.page.locator(nameSelector);
        expect(await tdElement.isVisible()).toBe(true);

    }


}