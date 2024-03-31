


import React, { useEffect, useState } from 'react';
import Sidenav from './Sidenav';



//1 import useState





export default function Article() {
    const [data1, setData] = useState([]);


    useEffect(() => {
        // var res = fetch('http://localhost:3000/products')  
        var res = fetch('https://product-wd89.onrender.com/products') 
            .then((result) => result.json().then((res) =>
              
                setData(res)
            ))
    }, [])

    console.log(data1)
    return (
        <>
            <div className='container-fluid '>
                <div className='row'>

                    <div className='col-md-12 fixed1'><hr/>
                    <div class="btn-group text-center">
  <h1 class="btn text-secondary btn-lg dropdown1" type="button" data-bs-toggle="dropdown" aria-expanded="false" position='right'>
  RECOMMENDED <i class="fa-solid fa-angle-down ms-5" ></i>
  </h1>
  <ul class="dropdown-menu my-2 dropdown_menu_item mx-3">
                  

                  <li><a class="dropdown-item py-2 fw-normal" href="#"> <i class="bi bi-check me-1 fs-2"></i> RECOMMENDED</a></li>
                  <li><a class="dropdown-item py-2 fw-normal " href="#"> &nbsp;&nbsp;&nbsp;NEWEST FIRST</a></li>
                  <li><a class="dropdown-item py-2 fw-normal " href="#">&nbsp;&nbsp;&nbsp; POPULAR</a></li>
                  <li><a class="dropdown-item py-2 fw-normal " href="#">&nbsp;&nbsp;&nbsp; PRICE : HIGH TO LOW</a></li>
                  <li><a class="dropdown-item py-2 fw-normal " href="#"> &nbsp;&nbsp;&nbsp;PRICE : LOW TO HIGH</a></li>
                </ul>
</div><hr/>
                      
                    </div>
                    <div className='container'>
                    <div className='col-md-12'>
                       
                            <div className='col-md-12'>
                                <div className='row'>
                                {
                                    data1.map((val) => {
                                        return (
                                            <>
                                                

                                               <div className='col-md-4 col-lg-4 col-sm-12  text-center' style={{borderRadius:'5px solid dark'}}>
                                                  <div className='row'>
                                                   <card   className='' style={{width:'300px',backgroundcolor:'white'}} >
                                                    <div className=''>
                                                     <div  className=' '>
                                                        <img src={val.image} className='img-fluid' style={{height:'400px', width:'100%'}}/>
                                                     </div></div>
                                                     <div className='card-body '>
                                                        <h5 className='fw-bold fs-6 '>{val.title}<i class='bi bi-heart mx-4'/></h5>
                                                        
                                                        <h6 className='text-center text-secondary fw-normal'><u>sign in</u> or create an account to see pricing</h6>
                                                     </div>
                                                   </card></div>
                                               </div>
                                            </>)
                                    })
                                }
                                </div>
                                 </div>
                           

                    </div>
                    </div>

                </div>



            </div>


        </>
    )
}