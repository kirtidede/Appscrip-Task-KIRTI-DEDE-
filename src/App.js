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
            <span className='d-flex '>
              <h6 className='text-danger mx-5 px-5'>lorem ipsum dolor&nbsp;&nbsp;



              </h6> <h6 className='text-danger mx-5 px-5'>lorem ipsum dolor



              </h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <h6 className='text-danger mx-5 px-3'>lorem ipsum dolor



              </h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
            </span>


          </div>
        </div>
      </div>

      <div className='col-md-12 col-sm-12 col-lg-12'>
        <div className='row'>




          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <div className='col-md-12 col-sm-12 col-lg-12'><div className='row d-flex'>
                <div className='co-md-3 col-sm-12 col-lg-3 '>
                  <a class="navbar-brand" href="#">   <img src='images/logo1.png' className='mx-5' height={100} alt='logo' /></a>
                  <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                </div>

                <div className='col-md-7 col-sm-12 col-lg-7 fs-1 pt-4  fw-bold text-center px-5'>
                <h1 className='mx-2 px-3 fw-bold'>LOGO</h1> 
                   <br/><br/>

                <nav className='text-center' >
                     <center><span className='d-flex text-center ' >
                     
                     <h4 className='mx-4 fw-bold'> Shop</h4> 
                    <h4 className='mx-4 fw-bold'> Skill</h4>
                    <h4 className='mx-4 fw-bold'> Skill</h4>
                     <h4 className='mx-4 fw-bold'>Stories</h4>
                    <h4 className='mx-4 fw-bold'> About</h4>
                     <h4 className='mx-4 fw-bold'>Contact Us</h4> 
                      

                      
                      </span></center>

                       
                     </nav>
                </div>

                <div className='col-md-2 col-sm-12 col-lg-2 fs-1  text-center '>
                  <span className='d-flex fs-3'>
                    <i class="bi bi-search mx-1"></i>
                    <i class="bi bi-heart mx-1" ></i>
                    <i class="bi bi-bag mx-1"></i>
                    <i class="bi bi-person mx-1"></i>
                  </span>

                </div></div>

              </div>
              <br/><br/>
              
              
              </div>



          </nav>
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


            <div className='col-md-2 col-lg-2 col-sm-2'>

              <Sidenav />
             


            </div>



            <div className='col-md-10 col-lg-10 col-sm-10'>
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
