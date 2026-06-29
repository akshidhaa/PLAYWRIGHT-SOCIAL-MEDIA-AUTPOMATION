export class PostPage {
    constructor(page) {
        this.page = page;
        this.posts = ".post";
    }

    async getPostCount() {
        return await this.page.locator(this.posts).count();
    }
}
