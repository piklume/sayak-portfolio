'use client';

import Image from 'next/image';
import { Carousel } from 'antd';

const PROJECT_IMAGE_LIST = [
  {
    name: 'Crown Clothing',
    path: '/crwnclothing.png',
  },
  {
    name: 'Magic Brain',
    path: '/magicbrain.png',
  },
];

const ProjectsCarousel: React.FC = () => (
  <div className="container mx-auto">
    <Carousel>
      {PROJECT_IMAGE_LIST.map(({ name, path }) => (
        <div key={name} className="h-52 md:h-96">
          <Image
            src={path}
            width={700}
            height={500}
            alt={name}
            className='max-h-96 mx-auto border-0 rounded-md shadow-lg'
          />
        </div>
      ))}
    </Carousel>
  </div>
);

export default ProjectsCarousel;
