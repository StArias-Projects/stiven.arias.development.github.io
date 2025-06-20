export default function YouTube({ videoId, title = 'YouTube video' }) {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="card-asset-container">
            <iframe
                width="100%"
                height="100%"
                src={embedUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ aspectRatio: '16 / 9', maxWidth: '100%' }}
            />
        </div>
    );
}
