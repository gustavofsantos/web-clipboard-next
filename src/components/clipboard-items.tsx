import { useClipboardDelete } from 'hooks/use-clipboard-delete'
import { useClipboardItems } from 'hooks/use-clipboard-items'
import { ClipboardItem } from 'types/clipboard'

export function ClipboardItems() {
  const items = useClipboardItems()

  return (
    <section className="w-full">
      {items.isLoading && <span>Loading</span>}
      {items.isSuccess && !items.data.length && <span>No items yet!</span>}
      {items.isSuccess && !!items.data.length && (
        <ul className="w-full divide-y divide-gray-200 dark:divide-gray-800">
          {items.data.map((item) => (
            <li
              key={item._id}
              className="flex justify-start items-center pt-2 pb-2 w-full"
            >
              <ClipboardListItem item={item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function ClipboardListItem({ item }: { item: ClipboardItem }) {
  const mutation = useClipboardDelete()

  const handleDelete = () => {
    mutation.mutate({ _id: item._id })
  }

  return (
    <div className="flex items-center w-full">
      <p className="font-bold text-lg w-10/12">{item.value}</p>
      <button className="w-2/12" onClick={handleDelete}>
        x
      </button>
    </div>
  )
}
