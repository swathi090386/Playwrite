class ICICI {
    #balance;

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }
}

let swathi = new ICICI("Swathi", 1000);
console.log(swathi.getBalance());
swathi.setBalance(10000000, false);
console.log(swathi.getBalance());

let swathi_father = new ICICI("Swathi", 2000);
console.log(swathi_father.getBalance());
swathi_father.setBalance(300000, true);
console.log(swathi_father.getBalance());