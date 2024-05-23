import Link from 'next/link';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.phpp?i=';
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
      <div className="card card-compact justify-self-center w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{drinkObject.strDrink}</h2>
          <p>{drinkObject.strInstructions}</p>
        </div>
        <figure><img src={drinkObject.strDrinkThumb} alt={drinkObject.strDrink} /></figure>
      </div>
    </div>
  );
}

export default drinkDetail
