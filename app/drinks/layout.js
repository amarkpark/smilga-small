const DrinksLayout = ({children}) => {
  return (
    <div className="flex flex-col flex-grow max-w-4xl mx-auto items-center pb-8">
      
      <div className="flex flex-col w-full border-opacity-50">
        {children}
      </div>
    </div>
  )
}

export default DrinksLayout
