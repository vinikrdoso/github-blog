import { Link } from 'react-router-dom'

export function Header() {
  return (
    <div>
      <Link to="/">
        <div
          className="h-[296px]
          bg-[url('/src/assets/cover.png')] bg-cover bg-center bg-no-repeat
        "
        ></div>
      </Link>
    </div>
  )
}
