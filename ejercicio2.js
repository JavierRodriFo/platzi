function esPrimo(numero){
   
    let raiz = Math.floor(Math.sqrt(numero))+ 1;

    for(let i =2;i< raiz;++i){
        if(numero % i == 0){
            console.log('No es primo');
        }else{
            console.log('es primo');

        }
    }
    

}
console.log(esPrimo(6))