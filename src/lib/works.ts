import fs from 'fs'
import path from 'path'

export const WORKS_DIR_PATH = path.join(process.cwd(), 'src', 'pages', 'works')
export const worksFilePaths = fs
  .readdirSync(WORKS_DIR_PATH)
  .filter((path) => /\.(mdx|tsx)$/.test(path) && path !== 'index.tsx')
