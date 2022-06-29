import React from 'react';
import Article from './Article';

function ItemList({articles, setQuantity, setName, deleteArticle}){

    return (
        <div>
            <h4>Liste des articles</h4>
            {
                articles.map((article, index) => {
                    return <Article key={index} article={article} setQuantity={setQuantity} setName={setName} deleteArticle={deleteArticle}/>
                })
            }
        </div>
    )


}

export default ItemList;