import { about } from '../../utils/staticContent';

function About() {
  const {
    title, contacts, briefInfo, projectsInfo, repositoryInfo, repositoryLinkText, repositoryLinkUrl,
    emailTitle, emailAddress, telegramTitle, telegramHref, telegramName,
  } = about;

  return (
    <main className="about">
      <div className="about__container">
        <div className="about__subcontainer">
          <p className="about__title">{title}</p>
          <p className="about__text">{briefInfo}</p>
          <p className="about__text">{projectsInfo}</p>
          <p className="about__text">
            {repositoryInfo}
            <a className="about__text about__link" href={repositoryLinkUrl} target='_blank' rel='noreferrer'>{repositoryLinkText}</a>
          </p>
        </div>
        <div className="about__subcontainer">
          <p className="about__title">{contacts}</p>
          <ul className="about__contacts-list">
            <li className="about__contact">
              <p className="about__text about__contact-title">{emailTitle}</p>
              <p className="about__text">{emailAddress}</p>
            </li>
            <li className="about__contact">
              <p className="about__text about__contact-title">{telegramTitle}</p>
              <a className="about__text about__link" href={`tg://resolve?domain=${telegramHref}`}>{telegramName}</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default About;
