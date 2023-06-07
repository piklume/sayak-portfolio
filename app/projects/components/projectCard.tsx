'use client';

import { Project } from '@/app/common/types';
import { PROJECTS_ICONS_LIST } from '../constants';

export default function ProjectCard({ project }: { project: Project }) {
  const { id, title, shortDescription } = project;

  const Icon: any = PROJECTS_ICONS_LIST[id as keyof typeof PROJECTS_ICONS_LIST];

  return (
    <div className="w-fit h-auto max-w-xs py-2 pl-0 pr-1 border-2 rounded-xl font-sans bg-slate-50/30 text-slate-700 hover:shadow-inner">
      <div className="flex flex-row items-center">
        {Icon}
        <div className="basis-3/4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-base mt-2">{shortDescription}</p>
        </div>
      </div>
    </div>
  );
}
