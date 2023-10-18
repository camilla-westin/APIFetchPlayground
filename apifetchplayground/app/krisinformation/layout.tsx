export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100">
        {children}
    </main>
  )
}
