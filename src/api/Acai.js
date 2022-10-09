function Acai(Pequeno, Medio, Grande, Desconto){

    if(Desconto === isNaN || Desconto === 0 || Desconto === null){
        return ((Pequeno*13.50) + (Medio*15) + (Grande*17.50));
    } else if (Desconto === 100){
        return 0;
    }else{
       return (((Pequeno*13.50) + (Medio*15) + (Grande*17.50))/100) * Desconto;
    }

   
} 
export default Acai;

