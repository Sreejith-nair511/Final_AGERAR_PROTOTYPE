import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ABC Blockchain Club | Citech",
  description: "Empowering decentralized innovation and blockchain literacy at Cambridge Institute of Technology",
  keywords: ["blockchain", "cryptocurrency", "web3", "education", "citech", "cambridge institute"],
  authors: [{ name: "ABC Blockchain Club" }],
  creator: "ABC Blockchain Club",
  publisher: "Cambridge Institute of Technology",
  openGraph: {
    title: "ABC Blockchain Club | Citech",
    description: "Empowering decentralized innovation and blockchain literacy",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABC Blockchain Club | Citech",
    description: "Empowering decentralized innovation and blockchain literacy",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'superman.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
