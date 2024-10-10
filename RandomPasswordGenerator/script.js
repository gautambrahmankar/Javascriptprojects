document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById("generate");

    function generatepassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%&*";

        let allowedChars = "";
        let password = "";

        allowedChars += includeLowerCase ? lowercaseChars : "";
        allowedChars += includeUpperCase ? uppercaseChars : "";
        allowedChars += includeNumbers ? numberChars : "";
        allowedChars += includeSymbols ? symbolChars : "";

        if (passwordLength <= 0) {
            return '(Password length must be at least 1)';
        }

        if (allowedChars.length === 0) {
            return "At least one set of characters needs to be selected!";
        }

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }

        document.getElementById("num").innerText = password;
        return password;
    }

    // Set the onclick function
    generateBtn.onclick = function () {
        const passwordLength = 12;
        const includeLowerCase = true;
        const includeUpperCase = true;
        const includeNumbers = true;
        const includeSymbols = true;

        const password = generatepassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
        console.log(`Generated Password: ${password}`);
    };
});
