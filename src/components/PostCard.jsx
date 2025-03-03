export default function PostCard({ id, title, content, tags, url }) {
    return (
        <div key={id}>
            <h3 >{title}</h3>
            <figure >
                <img src={url} alt={title}/>
            </figure>
            <p>{content}</p>
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

