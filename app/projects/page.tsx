import TextHeader from '../common/components/textHeader';
import { PROJECTS_DATA_LIST } from '../common/constants';
import ProjectCard from './components/projectCard';
import ProjectsCarousel from './components/projectsCarousel';

export default function Projects() {
  return (
    <div className="container mx-auto mt-8 flex flex-col items-center max-w-screen-lg">
      <ProjectsCarousel />
      <TextHeader>Projects</TextHeader>
      <div className="flex items-stretch gap-4 flex-col md:flex-row">
        {PROJECTS_DATA_LIST.map(({ name, title, shortDescription }) => (
          <ProjectCard key={name} title={title} content={shortDescription} />
        ))}
      </div>
    </div>
  );
}
