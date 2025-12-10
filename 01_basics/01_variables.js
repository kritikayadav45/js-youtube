const accountId = 2023006
let accountEmail = "Kritika@gmail.com" // can change
var accountPassword = "1234"           // can change
accountCity = "London"                 // can cahnge
let accountState                       // undefined

// accountId = 05 // not allowed

/*
| Feature       | var                                | let                         | Preferred? |
| ------------- | ---------------------------------- | --------------------------- | ---------- |
| Scope         | Function scope                     | Block scope                 | let        |
| Redeclaration | Allowed                            | Not allowed                 | let        |

->  let is block-scoped, meaning it exists only inside { }.

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); // in form of tables  