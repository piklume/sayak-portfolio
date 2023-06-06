import TextHeader from '../common/components/textHeader';
import { PROJECTS_DATA_LIST } from '../common/constants';
import ProjectCard from './components/projectCard';
import ProjectsCarousel from './components/projectsCarousel';

export default function Projects() {
  return (
    <div className="mt-8 flex flex-col">
      <ProjectsCarousel />
      <TextHeader>Projects</TextHeader>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        {PROJECTS_DATA_LIST.map(({ name, title, shortDescription }) => (
          <ProjectCard key={name} title={title} content={shortDescription} />
        ))}
      </div>
    </div>
  );
}
