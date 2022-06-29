<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

require 'connexion.php';


if(isset($_POST['insert_produit'])){

    $query = "INSERT INTO `produit`(`nom_produit`, `quantite_produit`) VALUES (:nom_produit, :quantite_produit)";
    $requete = $connexion->prepare($query);
    $requete->bindValue(':nom_produit', $_POST['nom_produit']);
    $requete->bindValue(':quantite_produit', $_POST['quantite_produit']);
    $result = $requete->execute();

    if($result){
        echo json_encode([
            'error' => false,
            'message' => 'Produit ajouté avec succès',
            'id_produit' => $connexion->lastInsertId()
        ]);
    }else{
        echo json_encode([
            'error' => true,
            'message' => 'Echec de l\'ajout du produit'
        ]);
    }

}