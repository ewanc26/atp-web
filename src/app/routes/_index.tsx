import React from 'react';
import { json, MetaFunction, LoaderFunctionArgs } from '@remix-run/node';
import { getPosts, getProfile } from '../../atproto';
import { useLoaderData } from '@remix-run/react';
import { WhtwndBlogEntryView } from '../../types';
import { AppBskyActorDefs } from '@atproto/api';
import Markdown from 'react-markdown';

// Define the loader as an edge function
export const loader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const posts = await getPosts(undefined);
    const profile = await getProfile();

    // Filter and shorten the posts
    const postsFiltered = posts.filter(p => !p.content?.startsWith('NOT_LIVE'));
    const postsShortened = postsFiltered.map(p => {
      p.content = p.content?.slice(0, 300); // Limit content length
      return p;
    });

    return json({ posts: postsShortened, profile });
  } catch (error) {
    console.error("Error fetching posts or profile:", error);
    return json({ error: "Failed to fetch posts or profile" }, { status: 500 });
  }
};

// Specify that this is an edge function
export const config = {
  runtime: 'edge',
};

export const meta: MetaFunction = () => {
  return [
    { title: "Ewan's Corner" },
    {
      name: 'description',
      content: 'Blogging and poetry, maybe something serious too (probably not)',
    },
  ];
};

export default function Index() {
  const { posts, profile } = useLoaderData<{
    posts: WhtwndBlogEntryView[];
    profile: AppBskyActorDefs.ProfileViewDetailed;
  }>();

  // Handle cases where posts or profile data might be null
  if (!posts || !profile) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  return (
    <div className="container flex flex-col mx-auto pt-10 md:pt-20 pb-20 gap-10">
      <div className="flex-col text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-20 pb-4 md:pb-8">
          {profile ? (
            <img
              className="w-32 h-32 rounded-[25%]"
              src={profile.avatar}
              alt="Ewan's avatar"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
          )}
          <h1 className="text-5xl md:text-6xl font-bold">Hey, I'm Ewan! 👋</h1>
        </div>
        <p className="text-2xl text-300">British Gen-Z poet and programmer.</p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">blog posts</h2>
        <ul className="list-none">
          {posts
            ?.sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime(),
            )
            .map(post => <PostItem post={post} key={post.rkey} />)}
        </ul>
      </div>
    </div>
  );
}

function PostItem({ post }: { post: WhtwndBlogEntryView }) {
  return (
    <li>
      <div className="flex">
        <p>
          {new Date(post.createdAt).toLocaleDateString('en-GB', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
          })}
          &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
        </p>
        <a className="font-bold hover:underline" href={`/posts/${post.rkey}`}>
          <h3 className="text-xl"> {post.title}</h3>
        </a>
      </div>
    </li>
  );
}