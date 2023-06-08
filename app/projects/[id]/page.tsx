'use client';

import { Project } from '@/app/common/types';
import { PROJECTS_DATA_LIST } from '../../common/constants';
import { PROJECTS_ICONS_LIST } from '../constants';

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  const routes = PROJECTS_DATA_LIST.map(({ id }) => ({ id }));
  return routes;
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const project: Project = PROJECTS_DATA_LIST.find(
    (project) => project.id === id
  )!;
  const Icon: any = PROJECTS_ICONS_LIST[id as keyof typeof PROJECTS_ICONS_LIST];

  const { title, shortDescription } = project;

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
