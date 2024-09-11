import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Mikrobot - Login',
   description: 'Login to Mikrobot.',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <div className="relative bg-white">
         {children}
      </div>
   )
}