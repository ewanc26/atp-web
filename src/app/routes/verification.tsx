import React from 'react';
import { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Verification' },
    {
      name: 'description',
      content: 'Verify my online presence.',
    },
  ];
};

const Verification: React.FC = () => {
  return (
    <div className="container flex flex-col mx-auto pt-10 md:pt-20 pb-20 gap-10">
      <h1 className="text-5xl font-bold">Verification</h1>

      <p>
        This page serves as the system of record for my online identity. I control the following personal accounts, however, this list is <strong>not</strong> exhaustive.
      </p>

      <h2 className="text-3xl font-semibold mt-6">Accounts</h2>

      <h3 className="text-2xl font-semibold mt-4">Social Media</h3>
      <ul className="list-disc pl-5">
        <li>
          Bluesky: <Link to="https://bsky.app/profile/did:plc:ofrbh253gwicbkc5nktqepol" className="underline">@ewancroft.uk</Link>
        </li>
        <li>
          Mastodon: <Link to="https://mastodon.social/@ewanc26" className="underline">@ewanc26@mastodon.social</Link>
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-4">Bluesky Accounts</h3>
      <p>
        As Bluesky (and by extension, <Link to="https://atproto.com" className="underline">ATProto</Link>) use apex (main) domains and subdomains as the username (or "handle") and require access to the domain to register. As such, please disregard any account that does not have <code>*.ewancroft.uk</code> in the username.
      </p>
      <p>
        As stated above, <Link to="https://bsky.app/profile/did:plc:ofrbh253gwicbkc5nktqepol" className="underline">@ewancroft.uk</Link> is my Bluesky account with <Link to="https://fed.brid.gy/bsky/ewancroft.uk" className="underline">@ewancroft.uk@bsky.brid.gy</Link> being the same account bridged over to the Fediverse with <Link to="https://fed.brid.gy" className="underline">BridgyFed</Link>.
      </p>

      <h4 className="text-xl font-semibold mt-4">Bot Accounts</h4>
      <p>
        I will <em>always</em> put my Bluesky bot accounts on a <code>*.bot.ewancroft.uk</code> subdomain with the source code on GitHub.
      </p>
      <h3 className="text-2xl font-semibold mt-4">Development</h3>
      <p>
        GitHub: <Link to="https://github.com/ewanc26" className="underline">ewanc26</Link>
      </p>

      <h2 className="text-3xl font-semibold mt-6">Domains</h2>
      <p>
        I <strong>only</strong> own and control <Link to="/" className="underline">this website</Link>, and as such, any subdomains under the apex (main) domain should be regarded as controlled by me.
      </p>

      <h2 className="text-3xl font-semibold mt-6">Miscellaneous</h2>

      <h3 className="text-2xl font-semibold mt-4">Active Accounts</h3>
      <p>
        I will <strong>never</strong> try to give you crypto trading tips. If an account claims to be me and is doing that, I have either:
      </p>
      <ol className="list-decimal pl-5">
        <li>Been hacked, report the account and ignore it.</li>
        <li>Been <Link to="https://www.dlnews.com/articles/defi/twitters-impersonation-problem-is-about-more-than-just-crypto-scams/" className="underline">impersonated</Link>.</li>
        <li>Lost my integrity.</li>
      </ol>

      <h3 className="text-2xl font-semibold mt-4">Inactive Accounts</h3>
      <p>
        The accounts that are inactive (particularly on the Fediverse) and look to be mine should be regarded with suspicion regardless. This should go without saying, really.
      </p>
    </div>
  );
};

// Export the Verification component as default
export default Verification;