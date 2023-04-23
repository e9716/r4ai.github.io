import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export const POSTS_DIR_PATH = path.join(process.cwd(), 'posts')

export const postFilePaths = fs.readdirSync(POSTS_DIR_PATH).filter((path) => /\.mdx?$/.test(path))

export async function getPostData(slug: string | string[] | undefined) {
  const fullPath = path.join(POSTS_DIR_PATH, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  // data is the frontmatter (title, date, etc.)
  // content is the rest of the file (the markdown)
  const { content, data } = matter(fileContents)

  const source = await serialize(content, {
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
    scope: data,
  })

  return { source, frontMatter: data }
}
