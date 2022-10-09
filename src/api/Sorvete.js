function Sorvete(gramas){
    if(gramas <= 0) return 'Peso inválido'
    const preco = gramas * 0.035;
    if(gramas >= 1000){
        const preco = (gramas * 0.035) - 5;
        return preco
    }
    else return preco.toFixed(2)
} export default Sorvete