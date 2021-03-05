import { ClipboardCreateItem } from 'components/clipboard-create-item'
import { ClipboardItems } from 'components/clipboard-items'
import { useAuth } from 'contexts/auth-context'
import { useNotLoggedRedirect } from 'hooks/use-not-logged-redirect'

export default function AppPage() {
  useNotLoggedRedirect()
  const { user } = useAuth()

  return (
    <main className="flex flex-col justify-start items-center">
      <article className="flex flex-col justify-start items-center pr-2 pl-2 w-full lg:max-w-xl xl:max-w-2xl">
        <div className="p-6" />
        <h1 className="text-3xl font-bold">Web Clipboard 📋</h1>

        <div className="p-6" />

        {!!user && <ClipboardCreateItem />}

        <div className="p-6" />

        {!!user && <ClipboardItems />}
      </article>
    </main>
  )
}
