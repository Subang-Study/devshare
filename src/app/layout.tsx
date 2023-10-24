import './globals.css'
import Header from '@/components/ui/Header'
import Session from '@/utils/Session'
import ReactQueryProvider from '@/utils/ReactQueryProvider'
import RecoilProvider from '@/utils/RecoilProvider'
import ThemeControl from '@/utils/ThemeControl'
import Toast from '@/components/ui/Toast'
import { ReactNode } from 'react'

export const metadata = {
  title: 'DevShare',
  description: 'Sharing your Dev Profile',
}

interface IRootLayoutProps {
  children: ReactNode
  authModal: ReactNode
}

export default function RootLayout({ children, authModal }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body className="dark:bg-neutral-700">
        <RecoilProvider>
          <ThemeControl />
          <Session>
            <ReactQueryProvider>
              <Header />
              <div className="relative w-full max-w-4xl p-4 mx-auto">
                {children}
                {authModal}
              </div>
              <Toast />
            </ReactQueryProvider>
          </Session>
        </RecoilProvider>
      </body>
    </html>
  )
}
