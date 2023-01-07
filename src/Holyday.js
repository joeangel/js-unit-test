export class Holiday {
    sayHello() {
        const now = new Date();
        let isXmas = false;

        // Compare Xmas date: 12/25
        if (now.getMonth() === (12 - 1) && now.getDate() === 25) {
            isXmas = true;
        }

        if (isXmas) return "Merry Xmas";
        return "Today is not Xmas";
    }
}