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
    //Declarate variable for storing faker value
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

        const modalTitleElement = await this.page.locator('div.modal-title.h4:has-text("Thanks for submitting the form")');

        const fullName = this.fakerElement.rfName + ' ' + this.fakerElement.rlName;
        const nameSelector = `td:has-text("${fullName}")`;
        const tdElement = await this.page.locator(nameSelector);
        
        const genderSelector = `td:has-text("Male")`;
        const genderElement = await this.page.locator(genderSelector);
        
        const phoneSelector = `td:has-text("0813424927")`;
        const phoneElement = await this.page.locator(phoneSelector);

        const email = this.fakerElement.rEmail;
        const emailSelector = `td:has-text("${email}")`;
        const emailElement = await this.page.locator(emailSelector);
        
        //Verify
        expect(await modalTitleElement.isVisible()).toBe(true);
        expect(await tdElement.isVisible()).toBe(true);
        expect(await genderElement.isVisible()).toBe(true);
        expect(await phoneElement.isVisible()).toBe(true);
        expect(await emailElement.isVisible()).toBe(true);
    }

    async notInputMandatory(){
        const FormsPage = new formsPage(this.page);

        this.fakerElement.rEmail = faker.internet.email();
        //this.fakerElement.rNumber = faker.phone.phoneNumber();
        this.fakerElement.rCaddress = faker.address.streetAddress();
        
        await FormsPage.form.side2.click();

        await FormsPage.form.sForm.isVisible();
        await FormsPage.form.sForm.click();

        await this.afName.isVisible();
        await FormsPage.form.email.type(this.fakerElement.rEmail);
        
        await FormsPage.form.currentAddress.type(this.fakerElement.rCaddress);

        await FormsPage.form.state.type('NCR');
        await FormsPage.form.state.press('Enter');

        await FormsPage.form.city.type('Delhi');
        await FormsPage.form.city.press('Enter');
    }

    async verifyErrorMandatory(){
        const errorNumber = await this.page.locator('input#userNumber[required][autocomplete="off"][pattern="\\d*"][minlength="10"][maxlength="10"][placeholder="Mobile Number"][type="text"].mr-sm-2.form-control');
        expect(await errorNumber.isVisible()).toBe(true);
    }
}