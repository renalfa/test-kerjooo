"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Pagination from "@/components/pagination";
import SearchBar from "@/components/search-bar";
import LoadingIndicator from "@/components/loading-indicator";
import PostList from "@/components/post-list";
import AddPostForm from "@/components/form";

import { AppDispatch, RootState } from "@/store/store";
import { addPost, fetchPosts } from "@/slices/postSlices";
import { filterPosts, getPaginatedPosts } from "@/utils/helper";

interface FormInput {
  title: string;
  body: string;
}

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );
  const { register, handleSubmit, reset, watch } = useForm<FormInput>();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    dispatch(addPost(data));
    reset();
    toast.success("Post added successfully!");
  };

  const isSubmitDisabled = !watch("title") || !watch("body");

  const filteredPosts = filterPosts(posts, searchTerm);

  const currentPosts = getPaginatedPosts(
    filteredPosts,
    currentPage,
    postsPerPage
  );

  // Reset page if search results change
  useEffect(() => {
    if (currentPage > Math.ceil(filteredPosts.length / postsPerPage)) {
      setCurrentPage(1);
    }
  }, [filteredPosts.length, currentPage, postsPerPage]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <div className="w-full max-w-4xl px-4 space-y-6 md:px-16">
      <h1 className="text-4xl font-bold text-center pt-10">
        My Simple Application
      </h1>
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#38435a] to-transparent"></div>
      <AddPostForm
        onSubmit={handleSubmit(onSubmit)}
        isSubmitDisabled={isSubmitDisabled}
        loading={loading}
        register={register}
      />

      <h2 className="text-3xl font-semibold text-center">List of posts</h2>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <PostList currentPosts={currentPosts} />

          <Pagination
            currentPage={currentPage}
            totalPosts={filteredPosts.length}
            postsPerPage={postsPerPage}
            paginate={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Home;
