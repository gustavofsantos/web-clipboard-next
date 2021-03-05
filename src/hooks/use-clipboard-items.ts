import { useAuth } from 'contexts/auth-context'
import { useQuery } from 'react-query'
import { ClipboardItem } from 'types/clipboard'

export function useClipboardItems() {
  const { user } = useAuth()
  const userId = user.uid

  return useQuery(
    'clipboardItems',
    (): Promise<ClipboardItem[]> =>
      fetch('/api/list', {
        headers: {
          'x-userid': userId
        }
      }).then((res) => res.json())
  )
}
