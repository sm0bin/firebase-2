const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
const password = "Wd123!"; // Replace this with the user's input password

if (passwordRegex.test(password)) {
    // Password meets the criteria
    console.log("Password is valid");
} else {
    // Password does not meet the criteria
    console.log("Password is invalid");
}
