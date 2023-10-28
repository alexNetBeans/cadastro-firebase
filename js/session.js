

function getidUser(){
    
    let idUser = sessionStorage.getItem("id");
    return idUser;
}





// Finaliza Sessão

function logout(){

    sessionStorage.clear();
    window.location = '../index.html';
}

// Recupera dados do usuário salvos em sessão

function getUserData(){

    let avatar = sessionStorage.getItem("avatar");
    let nome   = sessionStorage.getItem("nome");
    
    $('#avatarUser').attr( 'src', avatar );
    $('#userName').text( nome );

    //sessionStorage.getItem("key")
}

    getUserData();

$('#logout').on('click', ((data)=>{

    logout();

}));
