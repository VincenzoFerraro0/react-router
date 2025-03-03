export default function PostCard({ id, title, content, tags, url }) {
    return (
        <div key={id}>
             {/* Titolo del post */}
            <h3 >{title}</h3>
            {/* Immagine del post */}
            <figure >
                <img src={url} alt={title}/>
            </figure>
            {/* Contenuto del post */}
            <p>{content}</p>
            {/* Lista dei tag (se presenti) */}
            {tags && Array.isArray(tags) && (
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index}>
                            {tag}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

