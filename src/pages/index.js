import { Fragment } from "react";
import Head from "next/head";
import Hero from "../../components/home-page/hero";
import FeaturedPosts from "../../components/home-page/featured-posts";

import {getFeaturedPosts} from '../../lib/post-util' 

const Dummy_posts = [
  {
    title:"Getting Started With NextJs",
    image:"getting-started-nextjs.png",
    excerpt:"next js is the react framework",
    date:"22-02-10",
    slug:"getting-started-nextjs"
  },
  {
    title:"Getting Started With NextJs",
    image:"getting-started-nextjs.png",
    excerpt:"next js is the react framework",
    date:"22-02-10",
    slug:"getting-started-nextjs"
  },
  {
    title:"Getting Started With NextJs",
    image:"getting-started-nextjs.png",
    excerpt:"next js is the react framework",
    date:"22-02-10",
    slug:"getting-started-nextjs"
  },
  {
    title:"Getting Started With NextJs",
    image:"getting-started-nextjs.png",
    excerpt:"next js is the react framework",
    date:"22-02-10",
    slug:"getting-started-nextjs"
  },
  {
    title:"Getting Started With NextJs",
    image:"getting-started-nextjs.png",
    excerpt:"next js is the react framework",
    date:"22-02-10",
    slug:"getting-started-nextjs"
  },
  {
    title:"Getting Started With NextJs",
    image:"getting-started-nextjs.png",
    excerpt:"next js is the react framework",
    date:"22-02-10",
    slug:"getting-started-nextjs"
  }
];

const Homepage = (props) => {
  return <Fragment>
    <Head>
      <title>Welcome to my Blog</title>
      <meta name="description" content="I post about programing and test development" />
    </Head>
    <Hero />
    <FeaturedPosts posts={props.posts}  />
  </Fragment>
};

export const getStaticProps = async() => {
  const featuredPosts = getFeaturedPosts();
  console.log(featuredPosts,"featuredPosts");
  return {
    props:{
      posts: featuredPosts
    },
    revalidate: 100
  }
}

export default Homepage