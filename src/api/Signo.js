function Signo(mes, dia) {

    if(mes !== "outubro" || mes !== "setembro"){
        return "nao"
    }
    else if (mes === 'setembro' && dia >= 23 && dia <= 30){
        return "sim"
    } 
    else if (mes === 'outubro' && dia <= 22 && dia >= 1){
     return 'Sim'
    }
    else {
        return "nao"
    }

   

} 
export default Signo;