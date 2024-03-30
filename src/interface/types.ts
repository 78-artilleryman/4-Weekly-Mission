export interface LinkType {
  id: number;
  created_at: string;
  description: string;
  image_source: string;
  title: string;
  url: string;
}

export interface FoldersType {
  folder: {
    count: number;
    id: number;
    links: LinkType[];
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
  };
}

export interface FolderCategoryType {
  data: [
    {
      id: number;
      favorite: boolean;
      created_at: string;
      link: {
        count: number;
      };
      name: string;
      user_id: number;
    }
  ];
}

export interface UserType {
  data: [
    {
      auth_id: string;
      created_at: string;
      email: string;
      id: number;
      image_source: string;
      name: string;
    }
  ];
}
