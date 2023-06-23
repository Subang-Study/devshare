import Logo from '../client/Logo'
import UserMenu from '../client/auth/UserMenu'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-row items-center justify-between h-12 px-2 bg-white border-b-2">
      <Logo />
      <UserMenu />
    </header>
  )
}
