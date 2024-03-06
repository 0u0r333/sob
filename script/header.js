$(function(){

    //모바일 메뉴 아이콘 클릭시 메뉴 나타나게
    $("header .m_menu").click(function(){
        $("header nav").fadeIn();
    });


    //xxx누르면 메뉴 닫힘
    $("header nav .xxx").click(function(){
        $("header nav").fadeOut();
    });
        
       



 ///   
}); 