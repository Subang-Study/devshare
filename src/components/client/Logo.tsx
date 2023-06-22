import Link from 'next/link'
import { K2D } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

const k2d = K2D({ weight: '500', subsets: ['latin'] })

export default async function Logo() {
  const session = await getServerSession(authOptions)

  return (
    <div className={`${k2d.className} flex items-center justify-center gap-0.5 h-12`}>
      <Link href="/" className="flex items-center h-full">
        <svg className="w-auto h-5/6" viewBox="0 0 44 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M31.2479 22.4091L39.3502 30.5113V14.3068L31.2479 22.4091ZM31.2479 1.78511L43.033 13.5702V31.2479L25.3554 48.9256C24.574 49.707 23.5141 50.146 22.4091 50.146C21.304 50.146 20.2442 49.707 19.4628 48.9256L1.78513 31.2479C1.00373 30.4665 0.564745 29.4067 0.564745 28.3016C0.564745 27.1965 1.00373 26.1367 1.78513 25.3553L25.3554 1.78511C26.9905 0.14993 29.6127 0.14993 31.2479 1.78511ZM16.5165 40.0867L17.9897 38.6136C19.9489 36.6543 17.0027 31.734 15.0434 29.7748C13.0841 27.8155 8.16383 24.8692 6.20455 26.8285L4.73141 28.3016L16.5165 40.0867ZM22.4091 22.4091C21.6277 21.6277 20.5679 21.1887 19.4628 21.1887C18.3577 21.1887 17.2979 21.6277 16.5165 22.4091C15.7351 23.1905 15.2961 24.2503 15.2961 25.3553C15.2961 26.4604 15.7351 27.5202 16.5165 28.3016C17.2979 29.083 18.3577 29.522 19.4628 29.522C20.5679 29.522 21.6277 29.083 22.4091 28.3016C23.1905 27.5202 23.6295 26.4604 23.6295 25.3553C23.6295 24.2503 23.1905 23.1905 22.4091 22.4091Z"
            fill="#000"
          />
        </svg>
      </Link>

      <Link href="/" className="text-[1.75rem] font-medium">
        Dev
        <span className="inline font-medium text-blue-600">{'{'}</span>
        {session ? ` ${session.user?.name} ` : ' Share '}
        <span className="inline font-medium text-blue-600">{'}'}</span>
      </Link>
    </div>
  )
}
