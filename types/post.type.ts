interface PostType {
  name: string;
  image: string;
  contents: string;
  category: string[] | null;
  date: number;
}

export default PostType;
