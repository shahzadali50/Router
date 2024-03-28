import React, { useState } from 'react'




function Contact() {
  const [data , setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:' '
  
  
  
  });
  const  formSubmit =(event)=>{
    event.preventDefault();
    alert(
      `my name is "${data.fullname}". My mobile number is "${data.phone}"  and my email is "${data.email}" and Message is "${data.msg}"`
    )

  }
  const inputEvent =(event)=>{
    const { name , value } = event.target;
    setData((preVlue)=>{
      return{
        ...preVlue,
        [name]:value
  
      }
    })
  
  }
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-10 text-center mx-auto">
              <h1 className='text-48px' >Contact us</h1>
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic perferendis reiciendis temporibus ad cupiditate voluptates ipsum repellendus totam repudiandae nobis molestiae enim facilis, ex, consequuntur, dicta minima distinctio architecto nostrum! </p>
            </div>
          </div>
          <div className="col-6 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="row">
                <div class="col-12 mb-3">
                <label htmlFor="name">Full Name</label>
                  <input id='name' type="text" className="form-control" name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                   placeholder="Full Name" />
                </div>
                <div className="col-12 mb-3">
                <label htmlFor="phone">Phone No</label>
                  <input id='phone' type="number" className="form-control" name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                   placeholder="Enter your Phone No" />
                </div>
                <div className="col-12 mb-3">
                <label htmlFor="email">Email</label>
                  <input id='email' type="emai" className="form-control" name="email"
                  value={data.email}
                  onChange={inputEvent}
                   placeholder="Email" />
                </div>
                <div className="col-12 mb-3">
                <label htmlFor="Message">Message</label>
                <textarea class="form-control" id="Message" rows="3" name="msg"
                value={data.msg}
                onChange={inputEvent}
                 placeholder="message   "></textarea>
                </div>
                <div className="col-12 mb-3">
               <button type='submit' className='btn btn-primary'>submit</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact