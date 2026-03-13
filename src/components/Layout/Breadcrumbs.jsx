import { Link, useLocation } from 'react-router-dom'

export function Breadcrumbs() {
  const location = useLocation()
  const paths = location.pathname.split('/').filter(Boolean)

  return (
    <nav className="px-6 py-2 fs-6 text-secondary">
      <Link to="/">Home</Link>

      {paths.map((path, index) => {
        const routeTo = '/' + paths.slice(0, index + 1).join('/')
        return (
          <span key={routeTo}>
            {' / '}
            <Link to={routeTo} className="capitalize">
              {path}
            </Link>
          </span>
        )
      })}
    </nav>
  )
}
