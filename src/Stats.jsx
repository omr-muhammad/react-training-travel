export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">Start adding some items to your packinglist 🚀</p>
    );
  }
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.floor((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numItems === packedItems
          ? "You got everything! Ready to go! ✈"
          : `💼 You have ${numItems} item in your list, and you already packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
