<?php
$host = 'db';
$database = 'lamp_demo';
$user = 'dev';
$password = 'devpassword';

$connection = @new mysqli($host, $user, $password, $database);
$connectionStatus = $connection->connect_error
    ? 'Connexion MySQL impossible : ' . htmlspecialchars($connection->connect_error, ENT_QUOTES, 'UTF-8')
    : 'Connexion MySQL réussie';

if (!$connection->connect_error) {
    $connection->close();
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stack LAMP Demo</title>
</head>
<body>
    <h1>Stack LAMP Demo</h1>
    <p><?php phpinfo(); ?></p>
    <h2>Test de connexion MySQL</h2>
    <p><?= $connectionStatus ?></p>
</body>
</html>
