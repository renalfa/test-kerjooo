import { FC } from "react";

import CardPost from "@/components/card-post";

import { Props } from "./index.type";

const PostList: FC<Props> = ({ currentPosts }) => (
  <ul className="flex flex-col gap-3">
    {currentPosts.map((post, index) => (
      <CardPost key={index} title={post.title} body={post.body} />
    ))}
  </ul>
);

export default PostList;
