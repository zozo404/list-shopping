<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

require 'connexion.php';

$query = "SELECT * FROM produit";
// $query = "SELECT * FROM produit INNER JOIN magasin on id_produit = id_produit";

$requete = $connexion->prepare($query);
$requete->execute();
$courses = $requete->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($courses);
die;
