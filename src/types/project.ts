export type Project = {
  id: number;
  title: string;
  description: string;
  skills: string[];
  hoverImg: string;
  images: string[];
  url: {
    github: string;
    site: string;
  };
};
