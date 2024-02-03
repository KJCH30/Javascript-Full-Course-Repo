const accountId = 135678
let accountEmail = "kinjal432@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState

// accountId = 23 //not allowed to change
accountEmail = "gcr@cumail.in"
accountPassword = "54312"
accountCity = "Chandigarh"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* Notes:
Prefer not to use var to declare a variable
because of its issue in block scope and functional scope
*/