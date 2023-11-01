
// Adiciona gasto 

function addCost( id, ano, mes, desc, valor, detal, data ){

    firebase.database().ref('gastos-db/cliente').child( id + '/historico/' + ano + '/' + mes
    ).push( 
       {
           'descrição':  desc,
           'valor':      Number(valor),
           'detalhes':   detal,
           'data':       data
       } 
        );
}


let btnCost =  $('#btnCost').on('click', ()=>{
        
    alert('');

    let desc  = $('#desc').val();
    let valor = $('#val').val();
    let detal =  $('#detal').val();

    addCost(getidUser(), getYear(), getMonthName(), desc, valor, detal, dateFormated());

});