<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

require 'connexion.php';


if(isset($_POST['insert_produit'])){

    $query = "INSERT INTO `produit`(`nom_produit`, `quantite_produit`, `fk_id_magasin`) VALUES (:nom_produit, :quantite_produit, :fk_id_magasin)";
    $requete = $connexion->prepare($query);
    $requete->bindValue(':nom_produit', $_POST['nom_produit']);
    $requete->bindValue(':quantite_produit', $_POST['quantite_produit']);
    $requete->bindValue(':fk_id_magasin', $_POST['fk_id_magasin']);
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