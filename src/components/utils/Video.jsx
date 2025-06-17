export default function Video({ src, alt = 'video preview' }) {
  return (
    <div className="card-asset-container">
      <video
        src={src}
        controls
        playsInline
        muted
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'cover',
        }}
        aria-label={alt}
      />
    </div>
  );
}
