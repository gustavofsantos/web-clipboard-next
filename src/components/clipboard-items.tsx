import { useClipboardItems } from 'hooks/use-clipboard-items'

export function ClipboardItems() {
  const items = useClipboardItems()

  return (
    <section className="w-full">
      {items.isLoading && <span>Loading</span>}
      {items.isSuccess && !items.data.length && <span>No items yet!</span>}
      {items.isSuccess && !!items.data.length && (
        <ul className="w-full space-y-2">
          {items.data.map((item) => (
            <li key={item._id}>
              <p className="font-bold text-lg">{item.value}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
