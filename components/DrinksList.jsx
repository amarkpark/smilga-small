import Link from "next/link"
import React from 'react'

/*
I need to pass returned data array in to this component
loop through the array and return a link for each id
render a card inside the link for each id and pass that 
object in to the card to extract the rest of the card data
*/
const DrinksList = ({id}) => {
  const linkSegment = `/drinks/${id}`;
  return (
    <Link
      href={linkSegment}
    >
      Here is the id { id }
      Should this be an inline card or a DrinkCard component?
      Could reuse the component on the Details page
    </Link>
  )
}

export default DrinksList
