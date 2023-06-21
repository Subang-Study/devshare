import Logo from "../client/Logo"

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between px-2 border-b-2">
      <Logo isLogin={false} />
    </header>
  )
}