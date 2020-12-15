$(document).ready( function () {
    $('#Table').DataTable();
} );
$(document).ready(function(){


    $('#proname').on("cut copy paste drag drop",function(e) {
        e.preventDefault();
        });

        $('#prourl').on("cut copy paste drag drop",function(e) {
            e.preventDefault();
            });

    $("#prodCategory").hide();
    $("#prodname").hide();
    $("#produrl").hide();
    $("#prodprice").hide();
    $("#prodallprice").hide();
    $("#prodsku").hide();
    $("#prodweb").hide();
    $("#prodband").hide();
    $("#prodfree").hide();
    $("#prodlang").hide();
    $("#prodmail").hide();
    $("#submit10").attr("disabled",true);

    $name=$("#proname").val();
    $sel=$("#select").val();
    console.log($name,$sel);

    var count1=0;
    var count2=0;
    var count3=0;
    var count4=0;
    var count5=0;
    var count6=0;
    var count7=0;
    var count8=0;
    var count9=0;
    var count10=0;
    
  
   
    
   

    // $("#proname").value();

$("#select").focusout(function() {
    $categoryid = $("#select").val();
    if ($categoryid == "") {
        $("#prodCategory").html("*Select Category");
        $("#prodCategory").show();
        $("#submit10").attr("disabled",true);

        $(this).css('border', 'solid 3px red');
        count1=0;
    } else {
       
        $("#prodCategory").hide();
        $(this).css('border', 'solid 3px green');
        count1=1;
    }
    buttonShow();
});

$("#proname").focusout(function() {
    $proname = $("#proname").val();
    if ($proname == "") {
        $("#prodname").html("*Select Product Name");
        $("#prodname").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);


        $(this).css('border', 'solid 3px red');
        count2=0;
    }  
    else if(!$proname.match(/^([a-zA-Z]+\s+[a-zA-Z])*[(a-zA-Z)]*(-[0-9]+(?!-)+)*$/))
    {
        $("#prodname").html("*Select Valid Product Name");
        $("#prodname").show();
        $("#submit11").attr("disabled",true);
     
        $(this).css('border', 'solid 3px red'); 
        count2=0;
    }
    
    else {
        
        $("#prodname").hide();
        $("#submit11").attr("disabled",false);
        $(this).css('border', 'solid 3px green');
        count2=1;
    }

    buttonShow();



});

$("#proprice").focusout(function() {
    $proprice = $("#proprice").val();
   
   
    if ($proprice == "") {
        $("#prodprice").html("*Select Product price");
        $("#prodprice").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);

        $(this).css('border', 'solid 3px red');
        count3=0;
    }  
    else if(!$proprice.match(/^[0-9]\d*(\.\d+)?$/))
    {
        $("#prodprice").html("*Select Valid Product price");
        $("#prodprice").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);


        $(this).css('border', 'solid 3px red'); 
        count3=0;
    }
    
    
    else {
       
        $("#prodprice").hide();
        $("#submit11").attr("disabled",false);

        $(this).css('border', 'solid 3px green');
        count3=1;
    }
    buttonShow();



});


$("#proannualprice").focusout(function() {
    $proprice = $("#proannualprice").val();
    $promonprice = $("#proprice").val();
    console.log($promonprice);
    console.log($proprice);
    if ($proprice == "") {
        $("#prodallprice").html("*Select Product Annual price");
        $("#prodallprice").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);


        $(this).css('border', 'solid 3px red');
        count4=0;
    }  
    else if(!$proprice.match(/^[0-9]\d*(\.\d+)?$/))
    {
        $("#prodallprice").html("*Select Valid Product Annual price");
        $("#prodallprice").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);


        $(this).css('border', 'solid 3px red'); 
        count4=0;
    }
    if ($promonprice >= $proprice) {
        $("#prodallprice").html("*Annual Price Can't be less than Monthly Price");
        $("#prodallprice").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);


        $(this).css('border', 'solid 3px red');
        count4=0;
    }  
    
    else {
        
        $("#prodallprice").hide();
        $("#submit11").attr("disabled",false);

        $(this).css('border', 'solid 3px green');
        count4=1;
    }

    buttonShow();



});


$("#proweb").focusout(function() {
    $proweb = $("#proweb").val();
    if ($proweb == "") {
        $("#prodweb").html("*Select Web Space in G.B");
        $("#prodweb").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);

        $(this).css('border', 'solid 3px red');
        count5=0;
    }  
    else if(!$proweb.match(/^[0-9]\d*(\.\d+)?$/))
    {
        $("#prodweb").html("*Select Valid Web Space");
        $("#prodweb").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);

        $(this).css('border', 'solid 3px red'); 
        count5=0;
    }
    else if($proweb<.5)
    {
        $("#prodweb").html("*Select Valid Web Space");
        $("#prodweb").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);

        $(this).css('border', 'solid 3px red'); 
        count5=0;
    }

    
    
    else {
        
        $("#prodweb").hide();
        $("#submit11").attr("disabled",false);
        $(this).css('border', 'solid 3px green');
        count5=1;
    }

    buttonShow();



});


$("#proband").focusout(function() {
    $proband = $("#proband").val();
    if ($proband == "") {
        $("#prodband").html("*Select band Space in G.B");
        $("#prodband").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);

        $(this).css('border', 'solid 3px red');
        count6=0;
    }  
    else if(!$proband.match(/^[0-9]\d*(\.\d+)?$/))
    {
        $("#prodband").html("*Select Valid band Space");
        $("#prodband").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);

        $(this).css('border', 'solid 3px red'); 
        count6=0;
    }
    else if($proband<.5)
    {
        $("#prodband").html("*Select Valid band Space");
        $("#prodband").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);

        $(this).css('border', 'solid 3px red'); 
        count6=0;
    }

    
    
    else {
        
        $("#prodband").hide();
        $("#submit11").attr("disabled",false);
        $(this).css('border', 'solid 3px green');
        count6=1;
    }
    buttonShow();



});

$("#profree").focusout(function() {
    $profree = $("#profree").val();
    $first=$profree.substr(0,1);
    console.log($first);
    
    if($first.match(/^[a-zA-Z]+$/))
    {
       $pattern=/^[a-zA-Z]+$/;
    }
    else if($first.match(/^[0-9]+$/))
    {
       $pattern=/^[0-9]+$/;
    } 
    if ($profree == "") {
        $("#prodfree").html("*Select Free Domain as 0 if not required");
        $("#prodfree").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);

        $(this).css('border', 'solid 3px red');
        count7=0;
    }  
    else if(!$profree.match($pattern))
    {
        $("#prodfree").html("*Select Valid Free Domain");
        $("#prodfree").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);

        $(this).css('border', 'solid 3px red');
        count7=0;
    }
  

    
    
    else {
        
        $("#prodfree").hide();
        $("#submit11").attr("disabled",false);
        $(this).css('border', 'solid 3px green');
        count7=1;
    }
    buttonShow();



});







$("#prolang").focusout(function() {
    $prolang = $("#prolang").val();
    if ($prolang == "") {
    $("#prodlang").html("*Enter language!!");
    $("#prodlang").show();
    $("#submit10").attr("disabled",true);
    $("#submit11").attr("disabled",true);
    
    $(this).css('border', 'solid 3px red');
    count8=0;
    }
    else if(!$prolang.match(/^(((?!\s)+[a-zA-Z0-9]+[a-zA-Z0-9*(+*, )]+))+$/))
    {
    $("#prodlang").html("*Enter Valid language");
    $("#prodlang").show();
    $("#submit10").attr("disabled",true);
    $("#submit11").attr("disabled",true);
    $(this).css('border', 'solid 3px red');
    count8=0;
    
    }
    
    
  
    
    else {
    
    count8=1;
    //$("#add").attr("disabled",false);
    $("#prodlang").hide();
    $(this).css('border', 'solid 3px green');
    $("#submit11").attr("disabled",false);
    

    if($prolang.endsWith(",")) {
    $("#prodlang").html("*Enter Valid language");
    $("#prodlang").show();
    $("#submit10").attr("disabled",true);
    $("#submit11").attr("disabled",true);
    
    $(this).css('border', 'solid 3px red');
    count8=0;
    } else if($prolang.endsWith(" ")) {
    $("#prodlang").html("*Enter Valid language");
    $("#prodlang").show();
    $("#submit10").attr("disabled",true);
    $("#submit11").attr("disabled",true);
    
    $(this).css('border', 'solid 3px red');
    count8=0;
    }
    }
    buttonShow();
    
    
    
    });



$("#promail").focusout(function() {
    $promail = $("#promail").val();

    $first=$promail.substr(0,1);
    console.log($first);
    
    if($first.match(/^[a-zA-Z]+$/))
    {
       $pattern=/^[a-zA-Z]+$/;
    }
    else if($first.match(/^[0-9]+$/))
    {
       $pattern=/^[0-9]+$/;
    } 
    if ($promail == "") {
        $("#prodmail").html("*Select Mail");
        $("#prodmail").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);

        $(this).css('border', 'solid 3px red');
        count9=0;
    }  
    else if(!$promail.match($pattern))
    {
        $("#prodmail").html("*Select Valid Mail box");
        $("#prodmail").show();
       $("#submit10").attr("disabled",true);
       $("#submit11").attr("disabled",true);

        $(this).css('border', 'solid 3px red'); 
        count9=0;
    }
  
    
    
    else {
        
        $("#prodmail").hide();
        $("#submit11").attr("disabled",false);
        $(this).css('border', 'solid 3px green');
        count9=1;
    }

    buttonShow();



});


$("#prosku").focusout(function() {
    $prosku = $("#prosku").val();
    if ($prosku == "") {
        $("#prodsku").html("*Select sku");
        $("#prodsku").show();
       $("#submit10").attr("disabled",true);

        $(this).css('border', 'solid 3px red');
        count10=0;
    } 
  
    else if(!$prosku.match(/^([#-]*[a-zA-z0-9])+[a-zA-Z0-9#-]+$/))
    {
        $("#prodsku").html("*Select Valid sku");
        $("#prodsku").show();
       $("#submit10").attr("disabled",true);

        $(this).css('border', 'solid 3px red'); 
        count10=0;

        if($prosku.match(/^[a-zA-Z0-9]+$/))
        {
           
           $("#prodsku").hide();
           $(this).css('border', 'solid 3px green');
           count10=1;
       }
    }

    
  
    
    
    else {
        
        $("#prodsku").hide();
        $(this).css('border', 'solid 3px green');
        count10=1;
    }

    buttonShow();



});

function buttonShow()
{
    $count=count1+count2+count3+count4+count5+count6+count7+count8+count9+count10;

    if($count==10)
    {

    $("#submit10").attr("disabled",false);
    }
    else
    {
        $("#submit10").attr("disabled",true);
    }
}
        
        
     

$("#add").attr("disabled",true)               
$("#scn").focusout(function() {

 


    var name=$('#scn').val();

   $.ajax({
    url:"class/logic.php",
    method:"POST",
    dataType: "TEXT",
    data:{ name5: name},

    success:function(msg) {
     len=msg.length;
     console.log(len);
     console.log(msg);
     if(len>2)
     {
       $("#subname").text(msg);
    $("#subname").show();
    $("#add").attr("disabled",true);
     }
     else if(len==2)
     {

        $("#subname").hide();
        $("#add").attr("disabled",false);
     }
    }
  });

});




$('#scn').bind("keypress keyup keydown", function (e){

    var catname = $('#scn').val();
    var regtwodots = /^(?!.*?\.\.).*?$/;
    var lcatname = catname.length;
    if ((catname.indexOf(".") == 0) || !(regtwodots.test(catname))) {
    alert("invalid category name!!");
    
    $("#subname").html("*Enter Valid Product Name");
    $("#subname").show();
    $("#add").attr("disabled",true);
    $(this).css('border', 'solid 3px red');
    count2=0;
    $("#scn").val("");
    
    return;
    }
    else if(Number.isInteger(parseInt($('#scn').val()))) {
        alert('Please Enter Security Answer in Correct Format');
        $('#scn').val("");
        return false;
        }
        else
        return true;
    });
        
        });
        













        



