<?php
$cityName = isset($_POST['name'])?$_POST['name']:'';
$apiKey = "f1512788dd81c5833ea188a59f2cf794";
$googleApiUrl = "http://api.openweathermap.org/data/2.5/weather?q={$cityName}&cnt=7&appid={$apiKey}";
$ch = curl_init();

curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_URL, $googleApiUrl);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response);
$currentTime = time();
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CheckWeather</title>
<form action="" method="POST">
<input type="text" name="name" placeholder="Enter City Name">
<input type="submit" value="submit" name="submit">
</form>
<table>
</form>
<table style="center">
<tr><th colspan="2">WEATHER DATA</th></tr>
<?php
echo "<tr><td>ID</td><td>".$data->id."</td></tr>";
echo "<tr><td>NAME</td><td>".$data->name."</td></tr>";
echo "<tr><td>TEMP</td><td>".$data->main->temp."</td></tr>";
echo "<tr><td>MIN_TEMP</td><td>".$data->main->temp_min."</td></tr>";
echo "<tr><td>MAX_TEMP</td><td>".$data->main->temp_max."</td></tr>";
echo "<tr><td>PRESSURE</td><td>".$data->main->pressure."</td></tr>";
echo "<tr><td>HUMIDITY</td><td>".$data->main->humidity."</td></tr>";
echo "<tr><td>SPEED</td><td>".$data->wind->speed."</td></tr>";
echo "<tr><td>CLOUD</td><td>".$data->clouds->all."</td></tr>";
?>
</table>
</head>
<body>

</body>
</html>