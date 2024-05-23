const drinkDetail = ({params}) => {
  console.log(params.id);
  return (
    <div className="flex flex-col max-w-xl mx-auto items-center">
      <h1>{params.id} Add drink name here</h1>
      <div className="card card-compact justify-self-center w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Drinks!</h2>
          <p>Really this is going to be a drink</p>
        </div>
        <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      </div>
    </div>
  )
}

export default drinkDetail
