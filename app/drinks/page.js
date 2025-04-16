
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const drinksPage = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  
  return (
    <div>
      <h1 className="text-7xl">drinksPage</h1>
    </div>
  );
};

export default drinksPage;
