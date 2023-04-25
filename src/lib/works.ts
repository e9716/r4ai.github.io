import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'

import { MDX_OPTIONS, WORKS_DIR_PATH } from './constants'

export interface worksFrontMatterType {
  title: string
  date: string
  description: string
  progress: 'working' | 'maintenance' | 'done'
  tags: string[]
  image: string
  github: string
}

export function isWorksFrontMatterType(data: unknown): data is worksFrontMatterType {
  return (
    data != null &&
    typeof data === 'object' &&
    'title' in data &&
    'date' in data &&
    'description' in data &&
    'progress' in data &&
    'tags' in data &&
    'image' in data &&
    'github' in data &&
    typeof data.title === 'string' &&
    typeof data.date === 'string' &&
    typeof data.description === 'string' &&
    (data.progress === 'working' || data.progress === 'done' || data.progress === 'maintenance') &&
    Array.isArray(data.tags) &&
    data.tags.every((tag) => typeof tag === 'string') &&
    typeof data.github === 'string'
  )
}

export const postFilePaths = fs.readdirSync(WORKS_DIR_PATH).filter((path) => /\.mdx?$/.test(path))

function getFullPathFromSlug(slug: string) {
  const fullPath = ['md', 'mdx']
    .map((ext) => path.join(WORKS_DIR_PATH, `${slug}.${ext}`))
    .find((path) => fs.existsSync(path))
  if (!fullPath) {
    throw new Error(`Could not find post ${slug}`)
  }
  return fullPath
}

export async function getWorksData(slug: string) {
  const fullPath = getFullPathFromSlug(slug)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { content, data } = matter(fileContents)
  const source = await serialize(content, {
    mdxOptions: MDX_OPTIONS,
    scope: data,
  })
  return { source, frontMatter: data }
}

export function getAllWorksSlugs() {
  return postFilePaths.map((path) => path.replace(/\.mdx?$/, '')).map((slug) => ({ params: { slug } }))
}

export interface SortedWorksDataType {
  slug: string
  frontMatter: worksFrontMatterType
}

export async function getSortedWorksData(): Promise<SortedWorksDataType[]> {
  const slugs = getAllWorksSlugs()
  const posts = slugs.map(async (slug) => {
    const _slug = slug.params.slug
    const { frontMatter } = await getWorksData(_slug)
    if (!isWorksFrontMatterType(frontMatter)) {
      throw new Error(`Invalid frontmatter for post ${_slug}`)
    }
    return { slug: _slug, frontMatter }
  })
  return (await Promise.all(posts)).sort((a, b) => (a.frontMatter.date > b.frontMatter.date ? -1 : 1))
}
