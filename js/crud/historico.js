
function getHitoric ( idUser, mes ){

    /*
    firebase.database().ref('gastos-db').child('cliente/-NhhMVcCdWyVH3ylyTBQ/historico/setembro')
    .push( {descrição: 'Ração dos Cães', valor: 60, detalhes: 'sem detalhes'}).key
*/
    const dbRef = firebase.database().ref('gastos-db');
	dbRef.child("cliente/" + idUser + "/historico/" + mes ).get().then(( snapshot )=> 
	{
            snapshot.forEach((d)=>{
                
                console.log( d.val().descrição );
                console.log( d.val().detalhes );
                console.log( d.val().valor );
                
            });
    });    
}

$('#historico').on('click', ((data)=>{

    let id = sessionStorage.getItem("id");
    getHitoric( idUser, mes );

}));