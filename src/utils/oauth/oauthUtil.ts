export default class OauthTransport {
    private readonly url: string;

    constructor(url:string) {
        this.url = url;
    }

    authorize() {
        document.location.href = this.url;
    }
}
