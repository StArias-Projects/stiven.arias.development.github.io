export default function Gif({ src, alt = 'animated preview' }) {
  return (
    <div className="card-asset-container">
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
