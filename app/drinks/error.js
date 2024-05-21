"use client"

const error = (error) => {
  return (
    <div role="alert" className="alert alert-error">
      <span>{error.error.message}</span>
    </div>
  )
}

export default error
