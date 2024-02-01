import PropTypes from 'prop-types';
import { useState } from 'react';
import { projectContent } from '../../utils/staticContent';

function Project({ lang, project }) {
  const {
    detailsBtnMinus,
    detailsBtnPlus,
    detailsBtnTextEN,
    githubEN,
    toolsEN,
    descriptionEN,
    githubRU,
    toolsRU,
    descriptionRU,
    detailsBtnTextRU,
  } = projectContent;

  // fields
  const github = lang === 'En' ? githubEN : githubRU;
  const tools = lang === 'En' ? toolsEN : toolsRU;
  const description = lang === 'En' ? descriptionEN : descriptionRU;

  // details
  const details = lang === 'En' ? project.detailsEN : project.detailsRU;
  const detailsBtnText = lang === 'En' ? detailsBtnTextEN : detailsBtnTextRU;

  // expand details
  const [expandedDetails, setExpandedDetails] = useState(false);
  const detailsClass = `project__details ${
    expandedDetails ? 'project__details_expanded' : ''
  }`;
  const detailsBtnSymbol = expandedDetails ? detailsBtnMinus : detailsBtnPlus;

  const toggleExpandedDetails = () => {
    setExpandedDetails(!expandedDetails);
  };

  const addReadmeLink = (text, link) => {
    const regex = /(\bREADME\b|\n)/g;

    return text.split(regex).map((part, index) => {
      if (part === 'README') {
        return (
          <a
            key={index}
            className='project__details-readme'
            href={link}
            target='_blank'
            rel='noreferrer'
          >
            {part}
          </a>
        );
      }
      return part === '\n' ? <br key={index} /> : part;
    });
  };

  return (
    <div className='project'>
      <div className='project__container'>
        <div className='project__info'>
          <h4 className='project__name'>{project.name}</h4>
          <p className='project__brief'>{project.brief}</p>
          <button
            className='project__details-btn'
            onClick={toggleExpandedDetails}
          >
            <div className='project__details-btn-container'>
              <p className='project__details-btn-text'>{detailsBtnSymbol}</p>
              <p className='project__details-btn-text'>{detailsBtnText}</p>
            </div>
          </button>
        </div>
        <a
          className='project__link'
          href={project.link}
          target='_blank'
          rel='noreferrer'
        >
          {github}
          <div className='project__link-btn' />
        </a>
      </div>
      <div className={detailsClass}>
        <div className='project__details-wrapper'>
          <div className='project__details-text-container'>
            <p className='project__details-heading'>{tools}</p>
            <p className='project__details-text'>{project.tools}</p>
          </div>
          <div className='project__details-text-container'>
            <p className='project__details-heading'>{description}</p>
            <p className='project__details-text'>
              {addReadmeLink(details, project.readme_link)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  lang: PropTypes.string,
  project: PropTypes.shape({
    name: PropTypes.string,
    brief: PropTypes.string,
    link: PropTypes.string,
    tools: PropTypes.string,
    detailsEN: PropTypes.string,
    detailsRU: PropTypes.string,
    readme_link: PropTypes.string,
  }),
};

Project.defaultProps = {
  lang: '',
  project: {
    name: '',
    brief: '',
    link: '',
    tools: '',
    detailsEN: '',
    detailsRU: '',
    readme_link: '',
  },
};

export default Project;
