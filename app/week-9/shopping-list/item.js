export default function Item({ id, name, quantity, category, onClicked }) {
  return (
    <div id={id} onClick={() => onClicked(name)}>
      <p className=" text-xl font-bold">{name}</p>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
