import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function Article({article, setQuantity, setName, deleteArticle, setIdStoreSelected}){

    const [editMode, setEditMode] = useState(false);
    const [magasins, setMagasins] = useState([]);

    const editMagasin = (id_magasin, e)=>{
        setIdStoreSelected(e.target.value, article.fk_id_magasin);
        axios({
            method: 'POST',
            url: 'http://localhost/list-shopping/php/edit.php',
            responseType: 'json',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {}
          })
          .then((response)=>{
            console.log(response);
            editMagasin(response.data);
           
          })
          .catch((error)=>{
            console.log(error);
          });
    }

    useEffect(()=>{
        axios({
            method: 'GET',
            url: 'http://localhost/list-shopping/php/get-store.php',
            responseType: 'json',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {}
          })
          .then((response)=>{
            console.log(response);
            setMagasins(response.data);
           
          })
          .catch((error)=>{
            console.log(error);
          });
    }, [])
    let content = <div style={{display: "flex", alignItems: "center"}}>
                        
                        <p className="ms-5">{article.nom_produit} - {article.quantite_produit} | {article.nom_magasin}</p>
                  </div>

            if(editMode){
                content = <div style={{display: "flex", alignItems: "center"}}>
                            <input type="number"   className="ms-2 form-control" onChange={(e)=>{setQuantity(e.target.value, article.id_produit)}} value={article.quantite_produit} />
                            <input type="text" className="form-control" onChange={(e)=>{setName(e.target.value, article.id_produit)}} value={article.nom_produit} />
                            <select className="form-select" type="text" onChange={(e)=>{editMagasin((e.target.value))}}>
                                {magasins.map((magasin, index)=>{
                                    return <option value={magasin.id_magasin} key={index} >{magasin.nom_magasin}</option>
                                })}
                            </select>
                       
                          </div>
            }

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <button className="btn btn-danger btn-sm me-1" onClick={()=>{deleteArticle(article.id_produit)}}>Supprimer</button>
            <button className="btn btn-warning btn-sm" onClick={()=>{setEditMode(!editMode)}}>Modifier</button>
            {content}
        </div>
    )

}