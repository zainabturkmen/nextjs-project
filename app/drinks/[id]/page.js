import Link from "next/link";
const url = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleDrinksPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  return <div>SingleDrinksPage</div>;
};

export default SingleDrinksPage;
