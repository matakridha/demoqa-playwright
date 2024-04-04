import { Page, Locator } from "playwright";
import { formsPage } from "../locator/forms-page";
import { expect } from "playwright/test";
import * as faker from 'faker';
import { transcode } from "buffer";

const expectUrl = 'https://demoqa.com/automation-practice-form';

export class formsPractice{
    readonly page:Page;
    readonly afName:Locator;
    readonly fakerElement: {[key: string]: string};

    constructor(page:Page){
        this.page = page;
        this.afName = page.locator('#firstName');
        this.fakerElement = {
            rfName : '',
            rlName : '',
            rEmail : '',
            rNumber : '',
            rCaddress : '',
        };
    }

    async inputValidForm(){
        const FormsPage = new formsPage(this.page);
        this.fakerElement.rfName = faker.name.firstName();
        this.fakerElement.rlName = faker.name.lastName();
        this.fakerElement.rEmail = faker.internet.email();
        //this.fakerElement.rNumber = faker.phone.phoneNumber();
        this.fakerElement.rCaddress = faker.address.streetAddress();
        
        await FormsPage.form.side2.click();

        await FormsPage.form.sForm.isVisible();
        await FormsPage.form.sForm.click();

        await this.afName.isVisible();
        await FormsPage.form.fName.type(this.fakerElement.rfName);
        await FormsPage.form.lName.type(this.fakerElement.rlName);
        await FormsPage.form.email.type(this.fakerElement.rEmail);
        
        await FormsPage.form.gMale.isVisible();
        await FormsPage.form.gMale.click();
        await FormsPage.form.pNumber.type('0813424927');
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