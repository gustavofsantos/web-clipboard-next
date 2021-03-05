import { ClipboardCreateItem } from 'components/clipboard-create-item'
import { ClipboardItems } from 'components/clipboard-items'
import { useAuth } from 'contexts/auth-context'
import { useNotLoggedRedirect } from 'hooks/use-not-logged-redirect'

export default function AppPage() {
  useNotLoggedRedirect()
  const { user } = useAuth()

  return (
    <main>
      <h1>App page</h1>

      <section>{!!user && <ClipboardCreateItem />}</section>

      {!!user && <ClipboardItems />}
    </main>
  )
}
