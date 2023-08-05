import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

//Styles
import '@/styles/globals.css'
import '@/styles/color-variables.css'

//Context
import ThemeProvider from "@/providers/ThemeProvider";
import {memo} from "react";

const nunito = Nunito_Sans({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Countries',
  description: 'countries nextjs app',
}

export default memo(function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
})
