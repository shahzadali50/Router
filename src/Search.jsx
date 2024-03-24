import React, { useState } from 'react'
import Sresult from './Sresult';

function Search() {
    const [img, setImg] = useState('')
    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data)


    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">

                        <input onChange={inputEvent} value={img} className='form-control' type="search" placeholder='Search' />
                    </div>
                    <div className="col-12 mt-4">
                     { img === "" ? null : <Sresult name={img}/> }   
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search