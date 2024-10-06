import React from 'react';
import { json, MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import {useLoaderData} from '@remix-run/react'
import {AppBskyActorDefs} from '@atproto/api'


export const meta: MetaFunction = () => {
  return [
    { title: 'About Me' },
    {
      name: 'description',
      content: 'About Ewan, a British programmer and hobbyist poet.',
    },
  ];
};

const About: React.FC = () => {
    const { profile } = useLoaderData<{
        profile: AppBskyActorDefs.ProfileViewDetailed;
      }>();

    return (
      <div className="container flex flex-col mx-auto pt-10 md:pt-20 pb-20 gap-10">
        <h1 className="text-5xl font-bold">About Me</h1>
  
        <img
          className="rounded-lg mb-4"
          src={profile.avatar}  // Ensure profile is fetched correctly
          alt="Ewan's avatar"
        />
  
        <p>
          I am a British programmer and hobbyist poet. I was born in Spain and
          raised in the UK (I am of Anglo-Scottish heritage.)
        </p>
  
        <p>I enjoy many things, but these are my favourites:</p>
  
        <ul className="list-disc pl-5">
          <li>Writing poetry (who would've thought!)</li>
          <li>
            <Link to="https://en.wikipedia.org/wiki/Werewolf" className="underline">Lycanthropy</Link> 
            (you can thank CBBC's <Link to="https://en.wikipedia.org/wiki/Wolfblood" className="underline"> "Wolfblood"</Link> for that)
          </li>
          <li>Linguistics and language</li>
          <li>Doctor Who</li>
          <li>Gaming</li>
          <li>Steven Universe</li>
          <li>
            <Link to="https://en.wikipedia.org/wiki/Beastars" className="underline">BEASTARS</Link>
          </li>
          <li>
            <Link to="https://en.wikipedia.org/wiki/SCP_Foundation" className="underline">The SCP Foundation</Link>, 
            with my favourites being 
            <Link to="https://scp-wiki.wikidot.com/scp-999" className="underline"> [SCP-999]</Link>,  
            <Link to="https://scpfoundation.fandom.com/wiki/SCP-001_%27%27When_Day_Breaks%27%27" className="underline"> [SCP-001 "When Day Breaks"]</Link>, 
            <Link to="https://scp-wiki.wikidot.com/scp-4771" className="underline"> [SCP-4771]</Link> and 
            <Link to="https://scp-wiki.wikidot.com/scp-488-jp" className="underline"> [SCP-488-JP]</Link>.
          </li>
          <li>
            <Link to="https://aesthetics.fandom.com/wiki/Analog_Horror" className="underline">Analogue Horror</Link>, 
            specifically 
            <Link to="https://kane-pixels-backrooms.fandom.com/wiki/Kane_Pixels_Backrooms_Wiki" className="underline"> Kane Pixel's "Backrooms"</Link> 
            and 
            <Link to="https://www.visitliminalland.net/" className="underline"> Nexpo's "Liminal Land"</Link>.
          </li>
          <li>
            <Link to="https://en.wikipedia.org/wiki/Hazbin_Hotel" className="underline">Hazbin Hotel</Link> and 
            <Link to="https://en.wikipedia.org/wiki/Helluva_Boss" className="underline"> Helluva Boss</Link>.
          </li>
        </ul>
  
        <p>
          I also like <Link to="https://open.spotify.com/playlist/4Zc7Jo2VgPDQaDWbS9FIGi" className="underline">music</Link>!
        </p>
  
        <p>
          You can join me on 
          <Link to="https://bsky.social" className="underline"> Bluesky</Link> via 
          <Link to="https://go.bsky.app/EiZxzTpß" className="underline"> my starter pack</Link> or join me on 
          <Link to="https://joinmastodon.org" className="underline"> Mastodon</Link> using 
          <Link to="https://mastodon.social/invite/ekqbHMEc" className="underline"> my invite link.</Link>
        </p>
      </div>
    );
  };
  
// Export the About component as default
export default About;