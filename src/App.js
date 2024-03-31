import logo from './logo.svg';
import './App.css';

import Article from './Article';
import React, { useState } from 'react';
import Sidenav from './Sidenav';

import Footer1 from './Footer1';




function App() {

  return (
    <>

      <div className='container-fluid'>
        <div className='col-md-12 col-sm-12 col-lg-12'>
          <div className='row bg-dark text-center'>
            <span className='d-flex position-relative '>
              <h6 className='text-danger '>lorem ipsum dolor&nbsp;&nbsp;



              </h6>
               <h6 className='text-danger position-absolute top-0 start-50 '>lorem ipsum dolor



              </h6>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
              <h6 className='text-danger  position-absolute top-0 end-0'  >lorem ipsum dolor



              </h6>
           
            </span>


          </div>
        </div>
      </div>

   



{/* ****************************************************************************** */}
          
            <div class="container nav1 p-0 ">
            <div className='row '>
              <div className='col-md-12 col-sm-12 col-lg-12 p-0 navbar-container'>
                 <div className='row'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                <div className='co-md-3 col-sm-3 col-lg-3  '>
                  <a class="navbar-brand" href="#">   <img src='images/logo1.png' className='mx-5 ' height={100} alt='logo' /></a>
                  <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"> <i class="bi bi-list text-light py-3"></i></span>
                  </button>
                  
                </div>

                <div className='col-md-6 col-sm-6 col-lg-6 fs-1 pt-4  fw-bold text-center '>
                <h1 className='mx-2 fw-bold py-3'>LOGO</h1> 
                  

                
                </div>


                <div className='col-md-3 col-sm-3 col-lg-3 fs-1  text-center  '>
                  <span className='d-flex fs-3 py-4'>
                    <i class="bi bi-search mx-2"></i>
                    <i class="bi bi-heart mx-1" ></i>
                    <i class="bi bi-bag mx-2"></i>
                    <i class="bi bi-person mx-1"></i>
                  </span>

                </div> </nav></div>

              </div></div>
              <br/><br/>
              
              
              </div>



         
{/* ************************************************************************* */}

          <div className='container '>
            <div className='col-md-12 col-lg-12 col-sm-12 '>
              <div className='row'><center>
              <nav class="navbar navbar-expand-lg bg-body-tertiary  navbar_option " >
  
   
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> 
    <div class="collapse nav_bar navbar-collapse " id="navbarSupportedContent">&nbsp; &nbsp;&nbsp; &nbsp;
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold fs-4 ">
        <li class="nav-item ms-5">
          <a class="nav-link active" aria-current="page" href="#">SHOP</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link active" href="#">SKILL</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link ms-5" href="#" aria-disabled="true">STORIES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" aria-disabled="true">ABOUT </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" aria-disabled="true">CONTACT US </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" aria-disabled="true">REVIEW</a>
        </li>
        
      </ul>
      
    </div>
 
 
</nav></center>


              </div>
            </div>
          </div>
       
    
<hr/>

<div className='container pt-5'>
  <div className='col-md-12 col-sm-12 col-lg-12'>
    <div className='row text-center'>
      <h1 className='fs-1 fw-bold'>Discover You Product</h1>
      <p className='px-5 fs-5 mx-5 py-2'>lorem  ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod
      lorem  ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod
      </p>
    </div>
  </div>
</div>

      <div className='container'>
        <div className='col-md-12 col-lg-12 col-sm-12'>
          <div className='row d-flex'>


            <div className='col-md-12 col-lg-3 col-sm-12  '>

              <Sidenav />
             


            </div>



            <div className='col-md-12 col-lg-9 col-sm-12'>
              <Article />






            </div>

          </div></div>
      </div><br /><br />
      <div className='container-fluid'>
        <div className='col-md-12 col-lg-12 col-sm-12'>
          <Footer1 />
        </div>
      </div>



    </>
  );
}

export default App;
