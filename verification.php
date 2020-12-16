

<?php 



include('header.php'); 

if(isset($_SESSION['active'])==1)
{
    echo "<script>alert('cannot acces page');
    window.location='index.php';</script>";
}else
{

}

?>


<div>
    <form style="margin-left: 5%;padding:20px" action="register.php" method="POST">
        <table>
            <tr>
                <td>
                    <label>Verify Your Mail</label>
                </td>
            </tr>
            <tr>
                <td>
                    <p><?php
                        if (isset($_SESSION['vemail'])) {
                            echo $_SESSION['vemail'];
                        } else {
                            echo $_SESSION['email'];
                        }
                        ?></p>
                </td>
                <td>
                    <input type="text" name="eotp" id="eotp" style="padding:10px;width:100%;margin-left:5px;">
                </td>
                <td>
                <?php if(isset($_SESSION['rsemail1'])) echo '<input type="submit" value="Send Email" name="rsemail1" id="semail" class="a">';
                else
                {
                    echo '<input type="submit" value="Re Send Email" name="rsemail1" id="semail" class="a">';
                }?>
                     <!-- <input type="submit" value="Send Email" name="rsemail1" id="semail" class="a"> -->
                    <!-- <input type="submit" value="Resend Email" name="rsemail1" id="rvemail" class="a"> -->
                     <!-- <input type="submit" value="Verify" name=""> -->
            </tr>
            <tr>
                <td>
                    <label>Verify Your Mobile</label>
                </td>
            </tr>
            <tr>
                <td>
                    <p>
                        <?php
                        if (isset($_SESSION['vmobile'])) {
                            echo $_SESSION['vmobile'];
                        } else {
                            echo $_SESSION['mobile'];
                        }
                        ?>
                    </p>
                </td>
                <td>
                    <input type="text" name="motp" id="motp" style="padding:10px;width:100%;margin-left:5px;">
                </td>
                <td>
                    <input type="submit" value="Send Mobile" name="rsemail2" id="semail" class="a">
                    <!-- <input type="submit" value="Resend Mobile" name="rsemail2" id="rvemail" class="a"> -->
                    <input type="submit" value="Verify" name="verifym" id="verify" class="a">
                </td>
            </tr>
        </table>
    </form>
</div>

<?php include('footer.php'); 
              


?>