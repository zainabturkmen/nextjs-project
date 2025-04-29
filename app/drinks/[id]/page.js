import Link from "next/link";
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
import drinkImage from "./drink.jpg";

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Faild to fetch a drink....");
  }
  return res.json();
};

const SingleDrinksPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  console.log(title, imgSrc);

  return (
    <div className="ml-12">
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Back to drinks
      </Link>

      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        alt={title}
      />
      {/* <Image src={drinkImage} className="w-48 h-48 rounded-lg" alt="drinky" /> */}
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default SingleDrinksPage;
