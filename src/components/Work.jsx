import '../styles/home.css';

export default function Home({ name, tagline, avatar }) {
  return (
    <section className="home">
      <img className="home-avatar" src={avatar} alt={name} />
      <div className="home-info">
        <h1>{name}</h1>
        <p>{tagline}</p>
      </div>
    </section>
  );
}