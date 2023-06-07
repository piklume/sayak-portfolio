export type Project = {
  id: string;
  name: string;
  path: string;
  title: string;
  shortDescription: string;
  liveLink?: string | undefined;
  sourceFE?: string | undefined;
  sourceBE?: string | undefined;
};

export type Projects = Project[];
