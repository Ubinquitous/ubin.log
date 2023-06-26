interface PostType {
  comments_count: number;
  id: string;
  likes: number;
  short_description: string;
  thumbnail: string;
  title: string;
  updated_at: string;
  released_at: string;
  tags: string[];
}

export default PostType;
