
// Cadastra dados no firebase

function insertData( data )
{
    firebase.database().ref('gastos-db').child('cliente')
    .push( data )
    .then (( s )=>
    {
        window.location = 'cadConcluido.html';

    }, ( error ) => {
        if ( error ) {
            showMsg( 'erro' );
        } else {
        // Data saved successfully!
        showMsg( 'success' );
        }
    }).key   
}

// Pega dados do formulário.

function getDataForm(){

    let avatar = $('#imgPlace').attr('src');

    let nome   = $('#nome').val();
    let sexo   = $('#sexo').val();
    let email  = $('#email').val();
    let senha  = $('#senha').val();

    let data = 
    {
       'nome': nome,
       'sexo': sexo,
       'email': email,
       'senha': senha,
       'avatar': avatar
    }

    insertData( data ); 
};

// Botão Cadastrar.

$('#btnCad').on('click', ((data)=>{

    getDataForm();

}));

/*
	const dbRef = firebase.database().ref('gastos-db');
	dbRef.child("cliente").get().then((snapshot) => 
	{
		snapshot.forEach((data)=>{
        console.log(data.key)
    });
	});

*/