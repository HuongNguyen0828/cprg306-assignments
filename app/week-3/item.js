export default function Item({name, quantity, category})
{
    return (
        <ul>
            <li>{name}</li>
            <li>{quantity}</li>
            <li>{category}</li>
        </ul>
    );
}
