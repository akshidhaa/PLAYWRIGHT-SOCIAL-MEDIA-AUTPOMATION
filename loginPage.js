export class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto("file:///C:/Users/akshidhaa.balaji/socialmedia/...");
        await this.page.waitForSelector("#loginBtn");
    }

    async login(user) {
        await this.page.fill("#username", user);
        await this.page.click("#loginBtn");
    }
}
