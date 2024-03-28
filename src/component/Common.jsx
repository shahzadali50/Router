import React from 'react'
import {NavLink } from "react-router-dom";

function Common(props) {
  return (
    <>
         <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-lg-7 text-center text-md-left
                            order-md-1 order-2
                            ">
                        <h1 className='text-48px'>{ props.name}</h1>
                        <p>The ShopperAI dashboard provides insights about
                            your  shoppers and the competition that
                            enable the discovery  of new business
                            opportunities and sales growth</p>
                        <NavLink to={props.visit} className="btn btn-primary">{ props.btname}</NavLink>

                    </div>
                    <div className="col-md-7 col-lg-5 order-md-2 order-1">
                        <img src={props.imgscr} alt="not-show" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Common