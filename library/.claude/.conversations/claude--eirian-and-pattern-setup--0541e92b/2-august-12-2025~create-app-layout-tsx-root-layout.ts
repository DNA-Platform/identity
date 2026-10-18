// src/app/layout.tsx
export const metadata = {
  title: 'DNA-Patternity',
  description: 'Pattern generation with WASM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}