import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';

function Form({formTitle, addArticle}){

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [magasins, setMagasins] = useState([]);
    const [idStoreSelected, setIdStoreSelected] = useState(null);



    const handleSubmit = (e) => {
        e.preventDefault();
        if(name !== "" && quantity > 0){
            let article = {}
            article.nom_produit = name;
            article.quantite_produit = quantity;
            article.fk_id_magasin = idStoreSelected;
            addArticle(article)
            setName('');
            setQuantity(0);
        }
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
                        <select className='form-select' name="magasin" id="magasin-select" onChange={(e)=>{setIdStoreSelected(e.target.value)}}>
                            <option value="" >--Choississez un magasin--</option>
                            {magasins.map((magasin, index)=>{
                                return <option value={magasin.id_magasin} key={index} >{magasin.nom_magasin}</option>
                            })}
                            
                        </select>
                    </div>
                    <div className="col-sm-2">
                        {/* code pour ajouter magasin */}
                    </div>
                
                </div>
                <button type="submit" className="btn btn-info text-white mt-2">Ajouter</button>
                
                
            </form>
        </div>
    )


}

export default Form;