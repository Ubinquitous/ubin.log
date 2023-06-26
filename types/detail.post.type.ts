interface DetailPostType {
  id: string;
  title: string;
  released_at: string;
  updated_at: string;
  tags: string[];
  body: string;
  short_description: string;
  is_markdown: true;
  is_private: false;
  is_temp: false;
  thumbnail: string;
  comments_count: number;
  url_slug: string;
  likes: number;
  liked: true;
  user: {
    id: string;
    username: string;
    profile: {
      id: string;
      display_name: string;
      thumbnail: string;
      short_bio: string;
      profile_links: {
        email: string;
        github: string;
      };
      __typename: string;
    };
    velog_config: {
      title: string;
      __typename: string;
    };
    __typename: string;
  };
  comments: [];
  series: null;
  linked_posts: {
    previous: {
      id: string;
      title: string;
      url_slug: string;
      user: {
        id: string;
        username: string;
        __typename: string;
      };
      __typename: string;
    };
    next: {
      id: string;
      title: string;
      url_slug: string;
      user: {
        id: string;
        username: string;
        __typename: string;
      };
      __typename: string;
    };
    __typename: string;
  };
}

export default DetailPostType;
