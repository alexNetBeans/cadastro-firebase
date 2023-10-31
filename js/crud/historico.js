

// Listagem histórico do mês selecionado. / Por dia do mês.

function getHistoricbyDay ( idUser, ano, mes ){

    $('#backIcon').remove();
    $('#tabela').empty();

    const dbRef = firebase.database().ref('gastos-db');
	dbRef.child("cliente/" + idUser + "/historico/" + ano + '/' + mes ).get().then(( snapshot )=> 
	{
            let col = '<tr><td> Data <td> Descrição <td> Valor <td class="text-center"> Detalhes';
            $('#tabela').append( '<tbody><tr>' );
            $('#tabela').append( col );
            
            let msgTbl = $('#msgTbl');
            msgTbl.text( ' Relação dos gastos do mês de ' + mes + ' de ' + ano  );
            
            snapshot.forEach(( data )=>{
                
                let line = '<tr><td>' + data.val().data +'<td>' + data.val().descrição + '<td>' + data.val().valor + '<td> <i class="bi bi-eye-fill"></i>';
                $('#tabela').append( line );
                
                console.log( data );
            });
    });    
        
    // Link de voltar para tabela de anos.
    
        let linkBack = $('<div id="backIcon">');
        
        $('#tabela').after( linkBack );
        $('#backIcon').attr('onClick','getHistoricFromMonth ( getidUser(),' + ano + ')' );
        $('#backIcon').addClass(' bi bi-box-arrow-in-left fs-4 ');
        
}

// Listagem histórico por ano.

function getHistoricFull ( idUser ){

    let msgTbl = $('#msgTbl');
    msgTbl.text( ' Relação por anos' );

    $('#backIcon').remove();
    $('#tabela').empty();
    $('#tabela').append( '<tbody><tr>' );
        
    const dbRef = firebase.database().ref('gastos-db');
	dbRef.child("cliente/" + idUser + "/historico/").get().then(( snapshot )=> 
	{
            // console.log( snapshot.val() );
        
            snapshot.forEach(( data )=>{
                
                $('#tabela').append( '<tr><td onClick="getHistoricFromMonth ( getidUser(), this.innerText )">' + data.key );

            });
    });    
}

// Listagem histórico por mês

function getHistoricFromMonth ( idUser, ano ){

    $('#backIcon').remove();
    $('#tabela').empty();
    
    const dbRef = firebase.database().ref('gastos-db');
	dbRef.child("cliente/" + idUser + "/historico/" + '/' + ano ).get().then(( snapshot )=> 
	{
            $('#tabela').empty();
            $('#tabela').append( '<tbody><tr>' );
            let msgTbl = $('#msgTbl');
            
            msgTbl.text( ' Relação por meses do ano de ' + ano );    
           
            snapshot.forEach(( data )=>{
            
                $('#tabela').append( '<tr><td onClick="getHistoricbyDay ( getidUser(),' + ano + ', this.innerText )">' + data.key );
                
            });
    });    

    // Link de voltar para tabela de anos.
    
    let linkBack = $('<div id="backIcon">');
        
    $('#tabela').after( linkBack );
    $('#backIcon').attr('onClick','getHistoricFull ( getidUser() )' );
    $('#backIcon').addClass(' bi bi-box-arrow-in-left fs-4 ');

}


// link visualizar histórico.

$('#historico').on('click', ((data)=>{

    let id = sessionStorage.getItem("id");

    getHistoricFull ( getidUser() );

}));