

function getidUser(){
    
    let idUser = sessionStorage.getItem("id");
    return idUser;
}

function getNameUser(){
    
    let nameUser = sessionStorage.getItem("nome");
    return nameUser;
}

function getAvatarUser(){
    
    let avatarUser = sessionStorage.getItem("avatar");
    return avatarUser;
}

function getemailUser(){
    
    let emailUser = sessionStorage.getItem("email");
    return emailUser;
}


//  Recupera dados do usuário logado.

function getDataSessionUser(){

    $('#FullName').text( getNameUser() );
    $('#name').text( getNameUser() );
    $('#email').text( getemailUser() );
    $('#avatar').attr('src', getAvatarUser());
    $('#avatar').attr('width','80');

    $('#FullName').addClass('fs-2 text-center');
    $('#FullName').css('vertical-align', 'middle');
    // $('#senha')
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
