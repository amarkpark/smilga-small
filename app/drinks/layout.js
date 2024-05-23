const DrinksLayout = ({children}) => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          Pick your poison...
        </div>
      </div>
      {children}
    </div>
  )
}

export default DrinksLayout
