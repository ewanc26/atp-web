import React from 'react';
import { json, MetaFunction, LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { AppBskyActorDefs } from '@atproto/api';
import { getProfile } from '../../atproto';

// export const loader = async ({ params }: LoaderFunctionArgs) => {
//  const profile = await getProfile();
//  return json({ profile });
// };

export const meta: MetaFunction = () => {
  return [
    { title: `About Me | Ewan's Corner` },
    {
      name: 'description',
      content: 'About Ewan, a British programmer and hobbyist poet.',
    },
  ];
};

export default function About() {
  const { profile } = useLoaderData<{
    profile: AppBskyActorDefs.ProfileViewDetailed;
  }>();

  return (
<div className="container flex flex-col mx-auto pt-10 md:pt-20 pb-20 gap-10">
  <h1 className="text-5xl font-bold">About Me</h1>

  <img
    className="w-50 h-50 rounded-[25%]"
    src={profile.avatar} // Ensure profile is fetched correctly
    alt="Ewan's avatar"
  />

<p>
  I am a British programmer and hobbyist poet. I was born in Spain and raised in the UK (I am of Anglo-Scottish heritage).
</p>
<p>I enjoy many things, but these are my favourites:</p>

<ul className="list-disc pl-5">
  <li>Writing poetry (who would've thought!)</li>
  <li>
    <a href="https://en.wikipedia.org/wiki/Werewolf" className="underline">Lycanthropy</a> (you can thank CBBC's <a href="https://en.wikipedia.org/wiki/Wolfblood" className="underline">"Wolfblood"</a> for that)
  </li>
  <li>Linguistics and language</li>
  <li>Doctor Who</li>
  <li>Gaming</li>
  <li>Steven Universe</li>
  <li>
    <a href="https://en.wikipedia.org/wiki/Beastars" className="underline">BEASTARS</a>
  </li>
  <li>
    <a href="https://en.wikipedia.org/wiki/Hazbin_Hotel" className="underline">Hazbin Hotel</a> and <a href="https://en.wikipedia.org/wiki/Helluva_Boss" className="underline">Helluva Boss</a>.
  </li>
</ul>

<p>
  I also like <a href="https://open.spotify.com/playlist/4Zc7Jo2VgPDQaDWbS9FIGi" className="underline">music</a>!
</p>

<p>
  You can join me on <a href="https://bsky.social" className="underline">Bluesky</a> via <a href="https://go.bsky.app/2yApAmz" className="underline">my starter pack</a> or join me on  <a href="https://joinmastodon.org" className="underline">Mastodon</a> using  <a href="https://mastodon.social/invite/ekqbHMEc" className="underline">my invite link.</a>
</p>
</div>
  );
}
