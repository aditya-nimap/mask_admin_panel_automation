import {expect} from "@playwright/test";
import { BasePage } from "./base.page";
import * as path from 'path';

export class StorePage extends BasePage{


    // -- Locators --
   
   
    // Add item form
    readonly addBtn = this.page.getByRole('button', {name: 'Add'});

    readonly maskNameInput = this.page.getByLabel('Mask Name');
    readonly typeInput = this.page.getByLabel('Type');
    readonly priceInput = this.page.getByLabel('Price');
    readonly categoryInput = this.page.getByLabel('Category')
    readonly fileInput = this.page.locator('input[type="file"]')
    uploadFile(fileName: string) {
        const filePath = path.join(__dirname, '../test-data/files', fileName);
        return this.page.locator('input[type="file"]').setInputFiles(filePath);
    }
    readonly colorCodeInput = this.page.getByLabel('Color Code')
    readonly highlightColorInput = this.page.getByLabel('Highlight Color')
    readonly animationInput = this.page.getByLabel('Animation')

    readonly confirmAddBtn = this.page.getByRole('button', { name: 'Add Store Item' });

    // List locators
    readonly lastPage = this.page.locator('a[aria-label^="Page"]').last()
    readonly lastItem = this.page.locator('[role="row"]').last();
    readonly lastItemName = this.lastItem.locator('[role="cell"]').nth(3);
   

    // Update Item
    readonly lastItemEditBtn = this.lastItem.locator('[role="cell"]').last().locator('svg').first()
    readonly editModalTitle = this.page.getByText('Update Store Item').first()

    // Toast Message
    readonly successAddMessage = this.page.getByText('Store Item added successfully')



    // -- Actions -- 
     async goto(){
        await this.page.goto('/store-management')
    }

    async addItem(args: string[]){
        await this.addBtn.click()

        await this.maskNameInput.fill(args[0]);
        await this.typeInput.fill(args[1])
        await this.priceInput.fill(args[2])
        await this.categoryInput.fill(args[3])
        await this.uploadFile(args[4])
        await this.colorCodeInput.fill(args[5])
        await this.highlightColorInput.fill(args[6])
        await this.animationInput.fill(args[7])

        await this.confirmAddBtn.click()
    }

    async clickEditBtn(){
        await this.lastPage.click();
        await this.lastItemEditBtn.click();
        await expect(this.editModalTitle).toBeVisible()
    }
    
    // -- Assertions --
    async expectAddSuccess(){
        await expect(this.successAddMessage).toBeVisible()
    }
}