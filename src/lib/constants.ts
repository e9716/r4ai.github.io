/* eslint-disable-next-line import/no-unresolved */
import { SerializeOptions } from 'next-mdx-remote/dist/types'
import path from 'path'
import rehypeAutolinkHeadings, { type Options as RehypeAutolinkOptions } from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeMermaid, { type RehypeMermaidOptions } from 'rehype-mermaidjs'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import tagsColorTable from '../../data/tags.json'

/* theme */
export const DEFAULT_THEME = 'system'

/* post */
export const DATA_DIR_PATH = path.join(process.cwd(), 'data')
export const POSTS_DIR_PATH = path.join(DATA_DIR_PATH, 'posts')
export const WORKS_DIR_PATH = path.join(DATA_DIR_PATH, 'works')

const rehypeMermaidOptions: RehypeMermaidOptions = {
  strategy: 'inline-svg',
}
const rehypeAutolinkHeadingsOptions: RehypeAutolinkOptions = {
  properties: {
    className: ['anchor'],
  },
}
export const { mdxOptions: MDX_OPTIONS }: SerializeOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeMermaid, rehypeMermaidOptions],
      rehypeCodeTitles,
      rehypePrism,
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
    ],
    format: 'mdx',
  },
}

export type Tags = {
  [key: string]: string
}
export const TAGS_COLOR_TABLE = tagsColorTable as Tags
