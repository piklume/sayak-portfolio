import TextHeader from '../common/components/textHeader';
import ProjectsCarousel from './components/projectsCarousel';

export default function Projects() {
  return (
    <div className="mt-8 flex flex-col">
      <ProjectsCarousel />
      <TextHeader>Projects</TextHeader>
    </div>
  );
}
