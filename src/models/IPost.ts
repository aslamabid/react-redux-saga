export interface IPost {
  data: Post[];
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
