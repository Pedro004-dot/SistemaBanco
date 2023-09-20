module.exports = class Account {
  #balance
  //saldo será privado

  constructor(user) {
    this.owner = user
    this.#balance = 0
    this.deposits = []
    this.loans = []
    this.transfers = []
  }
//Usado o get para visualizar o saldo privado
  get balance() {
    return this.#balance
  }

  addDeposit(deposit) {
    this.#balance += deposit.value
    this.deposits.push(deposit)
  }

  addLoan(loan) {
    this.#balance =+ loan.value
    this.loans.push(loan)
  }
//definindo se a transferencia foi enviada ou recebida
  addTransfer(transfer) {
    if (transfer.toUser.email === this.owner.email) {
      this.#balance += transfer.value
      this.transfers.push(transfer)
    } else if (transfer.fromUser.email === this.owner.email) {
      this.#balance -= transfer.value
      this.transfers.push(transfer)
    }
  }
}