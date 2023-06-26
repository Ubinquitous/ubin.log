import PostType from "./post.type";

interface HomePropsType {
  categories: {
    data: {
      userTags: {
        tags: {
          id: string;
          name: string;
          post_counts: number;
        }[];
      };
    };
  };
  posts: {
    data: {
      posts: {
        comments_count: number;
        id: string;
        likes: number;
        short_description: string;
        thumbnail: string;
        title: string;
        updated_at: string;
        released_at: string;
        tags: string[];
      }[];
    };
  };
}

export default HomePropsType;
