export class Holiday {
    sayHello() {
        const today = this.getToday();
        let isXmas = false;

        // Compare Xmas date: 12/25
        if (today.getMonth() === (11) && today.getDate() === 25) {
            isXmas = true;
        }

        if (isXmas) return "Merry Xmas";
        return "Today is not Xmas";
    }

    getToday() {
        return new Date();
    }
}