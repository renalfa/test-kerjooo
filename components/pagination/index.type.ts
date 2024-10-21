export interface Props {
  currentPage: number;
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}
