import React from 'react'
import ServicesCards from './component/ServicesCards'
import Sdata from './assets/js/Sdata'

function Services() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className='text-48px' >Our services</h1>
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic perferendis reiciendis temporibus ad cupiditate voluptates ipsum repellendus totam repudiandae nobis molestiae enim facilis, ex, consequuntur, dicta minima distinctio architecto nostrum! </p>
            </div>
           {
            Sdata.map((val,ind)=>{
              return  <ServicesCards
              key={ind}
                imgscr={val.imgscr}
                title ={val.title}
              />

            })
           }
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Services