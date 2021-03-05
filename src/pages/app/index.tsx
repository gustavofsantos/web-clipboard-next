import { ClipboardCreateItem } from 'components/clipboard-create-item'
import { ClipboardItems } from 'components/clipboard-items'
import { useAuth } from 'contexts/auth-context'
import { useNotLoggedRedirect } from 'hooks/use-not-logged-redirect'
import Head from 'next/head'

export default function AppPage() {
  useNotLoggedRedirect()
  const { user } = useAuth()

  return (
    <>
      <Head>
        <title>{user?.displayName} | Clipboard</title>
      </Head>
      <main className="flex flex-col justify-start items-center w-full h-full text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-900">
        <article className="flex flex-col justify-start items-center pr-2 pl-2 w-full lg:max-w-xl xl:max-w-2xl">
          <div className="p-6" />
          <h1 className="text-3xl font-bold">Web Clipboard 📋</h1>

          <div className="p-6" />

          {!!user && <ClipboardCreateItem />}

          <div className="p-6" />

          {!!user && <ClipboardItems />}
        </article>
      </main>
    </>
  )
}
