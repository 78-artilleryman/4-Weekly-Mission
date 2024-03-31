export interface LinkType {
  id: number;

  created_at: string;
  /**
   * ISO 8601
   * @example 2023-06-04T14:38:28.719907+00:00
   */
  description: string;
  image_source: string;
  title: string;
  url: string;
  folder_id: number | null;
}

export interface FoldersType {
  count: number;
  id: number;
  links: LinkType[];
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
}

export interface FolderCategoryType {
  id: number;
  favorite: boolean;
  created_at: string;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

export interface UserType {
  auth_id: string;
  created_at: string;
  email: string;
  id: number;
  image_source: string;
  name: string;
}
