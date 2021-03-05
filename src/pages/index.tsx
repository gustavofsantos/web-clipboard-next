import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from 'contexts/auth-context'

export default function HomePage() {
  const { user, login } = useAuth()

  return (
    <main className="w-full h-full bg-gray-50 dark:bg-gray-900">
      <header className="flex w-full">
        <nav className="flex">
          {!user && <button onClick={login}>Enter</button>}
          {!!user && <Link href="/app">App</Link>}
          {!!user && <span>{user.name}</span>}
        </nav>
      </header>
      <h1>Landing page</h1>
    </main>
  )
}
