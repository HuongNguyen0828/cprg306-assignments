export default function Item({ name, quantity, category, onClicked }) {
  return (
    <ul onClick={onClicked}>
      <p className=" text-xl font-bold">{name}</p>
      <p>
        Buy {quantity} in {category}
      </p>
    </ul>
  );
}
