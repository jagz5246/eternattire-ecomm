import React from 'react'
import './error.css'
const ErrorStripe = () => {
  return (
    <section className="page_404">
  <div className="container">
    <div className="row"> 
    <div className="col-sm-12 ">
    <div className="col-sm-10 col-sm-offset-1  text-center">
    <div className="four_zero_four_bg">
    
    
    </div>
    
    <div className="contant_box_404">
    <h2 className="text-2xl py-4">
        Something went wrong...
    </h2>
    
    <button><a href="/" className="cursor-pointer font-medium text-primary hover:text-primary/80">Go to Home</a></button>
  </div>
    </div>
    </div>
    </div>
  </div>
</section>
  )
}

export default ErrorStripe
