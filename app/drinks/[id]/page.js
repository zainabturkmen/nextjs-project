const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

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

  return <div>SingleDrinksPage</div>;
};

export default SingleDrinksPage;
