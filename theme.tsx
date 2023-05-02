import type { NextraThemeLayoutProps } from 'nextra'
import Link from 'next/link'

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const {
    pageMap,
  } = pageOpts

  return (
    <div>
      <h1>My Theme</h1>
      {pageMap.map((item) => {
        if (item.kind === 'MdxPage') {
          return (
            <Link key={item.name} href={item.route}>
              {item.route}
            </Link>
          )
        } else if (item.kind === 'Folder') {
        }
        return null
      })}
      <div style={{ border: '1px solid' }}>{children}</div>
    </div>
  )
}
