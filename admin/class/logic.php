<?php
include("admindbcon.php");
include("productclass.php");
// echo "hii";
$dbconn = new admindbcon();

$obj = new productclass();

if (isset($_POST['categorysubmit'])) {
    $cat_name = $_POST['cname'];
    $cat_link = $_POST['link'];

    if ($cat_name == null || $cat_link == null) {
        echo "<script>alert('Plesae Complete all fields')
        window.location='../category.php'</script>";
    } else {
        $sql = $obj->insert($dbconn->conn, $cat_name, $cat_link);
    }
}


//     if(isset($_POST['categorysubmit1']))
//     {
//     $cat_name1 = $_POST['cname1'];
//     $cat_link1 = $_POST['link1'];
//     $is_available=$_POST['is_available'];
//     $id=$_POST['hidden'];
    
//     //echo $cat_link1;
//     //echo $cat_name1;
    
    
   
//         $sql = $obj->update($dbconn->conn, $cat_name1, $cat_link1,$is_available,$id);
//         echo $sql;

// }


       
// if (isset($_POST['categorysubmit1'])) {
    
      
    









if(isset($_POST['categorysubmit1']))
{
    $name=isset($_POST['cname1'])?$_POST['cname1']:"";
    $select=isset($_POST['is_available'])?$_POST['is_available']:"";
    $link=isset($_POST['link1'])?$_POST['link1']:"";
    $hidden=$_POST['hidden'];

     echo $hidden;

    
    
    $row=$obj->updatecategory($name, $select, $link, $hidden, $dbconn->conn);
    //  header('location:category.php');




}

if(isset($_GET['id5'])) {


    $id=$_GET['id5'];

    echo $id;

    
    $row=$obj->deletecategory($id, $dbconn->conn);



}






if(isset($_POST['submit10']))
{

    $name=isset($_POST['name'])?$_POST['name']:"";
    $select=isset($_POST['select'])?$_POST['select']:"";
    $link=isset($_POST['url'])?$_POST['url']:"";
    $price1=$_POST['price1'];
    $price2=$_POST['price2'];
    

    $sku=$_POST['sku'];
    $webspace=$_POST['webspace'];
    $band=$_POST['band'];

    $free=$_POST['free'];
    $lang=$_POST['lang'];
    $mail=$_POST['mail'];



    


   
    $row=$obj->addproduct($name, $select, $link, $dbconn->conn);
   
    $arr=array("webspace"=>$webspace,
                "band"=>$band,
                "free"=>$free,
                "lang"=>$lang,
                "mail"=>$mail

    
    
);

$json_arr=json_encode($arr);


$row1=$obj->addfinalproduct($row, $price1, $price2, $dbconn->conn, $sku, $json_arr);




    



}





if(isset($_POST['updateproduct']))
{

    $updatename=isset($_POST['updatename'])?$_POST['updatename']:"";
    $updateavailable=isset($_POST['updateavailable'])?$_POST['updateavailable']:"";
    $link=isset($_POST['updatelink'])?$_POST['updatelink']:"";
    $hidden=($_POST['hidden']);
   
    $updatemonthly=$_POST['updatemonthly'];
    $updateannual=$_POST['updateannual'];

    $updatesku=$_POST['updatesku'];
    $updatewebspace=$_POST['updatewebspace'];
    $updateband=$_POST['updateband'];

    $updatefree=$_POST['updatefree'];
    $updatelang=$_POST['updatelang'];
    $updatemail=$_POST['updatemail'];


    
    $row=$obj->updateproduct($updatename, $updateavailable, $link, $hidden,$dbconn->conn);
   
    
  

    $arr=array("webspace"=>$updatewebspace,
                "band"=>$updateband,
                "free"=>$updatefree,
                "lang"=>$updatelang,
                "mail"=>$updatemail

    
    
);

$json_arr=json_encode($arr);


$row1=$obj->updatefinalproduct($hidden, $updatemonthly, $updateannual, $dbconn->conn, $updatesku, $json_arr);



    


}

if(isset($_GET['id15']))
{
    $id=$_GET['id15'];
    
    $row=$obj->deleteproduct($id,$dbconn->conn);
}

if(isset($_POST['name5']))
{
    $name=$_POST['name5'];
    $name=strtolower($name);

   
    $row=$obj->countcat($name,$dbconn->conn);
    
         if($row==1)
    {
        echo "Category name already present";
        
    }

}











   
?>
