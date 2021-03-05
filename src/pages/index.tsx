import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from 'contexts/auth-context'

export default function HomePage() {
  const { user, login } = useAuth()

  return (
    <main className="flex flex-col justify-start items-center w-full h-full text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-900">
      <article className="flex flex-col justify-center items-center w-full h-full pr-2 pl-2 w-full lg:max-w-xl xl:max-w-2xl">
        <h1 className="text-3xl font-bold">Web Clipboard 📋</h1>

        <section className="flex flex-col justify-start items-start mt-6">
          {!user && (
            <button
              onClick={login}
              className="p-2 pr-4 pl-4 font-bold text-white rounded dark:text-blue-900 bg-blue-600 dark:bg-blue-300"
            >
              Enter
            </button>
          )}
          {!!user && (
            <Link href="/app">
              <span className="cursor-pointer">Access the app</span>
            </Link>
          )}
          {!!user && <span>{user.name}</span>}
        </section>
      </article>
    </main>
  )
}
