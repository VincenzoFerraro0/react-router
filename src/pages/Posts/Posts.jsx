// Importa gli hook di React per gestire lo stato e gli effetti collaterali
import { useEffect, useState } from "react";

// Importa Axios per effettuare richieste HTTP
import axios from "axios";

// Importa NavLink per creare link di navigazione dinamici
import { NavLink } from 'react-router-dom';

// Importa il componente PostCard per visualizzare ogni post
import PostCard from "../../components/PostCard";

export default function Posts() {
    // Stato per memorizzare la lista dei post
    const [posts, setPosts] = useState([]);

    // URL dell'API definito nelle variabili d'ambiente
    const url = import.meta.env.VITE_ENDPOINT_URL;

    // Effettua una richiesta HTTP all'API quando il componente viene montato
    useEffect(() => {
        axios.get(url)
            .then((res) => setPosts(res.data)) // Salva i dati ricevuti nello stato `posts`
    }, []); // Il secondo parametro `[]` assicura che la chiamata venga eseguita solo una volta

    return (
        <div>
            {/* Mappa i post ricevuti e crea una card per ognuno */}
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        {/* Link al singolo post usando il suo ID */}
                        <NavLink to={`${post.id}`}>
                            <PostCard 
                                title={post.title} 
                                content={post.content} 
                                tags={post.tags} 
                                url={post.url} 
                            />
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};
