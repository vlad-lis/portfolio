import PropTypes from 'prop-types';
import { projects } from '../../utils/staticContent';
import Project from '../Project/Project';

function Projects({ lang }) {
  return (
    <main className='projects'>
      <div className='projects__container'>
        <ul className='projects__list'>
          {projects.map((project, index) => (
            <li
              className={`projects__project ${
                index === projects.length - 1 ? 'projects__project_last' : ''
              }`}
              key={project.id}
            >
              <Project lang={lang} project={project} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

Projects.propTypes = {
  lang: PropTypes.string,
};

Projects.defaultProps = {
  lang: '',
};

export default Projects;
