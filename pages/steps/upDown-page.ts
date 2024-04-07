import { Page,Locator } from "playwright";
import { ElementsPage } from "../locator/elements-page";
import path from 'path';
import { expect } from "playwright/test";
import { text } from "stream/consumers";

export class UpDownPage{
    readonly page:Page;
    constructor(page:Page){this.page = page;}

    async goToUpDown(){
        const element = new ElementsPage(this.page);
        await element.elementMenu.sUploadDownload.isVisible();
        await element.elementMenu.sUploadDownload.click();
    }

    async downloadFile(){
        const element = new ElementsPage(this.page);
        const relativePath = 'downloads';

        // Click the download button
        await element.UpDown.btnDownload.isVisible();
        await element.UpDown.btnDownload.click();
        await element.UpDown.btnDownload.click();
        // Wait for the download to complete
        const download = await this.page.waitForEvent('download');

        // Get the base name of the downloaded file
        const fileName = path.basename(download.suggestedFilename());

        // Resolve the relative path to an absolute path
        const absolutePath = path.resolve(process.cwd(), relativePath, fileName);

        // Save the downloaded file to the resolved absolute path
        await download.saveAs(absolutePath);

        // Perform verification on the downloaded file
        console.log(`File downloaded and saved to: ${absolutePath}`);

        // Example verification: Check if the file exists
        const fs = require('fs');
        if (fs.existsSync(absolutePath)) {
            console.log('Download verified successfully.');
        } else {
            console.error('Download verification failed: File not found.');
        }
    }
    async injectUpload(){
        const element = new ElementsPage(this.page);
        const filePath = 'downloads/sampleFile.jpeg'
        const uploadInput = await element.UpDown.btnUpload;
        await uploadInput.setInputFiles(filePath);
    }

    async verifyUpdload(){
        const text1 = await this.page.locator('#uploadedFilePath');
        expect (await text1.isVisible()).toBe(true);
    }




}