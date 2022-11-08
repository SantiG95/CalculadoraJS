class Operations{
    sumar(primerValor, segundoValor){
        return primerValor + segundoValor;
    }

    restar(primerValor, segundoValor){
        return primerValor - segundoValor;
    }

    multiplicar(primerValor, segundoValor){
        return primerValor * segundoValor;
    }

    dividir(primerValor, segundoValor){
        if(primerValor == 0 || segundoValor == 0){
            return "No se puede dividir por 0";
        }
        return primerValor / segundoValor;
    }
}