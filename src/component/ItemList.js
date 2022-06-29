import React from 'react';
import Article from './Article';

function ItemList({articles, setQuantity, setName, deleteArticle}){

    return (
        <div>
            <p className='p-article'>Liste des articles</p>
            {
                articles.map((article, index) => {
                    return <Article key={index} article={article} setQuantity={setQuantity} setName={setName} deleteArticle={deleteArticle}/>
                })
            }
        </div>
    )


}

export default ItemList;