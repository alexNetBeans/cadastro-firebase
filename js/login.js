
// Busca dados para login 

function login ( emailLogin, passwdLogin ){

    let email;
    let senha;
    let id;

    const dbRef = firebase.database().ref('gastos-db');
	dbRef.child("cliente").get().then(( snapshot )=> 
	{
		snapshot.forEach(( data )=>{
           
            if ( data.val().email == emailLogin ){

               email = data.val().email;
               senha = data.val().senha;
               id    = data.key;               
            }
        });
               
	});    

}