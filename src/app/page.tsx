import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/login">
        <div>login</div>
      </Link>
      <Link href="/contact">
        <div>Contact</div>
      </Link>
    </div>
  )
}
