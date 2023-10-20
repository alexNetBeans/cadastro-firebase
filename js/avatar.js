
//  Gerencia a seleção de avatar.


// Atualiza a imagem placeholder para avatar selecionado.

$('.avatarsSelected').on('click', ((data)=>{

    let id = data.target.id;
    let avatarSelected = $('#' + id).attr('src');
    let imgPlaceholder = $('#imgPlace');
    imgPlaceholder.attr('src', avatarSelected);
}));


// Muda os generos dos Avatares.

$('#sexo').on('change', ((data)=>{
     let sexo = $('#sexo option:selected').val();
     updateImgAvatars( sexo );

}));

function updateImgAvatars( s ){

     if (s == 'm'){

         $('#av1').attr('src', 'images/001.png');
         $('#av2').attr('src', 'images/002.png');
         $('#av3').attr('src', 'images/003.png');
         $('#av4').attr('src', 'images/004.png');
         $('#av5').attr('src', 'images/005.png');

         $('#imgPlace').attr('src', 'images/placeholder.png');
     }
     else if (s == 'f'){

         $('#av1').attr('src', 'images/001-f.png');
         $('#av2').attr('src', 'images/002-f.png');
         $('#av3').attr('src', 'images/003-f.jpg');
         $('#av4').attr('src', 'images/004-f.png');
         $('#av5').attr('src', 'images/005-f.png');

         $('#imgPlace').attr('src', 'images/placeholder-f.png');
     }
}