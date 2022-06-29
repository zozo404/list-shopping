import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';

function Form({formTitle, addArticle}){

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);


    useEffect(() => {
        console.log('composant chargé')
    }, [name, quantity])


    const handleSubmit = (e) => {
        e.preventDefault();
        if(name != "" && quantity > 0){
            let article = {}
            article.nom_produit = name;
            article.quantite_produit = quantity;
            addArticle(article)
            setName('');
            setQuantity(0)
        }
    }

    return (
        <div>
            <h4>{formTitle}</h4>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="row">
                    <div className="col-sm-2">
                        <input type="number" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} className="form-control"/>
                    </div>
                    <div className="col-sm-3">
                        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control"/>
                    </div>

                    <div className="col-sm-2">
                        <label for="magasin-select">Choisir un magasin:</label><br/>
                        <select name="magasin" id="magasin-select">
                            <option value="">--Please choose an option--</option>
                            <option value="leclerc">Leclerc</option>
                            <option value="carrefour">Carrefour</option>
                            <option value="auchan">auchan</option>
                            <option value="lidl">lidl</option>
                        </select>
                    </div>
                    <div className="col-sm-2">
                        
                    </div>
                
                </div>
                <button type="submit" className="btn btn-info text-white mt-2">Ajouter</button>
                
                
            </form>
        </div>
    )


}

export default Form;