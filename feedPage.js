import { expect } from '@playwright/test';

export class FeedPage {

    constructor(page) {
        this.page = page;
    }

    async createPost(text, imagePath, date) {

        await this.page.fill('#postText', text);
        await this.page.setInputFiles('#fileInput', imagePath);
        await this.page.fill('#dateInput', date);

        await this.page.click('#postBtn');

        await this.page.waitForSelector('.post');
    }

    async verifyPostCount(count) {
        await expect(this.page.locator('.post')).toHaveCount(count);
    }
}
