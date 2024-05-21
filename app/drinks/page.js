const drinksUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s";

const DrinksPage = async () => {
  const response = await fetch(drinksUrl);
  const data = await response.json();
  console.log(data.drinks);
  return (
    <div>
      <h1 className="text-6xl">Drinks</h1>
      <hr />
    </div>
  )
}

export default DrinksPage