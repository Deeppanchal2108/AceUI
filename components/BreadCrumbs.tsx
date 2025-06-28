import React from 'react'
import Link from 'next/link'
function Breadcrumbs({componentName}:{componentName: string}) {
  return (
      <nav className="text-sm text-gray-400 ">
          <ol className="list-reset flex">
              <li>
                  <Link href="/" className="hover:text-white">Documentation</Link>
                  <span className="mx-2">{'>'}</span>
              </li>
              <li>
                  <Link href="/components" className="hover:text-white">Components</Link>
                  <span className="mx-2">{'>'}</span>
              </li>
              <li className="text-white">{componentName}</li>
          </ol>
      </nav>
  )
}

export default Breadcrumbs
