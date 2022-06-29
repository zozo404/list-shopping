import React, {useState} from 'react';

export default function Article({article, setQuantity, setName, deleteArticle}){

    const [editMode, setEditMode] = useState(false);

    let content = <div style={{display: "flex", alignItems: "center"}}>
                        
                        <p className="ms-5">{article.quantite_produit} {article.nom_produit}</p>
                  </div>

            if(editMode){
                content = <div style={{display: "flex", alignItems: "center"}}>
                            <input type="number"  className="ms-2" onChange={(e)=>{setQuantity(e.target.value, article.id_produit)}} value={article.quantite_produit} />
                            <input type="text" onChange={(e)=>{setName(e.target.value, article.id_produit)}} value={article.nom_produit} />
                          </div>
            }

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <button className="btn btn-danger btn-sm" onClick={()=>{deleteArticle(article.id_produit)}}>Delete</button>
            <button className="btn btn-warning btn-sm" onClick={()=>{setEditMode(!editMode)}}>Edit</button>
            {content}
        </div>
    )

}