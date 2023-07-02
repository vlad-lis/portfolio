import PropTypes from 'prop-types';
import { useState } from 'react';
import { projectContent } from '../../utils/staticContent';

function Project({ project }) {
  const {
    detailsBtnMinus, detailsBtnPlus, detailsBtnText, github, tools, description,
  } = projectContent;
  const [expandedDetails, setExpandedDetails] = useState(false);
  const detailsClass = `project__details ${expandedDetails ? 'project__details_expanded' : ''}`;
  const detailsBtnSymbol = expandedDetails ? detailsBtnMinus : detailsBtnPlus;

  const toggleExpandedDetails = () => {
    setExpandedDetails(!expandedDetails);
  };

  return (
    <div className="project">
      <div className="project__container">
        <div className="project__info">
          <h4 className="project__name">{project.name}</h4>
          <p className="project__brief">{project.brief}</p>
          <button className="project__details-btn" onClick={toggleExpandedDetails}>
            <div className="project__details-btn-container">
              <p className="project__details-btn-text">{detailsBtnSymbol}</p>
              <p className="project__details-btn-text">{detailsBtnText}</p>
            </div>
          </button>
        </div>
        <a className="project__link" href={project.link} target='_blank' rel="noreferrer">
          {github}
          <div className="project__link-btn"></div>
        </a>
      </div>
      <div className={detailsClass}>
        <div className="project__details-text-container">
          <p className="project__details-heading">{tools}</p>
          <p className="project__details-text">{project.tools}</p>
        </div>
        <div className="project__details-text-container">
          <p className="project__details-heading">{description}</p>
          <p className="project__details-text">{project.details}</p>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
