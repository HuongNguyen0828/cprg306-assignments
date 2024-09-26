export default function Item({name, quantity, category})
{
    return (
        <ul>
            <p className=" text-xl font-bold">{name}</p>
            <p>Buy {quantity} in {category}</p>
        </ul>
    );
}
