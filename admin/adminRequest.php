<?php
/**
 * The file doc comment
 * php version 7.2.10
 * 
 * @category Class
 * @package  Package
 * @author   Original Author <author@example.com>
 * @license  https://www.cedcoss.com cedcoss 
 * @link     link
 */
require '../Product.php';
$Product = new Product();


if (isset($_GET['fetchCategory'])) {
    $data = $Product->fetchCategory();
    echo $data;
}
?>