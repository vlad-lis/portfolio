import PropTypes from 'prop-types';
import { useState } from 'react';
import { projectContent } from '../../utils/staticContent';

function Project({ project }) {
  const [expandedDetails, setExpandedDetails] = useState(false);
  const detailsClass = expandedDetails ? 'project__details' : 'project__details project__details_collapsed';
  const detailsBtnText = expandedDetails ? projectContent.detailsExpanded : projectContent.detailsCollapsed;

  const toggleExpandedDetails = () => {
    setExpandedDetails(!expandedDetails);
  };

  return (
    <div className="project">
      <div className="project__container">
        <div className="project__info">
          <h4 className="project__name">{project.name}</h4>
          <p className="project__brief">{project.brief}</p>
          <button className="project__details-btn" onClick={toggleExpandedDetails}>{detailsBtnText}</button>
        </div>
        <a className="project__link" href={project.link} target='_blank' rel="noreferrer">
          {projectContent.github}
          <div className="project__link-btn"></div>
        </a>
      </div>
      <p className={detailsClass}>{projectContent.tools} {project.tools}</p>
      <p className={detailsClass}>{project.details}</p>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
