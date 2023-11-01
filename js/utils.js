
// Funções para trabalhar com datas.

function getDay(){

    let date = new Date();
    let dia  = date.getDate();  
    return dia;
}

function getMonth(){

    let monthName;
    let date = new Date();
    let mes  = date.getMonth();
    return mes;
}


function getMonthName(){

    let monthName;
    let date = new Date();
    let mes  = date.getMonth();
    
    switch( mes ){
        case 0:
            monthName = 'Janeiro'
            break;
        case 1:
            monthName = 'Fevereiro'
            break;
        case 2:
            monthName = 'Março'
            break;        
        case 3:
            monthName = 'Abril'
            break;    
        case 4:
            monthName = 'Maio'
            break;      
        case 5:
            monthName = 'Junho'
            break;
        case 6:
            monthName = 'Julho'
            break;
        case 7:
            monthName = 'Agosto'
            break;
        case 8:
            monthName = 'Setembro'
            break;
        case 9:
            monthName = 'Outubro'
            break; 
        case 10:
            monthName = 'Novembro'
            break;
        case 11:
            monthName = 'Dezembro'
            break;           
    }

    return monthName;
}


function getYear(){

    let date = new Date();
    let ano  = date.getFullYear();
    return ano;
}

function dateFormated(){

    let df = getDay() + '/' + getMonth() +  '/' + getYear();
    return df;

}
