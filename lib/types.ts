export interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  party: string;
  status: string;
  tags: string[];
  images: string[];
}

// Constructor function to easily create projects
export function createProject(
  id: string,
  title: string,
  description: string,
  type: string,
  party: string,
  status: string,
  tags: string[],
  images: string[]
): Project {
  return {
    id,
    title,
    description,
    type,
    party,
    status,
    tags,
    images,
  };
}
