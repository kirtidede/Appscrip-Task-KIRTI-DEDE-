import React from 'react'

export const Sidebar = () => {
  function Hide(){

  }
  return (
    <>
  
  
<div className='col-md-12 col-sm-12 col-lg-12'>

<nav class="navbar bg-body-tertiary ">
  <div class="container">
   
    <h1 class="navbar-toggler text-secondary  " style={{marginRight:'1500px'}}  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className='d-flex px-5'> <i class="fa-solid fa-angle-left"></i> <h6><u>Show&nbsp;Filter</u></h6> </span>
    </h1>
    <div class="offcanvas offcanvas-start  "  data-bs-scroll="true"  data-bs-backdrop="false" style={{marginTop:'200px',width:'220px',marginLeft:'50px'}} tabindex="1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
         </div>
      <div class="offcanvas-body " >
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
          <li className='nav-item fw-bold'><input type='checkbox' className='largercheckbox' style={{height:'15px',width:'15px'}}/>  CUSTOMIZABLE</li><hr/>
         
          <li class="nav-item dropdown">
            <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              IDEAL FOR &nbsp;  <i class="fa-solid fa-angle-down ms-5" ></i> 
            </a><h5 className='all'> All</h5>
            <ul class="dropdown-menu">
              <h6 className='text-secondary  fw-normal '  style={{fontSize:'13px'}}><u>Unselect All</u></h6>
            
              <li><a class="dropdown-item" href="#"><input type='checkbox'/> Men</a></li>
              <li><a class="dropdown-item" href="#"><input type='checkbox'/> Women</a></li>
              <li><a class="dropdown-item" href="#"><input type='checkbox'/> Baby & Kids</a></li>
             
            </ul>
          </li><hr/>
          <li class="nav-item ">
            <a class="nav-link " href="#" role="button"  aria-expanded="false">
              OCCASION &nbsp;  <i class="fa-solid fa-angle-down ms-5" ></i> 
            </a><h5 className='all'> All</h5>
           
          </li><hr/>
          <li class="nav-item dropdown">
            <a class="nav-link " href="#" role="button"  aria-expanded="false">
              WORK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <i class="fa-solid fa-angle-down ms-5" ></i> 
            </a><h5 className='all'> All</h5>
           
          </li><hr/>
          <li class="nav-item dropdown">
            <a class="nav-link " href="#" role="button"  aria-expanded="false">
              FABRIC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <i class="fa-solid fa-angle-down ms-5" ></i> 
            </a><h5 className='all'> All</h5>
           
          </li><hr/>
          <li class="nav-item dropdown">
            <a class="nav-link " href="#" role="button"  aria-expanded="false">
             SEGMENT &nbsp;  <i class="fa-solid fa-angle-down ms-5" ></i> 
            </a><h5 className='all'> All</h5>
           
          </li><hr/>
          <li class="nav-item dropdown">
            <a class="nav-link " href="#" role="button"  aria-expanded="false">
              SUITABLE FOR &nbsp;  <i class="fa-solid fa-angle-down ms-3" ></i> 
            </a><h5 className='all'> All</h5>
           
          </li><hr/>
          <li class="nav-item dropdown">
            <a class="nav-link " href="#" role="button"  aria-expanded="false">
             ROW MATERIAL &nbsp;  <i class="fa-solid fa-angle-down ms-2" ></i> 
            </a><h5 className='all'> All</h5>
           
          </li><hr/>
          <li class="nav-item dropdown">
            <a class="nav-link " href="#" role="button"  aria-expanded="false">
              PATTERN &nbsp;  <i class="fa-solid fa-angle-down ms-5" ></i> 
            </a><h5 className='all'> All</h5>
           
          </li><hr/>
       

        </ul>
        
      </div>
    </div>
  </div>
</nav>
</div>







 </>
  )
}
