export default function generatePass(): string {
    let password: string = '';
    let characters: string = 'Aa@$#123456789abcdefghijFGHIJKLMNOP!';
    const passwordLength: number = 8;

    for (let index = 0; index < passwordLength; index++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}