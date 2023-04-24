/* eslint-disable-next-line import/no-unresolved */
import { SerializeOptions } from 'next-mdx-remote/dist/types'
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export const POSTS_DIR_PATH = path.join(process.cwd(), 'posts')
export const WORKS_DIR_PATH = path.join(process.cwd(), 'works')
export const { mdxOptions: MDX_OPTIONS }: SerializeOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
    format: 'mdx',
  },
}
