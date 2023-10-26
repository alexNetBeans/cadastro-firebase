
function setSession(id, nome, avatar, email){

    sessionStorage.setItem("id", id);
    sessionStorage.setItem("nome", nome);
    sessionStorage.setItem("avatar", avatar);
    sessionStorage.setItem("email", email);

    // let data = sessionStorage.getItem("key")
    // sessionStorage.clear();

}

// Busca dados para login 

function login( emailLogin, passwdLogin ){

    let email;
    let senha;
    let id;
    let avatar;

    const dbRef = firebase.database().ref('gastos-db');
	dbRef.child("cliente").get().then(( snapshot )=> 
	{
		snapshot.forEach(( data )=>{
           
            if ( data.val().email == emailLogin ){

               nome   = data.val().nome;
               email  = data.val().email;
               senha  = data.val().senha;
               avatar = data.val().avatar;
               id     = data.key;               
            }
        });
           
            if (passwdLogin == senha){

                /* console.info( 'Logado!' );
                console.info( 'e-mail: =>' + email + '=> ' + senha + '=> ' + ' id: => ' + id  );
                */

                $('#msg').addClass('alert alert-info');
                $('#msg').text('Logado com Successo !');

                setSession(id, nome, avatar, email);

                setTimeout(()=>{
                    window.location = 'dashboard.html';
                }, '1500')
                
            }
            else{
                 // console.error( 'erro ao fazer login !' );

                 $('#msg').addClass('alert alert-danger');
                 $('#msg').text('login inválido');

                 setTimeout(()=>{
                    $('#msg').removeClass('alert alert-danger');
                    $('#msg').text('');
                 }, '1500')
            }
	});    
}


// Botão fazer login

$('#btn-Login').on('click', ((data)=>{

    let emailLogin = $('#email').val();
    let passwdLogin = $('#senha').val();
    
    login( emailLogin, passwdLogin );

}));
