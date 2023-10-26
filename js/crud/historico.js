
function getHitoric ( id ){

    /*
    firebase.database().ref('gastos-db').child('cliente/-NhhMVcCdWyVH3ylyTBQ/historico/setembro')
    .push( {descrição: 'Ração dos Cães', valor: 60, detalhes: 'sem detalhes'}).key
*/
    
}




$('#historico').on('click', ((data)=>{

    let id = sessionStorage.getItem("id");
    getHitoric( id );

}));