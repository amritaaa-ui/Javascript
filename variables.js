const account_id = 144553
let account_email = "amritakumari@gmail.com"
var account_password = "12345"
account_city = "Ranchi"
let account_state

// account_id = 2 new value cannot be assigned to const.

console.log(account_id)

/* Prefer not to use var
 because of issue in block scope and functional scope*/

account_email ="12345@gmail.com"
account_password = "3073586"
account_city = "Patna"

console.table([account_id, account_email, account_password, account_city, account_state]);

