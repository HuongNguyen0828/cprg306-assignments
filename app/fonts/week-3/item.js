export default function Item(name, quantity, category)
{
    return (
        <ul>
            <li>Name: {name}</li>
            <li>Quantity: {quantity}</li>
            <li>Category: {category}</li>
        </ul>
    );
}
