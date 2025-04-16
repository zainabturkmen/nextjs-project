import Link from "next/link";
const DrinksList = ({ drinks }) => {
  return (
    <ul className="menu menu-vertical pl-0">
      {drinks.map((drink) => {
        return (
          <li key={drink.idDrink}>
            <Link href={`/drinks/${drink.idDrink}`}>{drink.strDrink}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DrinksList;
