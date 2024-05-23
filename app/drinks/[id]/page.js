import Link from 'next/link';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const getDrinkDetail = async (drinkUrl) => {
  const response = await fetch(drinkUrl);
  if (!response.ok) {
    console.error(response);
    throw new Error(
      `Drink failed to load! ${response.status}: ${response.statusText}`
      );
    }
  const data = await response.json();
  console.log(data.drinks[0]);
  return data?.drinks[0] || {};
};
  
const drinkDetail = async ({params}) => {
  const drinkUrl = url + params.id;
  const drinkObject = await getDrinkDetail(drinkUrl);
  console.log(drinkObject);
  console.log(params.id);
  return (
    <div className="flex flex-col max-w-xl mx-auto items-center">
      <h1 className="text-3xl mb-4">Your beverage is served...</h1>
      <div className="card card-compact justify-self-center w-96 bg-base-100 shadow-xl mb-16">
        <div className="card-body">
          <h2 className="card-title">{drinkObject.strDrink}</h2>
          <p>{drinkObject.strInstructions}</p>
        </div>
        <figure><img src={drinkObject.strDrinkThumb} alt={drinkObject.strDrink} /></figure>
      </div>
      <Link href="/drinks" className="btn btn-accent">Return to Drinks</Link>
    </div>
  );
}

export default drinkDetail
