import { Page, Locator } from "playwright";

export class formsPage {
    readonly page:Page;
    readonly form: { [key: string]: Locator};
    readonly datePicker: { [key: string]: Locator};

    constructor (page:Page) {
        this.page = page;
        this.form = {
            fName : page.locator('#firstName'),
            lName : page.locator('#lastName'),
            email : page.locator('#userEmail'),
            gMale : page.locator('#gender-radio-1'),
            gFemale : page.locator('#gender-radio-2'),
            gOther : page.locator('#gender-radio-3'),
            pNumber : page.locator('#userNumber'),
            subject : page.locator('input#subjectsInput'),
            hobby1 : page.locator('hobbies-checkbox-1'),
            hobby2 : page.locator('hobbies-checkbox-2'),
            hobby3 : page.locator('hobbies-checkbox-3'),
        }
    }
}