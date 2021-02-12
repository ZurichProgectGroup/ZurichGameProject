function getInputImgUrl(input: HTMLInputElement): Promise<string> {
    return new Promise((res, rej) => {
        const { files } = input;
        const file = files ? files[0] : null;
        const reader = new FileReader();

        if (!file) {
            rej(new Error('Файл не загружен'));
            return;
        }

        reader.onloadend = () => {
            res(`${reader.result}`);
        };
        reader.readAsDataURL(file);
    });
}

export default getInputImgUrl;
