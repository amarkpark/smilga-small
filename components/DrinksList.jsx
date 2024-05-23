import Link from "next/link"
import React from 'react'

const DrinksList = ({drinks}) => {
  return (
    <ul className="menu menu-horizontal place-content-center">
      {drinks.map(drink => {
        const linkSegment = `/drinks/${drink.idDrink}`;
        /* I should be able to pass each single drinks' data to the details page
        to avoid a second database call. How do I do that? */
        return (
          <li key={drink.idDrink}>
            <Link href={linkSegment}>
            <div className="card card-compact space-around justify-self-center w-96 bg-base-100 shadow-xl">
              <figure><img src={drink.strDrinkThumb} alt={drink.strDrink} /></figure>
              <div className="card-body">
                <h2 className="card-title">{drink.strDrink}</h2>
              </div>
            </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
};

export default DrinksList
