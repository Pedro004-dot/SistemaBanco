const Account = require("./account")

module.exports = class User {
  constructor(email, fullname) {
    this.email = email
    this.fullname = fullname
    this.account = new Account(this)
    //foi usado o this como parametro pq esta classe é o parametro da classe Account
  }
}