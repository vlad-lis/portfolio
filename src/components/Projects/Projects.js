import { projects } from '../../utils/staticContent';
import Project from '../Project/Project';

function Projects() {
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
              <Project project={project} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Projects;
