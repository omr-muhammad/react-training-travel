export default function Item({
  id,
  description,
  quantity,
  packed,
  deleteItem,
  toggleItem,
}) {
  const styles = {
    textDecoration: packed ? "line-through" : "",
  };
  return (
    <li>
      <input type="checkbox" value={packed} onChange={() => toggleItem(id)} />
      <span style={styles}>
        {quantity} {description}
      </span>
      <button onClick={() => deleteItem(id)}>❌</button>
    </li>
  );
}
