import Link from "next/link";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Faild to fetch a drink....");
  }
};

const SingleDrinksPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  console.log(data);

  return <div>SingleDrinksPage</div>;
};

export default SingleDrinksPage;
