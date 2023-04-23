import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export interface postFrontMatterType {
  title: string
  date: string
  description: string
}

export function isPostFrontMatterType(data: unknown): data is postFrontMatterType {
  return (
    data != null &&
    typeof data === 'object' &&
    'title' in data &&
    'date' in data &&
    'description' in data &&
    typeof data.title === 'string' &&
    typeof data.date === 'string' &&
    typeof data.description === 'string'
  )
}

/*
  /posts directory path
 */
export const POSTS_DIR_PATH = path.join(process.cwd(), 'posts')

/*
  /posts.{md,mdx} file names with extension
  e.g. ['hello-world.md', 'nextjs.mdx']
 */
export const postFilePaths = fs.readdirSync(POSTS_DIR_PATH).filter((path) => /\.mdx?$/.test(path))

function getFullPathFromSlug(slug: string) {
  const fullPath = ['md', 'mdx']
    .map((ext) => path.join(POSTS_DIR_PATH, `${slug}.${ext}`))
    .find((path) => fs.existsSync(path))
  if (!fullPath) {
    throw new Error(`Could not find post ${slug}`)
  }
  return fullPath
}

export async function getPostData(slug: string) {
  const fullPath = getFullPathFromSlug(slug)

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

export interface SortedPostDataType {
  slug: string
  frontMatter: postFrontMatterType
}
export async function getSortedPostDatas(): Promise<SortedPostDataType[]> {
  const slugs = getAllPostSlugs()
  const posts = slugs.map(async (slug) => {
    const _slug = slug.params.slug
    const { frontMatter } = await getPostData(_slug)
    if (!isPostFrontMatterType(frontMatter)) {
      throw new Error(`Invalid frontmatter for ${_slug}`)
    }
    return { slug: _slug, frontMatter }
  })
  return (await Promise.all(posts)).sort((a, b) => (a.frontMatter.date > b.frontMatter.date ? -1 : 1))
}

/*
  Returns an array of objects with the slug as a param
  e.g. [{ params: { slug: 'hello-world' } }, { params: { slug: 'nextjs' } }]
  */
export function getAllPostSlugs() {
  return postFilePaths.map((path) => path.replace(/\.mdx?$/, '')).map((slug) => ({ params: { slug } }))
}
