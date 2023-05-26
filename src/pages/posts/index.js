import { Fragment } from "react";
import Head from "next/head";
import AllPosts from "../../../components/posts/all-post";

import { getAllPosts } from "../../../lib/post-util";

const AllPostPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="My list of all posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostPage;
