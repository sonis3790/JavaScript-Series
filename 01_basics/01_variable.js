const accountId = 44235
let accountEmail = "shourya90@gmail.com"

var accountPswrd = "12345" 
 accountCity = "jaipur"

// accountId = //2 not allowed

accountEmail = "sh123@gmail.com"
accountPswrd = "84930"
accountCity = "delhi"

console.log(accountId);

/*
    Prefer not to be use var
    Because of issue in bloack scope and functional scope
*/
console.table([accountEmail,accountCity,accountId,accountPswrd])