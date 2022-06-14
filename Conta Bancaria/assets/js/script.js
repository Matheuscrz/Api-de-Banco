class ContaBancaria {
    constructor(agencia, conta, tipo, cartaoCredito) {
        this.agencia = agencia;
        this.conta = conta;
        this.tipo = tipo;
        this.cartaoCredito = cartaoCredito;
        this.saldo = 0;
        this.key = 0;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(saldo) {
        this._saldo = saldo;
    }
    gerarkey(conta) {
        console.log(this._key = Math.floor(Math.random() * 65536));
    }
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return this._saldo;
        }
        return "Operação não realizada. Saldo insuficiente.";
    }
    depositar(valor) {
        this._saldo += valor;
        return this._saldo;
    }
    transferir(valor, conta) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            var temp = conta.constructor();
            if (temp.conta == this.conta) {
                conta.depositar(valor);
                return this._saldo;
            }
        }
        return "Operação não realizada. Saldo insuficiente.";
    }
    pix(valor, key) {
        if (this._saldo >= valor){
            this.saldo -= valor;
            var temp = key.constructor();
            if (temp.key == this.key) {
                key.depositar(valor);
                return this.saldo;
            }
        }
    }
    pagar(valor, codigo) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            codigo.transferir(valor);
            return this._saldo;
        }
    }
}
class ContaCorrente extends ContaBancaria {
    constructor(agencia, conta, cartaoCredito) {
        super(agencia, conta, "corrente", cartaoCredito);
        this.cartaoCredito = cartaoCredito;
    }
    getCartaoCredito() {
        return this._cartaoCredito;
    }
    setCartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}
class ContaPoupanca extends ContaBancaria {
    constructor(agencia, conta) {
        super(agencia, conta, "poupança");
    }
}
class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, conta, cartaoCredito) {
        super(agencia, conta, "Universitária", cartaoCredito);
    }
    sacar(valor){
        if(valor > 500) {
            return "Operação negada. Limite de saque excedido.";
        }
        this._saldo-valor
    }
}