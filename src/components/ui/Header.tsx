import Logo from './Logo'
import UserMenu from '../auth/UserMenu'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-row items-center justify-between h-12 px-2 bg-white border-b dark:bg-neutral-700">
      <Logo />
      <UserMenu />
    </header>
  )
}
