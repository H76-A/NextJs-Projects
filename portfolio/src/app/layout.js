export const metadata = {
  title: 'Portfolio',
  description: 'Muhammad Anees Portfolio',
}

import Navbar from "@/components/navbar"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}</body>
    </html>
  )
}
