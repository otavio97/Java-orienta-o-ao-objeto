class Cliente{
    nome;
    cpf;

}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo>=valor){
            this.saldo -=valor;
        }

    }

    depositar(valor){
        if(valor>0){
            this.saldo +=valor;
        }
    }
}

const Cliente1 = new Cliente();
const Cliente2 = new Cliente();
const ContaCorrente1 = new ContaCorrente();
const ContaCorrente2 = new ContaCorrente();

Cliente1.nome ="Ricardo";
Cliente1.cpf =11122233344;
ContaCorrente1.agencia =1001;
ContaCorrente1.saldo =0;

Cliente2.nome ="Amanda";
Cliente2.cpf =55522233344;
ContaCorrente2.agencia =1001;
ContaCorrente2.saldo =0;

console.log(Cliente1);
console.log(ContaCorrente1);
console.log(ContaCorrente2);
console.log(Cliente2);

ContaCorrente1.depositar(100    );
//console.log(ContaCorrente1.saldo);
//let ValorSacado = 45;
//ContaCorrente1.saldo -= ValorSacado;
ContaCorrente1.sacar(25);
console.log(ContaCorrente1.saldo);