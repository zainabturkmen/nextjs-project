import Link from "next/link";
const url = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Faild to fetch a drink....");
  }
};

const SingleDrinksPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  return <div>SingleDrinksPage</div>;
};

export default SingleDrinksPage;
