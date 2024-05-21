const drinksUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s";

const getDrinks = async () => {
  await new Promise (resolve => setTimeout(resolve, 2000));
  const response = await fetch(drinksUrl);
  const data = await response.json();
  return data;
};

const DrinksPage = async () => {
  const data = await getDrinks();
  console.log(data.drinks);
  return (
    <div>
      <h1 className="text-6xl ml-4">Drinks</h1>
      <hr />
    </div>
  )
}

export default DrinksPage