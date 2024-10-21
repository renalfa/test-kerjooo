export const filterPosts = (posts: Array<any>, searchTerm: string) =>
  posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

export const getPaginatedPosts = (
  filteredPosts: Array<any>,
  currentPage: number,
  postsPerPage: number
) => {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
};
