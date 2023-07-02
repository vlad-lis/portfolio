import { about } from '../../utils/staticContent';

function About() {
  const { title, contacts, info } = about;

  return (
    <main className="about">
      <div className="about__container">
        <p className="about__title">{title}</p>
        <p>{info}</p>
        <p>{contacts}</p>
      </div>
    </main>
  );
}

export default About;
