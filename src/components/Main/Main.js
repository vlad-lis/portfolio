import { projects } from '../../utils/staticContent';
import Project from '../Project/Project';

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <ul className="main__projects">
          {projects.map((project) => (
            <li className="main__project" key={project.id}>
              <Project project={project} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
