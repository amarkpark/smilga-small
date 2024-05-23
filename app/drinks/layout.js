const DrinksLayout = ({children}) => {
  return (
    <div className="flex flex-col flex-grow max-w-4xl mx-auto items-center pb-8">
      {/* <div className="grid space-around justify-self-center w-96  h-20 card bg-base-300 rounded-box place-items-center">
        Your cocktail selection:
      </div> */}
      <div className="flex flex-col w-full border-opacity-50">
        {children}
      </div>
    </div>
  )
}

export default DrinksLayout
