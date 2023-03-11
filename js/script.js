$(function () {
    $("nav .navbar_col_2 span").click(function () {
        $("nav .navbar_col_2 span .span_top").css("width", "50%")
        $("nav .navbar_col_2 span .span_center").css("width", "80%")
       

    })
    $("nav .navbar_col_2 span").click(function () {
        $("nav .navbar_col_2 .menu .menu_ul ").css("display", "block")
       

    })
    $("nav .navbar_col_2 .menu .menu_ul ul li").click(function () {
        $("nav .navbar_col_2 .menu .menu_ul ").css("display", "none")
        $("nav .navbar_col_2 span .span_top").css("width", "100%")
        $("nav .navbar_col_2 span .span_center").css("width", "100%")
       

    })
    


})


// // document.addEventListener("mousemove",function(){

// // })

// // setTimeout(katta(),5 00)


