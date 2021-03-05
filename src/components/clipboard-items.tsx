import { useClipboardItems } from 'hooks/use-clipboard-items'

export function ClipboardItems() {
  const items = useClipboardItems()

  return (
    <section>
      {items.isLoading && <span>Loading</span>}
      {items.isSuccess && !items.data.length && <span>No items yet!</span>}
      {items.isSuccess && !!items.data.length && (
        <ul>
          {items.data.map((item) => (
            <li key={item.id}>
              <div>{item.value}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
