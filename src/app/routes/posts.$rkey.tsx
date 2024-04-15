import React from 'react'
import {useLoaderData} from '@remix-run/react'
import Markdown, {Components} from 'react-markdown'
import {WhtwndBlogEntryView} from '../../types'
import {getPost} from '../../atproto'
import {json, LoaderFunctionArgs, MetaFunction} from '@remix-run/node'
import {Link} from '../components/link'

export const loader = async ({params}: LoaderFunctionArgs) => {
  const {rkey} = params
  const post = await getPost(rkey!)
  return json({post})
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [
    {title: `${data?.post.title} | Hailey's Cool Site`},
    {
      name: 'description',
      content: `${data?.post.content?.split(' ').slice(0, 100).join(' ')}...`,
    },
    {
      name: 'og:title',
      content: `${data?.post.title}`,
    },
    {
      name: 'og:description',
      content: `${data?.post.content?.split(' ').slice(0, 100).join(' ')}...`,
    },
    ...(data?.post.banner && data?.post.banner !== ''
      ? [
          {
            name: 'og:image',
            content: `${data?.post.banner}`,
          },
        ]
      : []),
  ]
}
export default function Posts() {
  const {post} = useLoaderData<{post: WhtwndBlogEntryView}>()

  if (!post) {
    return <Error />
  }

  return (
    <div className="container mx-auto pt-10 md:pt-20 pb-20">
      <h1 className="text-5xl md:text-6xl font-bold text-center">
        {post.title}
      </h1>
      <div className="py-4 md:py-8" />
      <div>
        <Markdown components={markdownComponents}>{post.content}</Markdown>
      </div>
    </div>
  )
}

function Error() {
  return (
    <div className="container mx-auto pt-10 md:pt-20 pb-20">
      <h1 className="text-5xl md:text-6xl font-bold text-center">
        Uh...something went wrong.
      </h1>
      <div className="p-10">
        <img
          src="/monkey.jpg"
          alt="Monkey muppet meme image"
          className="rounded-md"
        />
      </div>
    </div>
  )
}

const markdownComponents: Partial<Components> = {
  h1: ({children}) => (
    <>
      <h1 className="text-3xl md:text-4xl font-bold">{children}</h1>
      <div className="w-full h-1 bg-theme-300 my-2"></div>
    </>
  ),
  h2: ({children}) => (
    <>
      <h2 className="text-2xl md:text-3xl font-bold pt-6">{children}</h2>
      <div className="w-full h-1 bg-theme-300 my-2"></div>
    </>
  ),
  h3: ({children}) => (
    <h3 className="text-xl md:text-2xl font-bold pt-4">{children}</h3>
  ),
  h4: ({children}) => (
    <h4 className="text-lg md:text-xl font-bold pt-4">{children}</h4>
  ),
  h5: ({children}) => (
    <h5 className="text-base md:text-lg font-bold pt-4">{children}</h5>
  ),
  p: ({children}) => (
    <p className="py-2 text-xl text-theme-white">{children}</p>
  ),
  a: ({children, href}) => <Link href={href as string}>{children}</Link>,
  ul: ({children}) => <ul className="list-disc pl-4">{children}</ul>,
  ol: ({children}) => <ol className="list-decimal pl-4">{children}</ol>,
  li: ({children}) => <li className="py-1">{children}</li>,
  blockquote: ({children}) => (
    <blockquote className="border-l-4 border-theme-300 my-3 pl-4 py-1">
      {children}
    </blockquote>
  ),
  code: ({children}) => (
    <code className="bg-theme-900 px-1 rounded-md">{children}</code>
  ),
  pre: ({children}) => (
    <pre className="bg-theme-900 p-2 rounded-md overflow-x-auto my-4">
      {children}
    </pre>
  ),
  img: ({src, alt}) => (
    <div className="flex justify-center p-6">
      <img src={src as string} alt={alt as string} className="rounded-md" />
    </div>
  ),
  hr: () => <hr className="my-4" />,
  table: ({children}) => (
    <table className="table-auto w-full">{children}</table>
  ),
  thead: ({children}) => <thead className="bg-theme-100">{children}</thead>,
  tbody: ({children}) => <tbody>{children}</tbody>,
  tr: ({children}) => <tr>{children}</tr>,
  th: ({children}) => (
    <th className="border border-theme-300 p-2">{children}</th>
  ),
  td: ({children}) => (
    <td className="border border-theme-300 p-2">{children}</td>
  ),
  strong: ({children}) => <strong className="font-bold">{children}</strong>,
  em: ({children}) => <em className="italic">{children}</em>,
  del: ({children}) => <del>{children}</del>,
  br: () => <br />,
}
