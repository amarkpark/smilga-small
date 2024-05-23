const DrinksLayout = ({children}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        Pick your poison...
      </div>
      <div className="flex flex-col w-full border-opacity-50">
        {children}
      </div>
    </div>
  )
}

export default DrinksLayout
