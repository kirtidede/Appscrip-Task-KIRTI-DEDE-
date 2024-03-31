// import React from 'react'
// import { useCollapse } from 'react-collapsed'

// export default function Sidenav() {
//   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

//   return (
//     <div>
//       <button {...getToggleProps()}>
//         {isExpanded ? 'Collapse' : 'Expand'}
//       </button>
//       <section {...getCollapseProps()}>Collapsed content 🙈</section>
//     </div>
//   )
// }

import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed'
import './index.css';
export default function Sidenav() {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <div className='col-md-12 col-lg-12 col-sm-12 fixed1' ><hr />
      <button className='btn  btn-toggle py-3 text-secondary'
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'Hide Filter' : 'Show Filter' }
      </button><hr />
      <section {...getCollapseProps()} className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
        <nav className="sidenav" >

         
          <div class="offcanvas-body  " >
         
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
              <li className='nav-item fw-bold'><input type='checkbox' className='largercheckbox' style={{ height: '15px', width: '15px' }} />  CUSTOMIZABLE</li><hr />

              <li class="nav-item dropdown text-dark">
                <a class="nav-link text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  IDEAL FOR &nbsp;  <i class="fa-solid fa-angle-down ms-5" ></i>
                </a><h5 className='all'> All</h5>
                <ul class="dropdown-menu">
                  <h6 className='text-secondary  fw-normal ' style={{ fontSize: '13px' }}><u>Unselect All</u></h6>

                  <li><a class="dropdown-item " href="#"><input type='checkbox' /> Men</a></li>
                  <li><a class="dropdown-item" href="#"><input type='checkbox' /> Women</a></li>
                  <li><a class="dropdown-item" href="#"><input type='checkbox' /> Baby & Kids</a></li>

                </ul>
              </li><hr />
              <li class="nav-item ">
                <a class="nav-link text-dark " href="#" role="button" aria-expanded="false">
                  OCCASION &nbsp;  <i class="fa-solid fa-angle-down ms-5" ></i>
                </a><h5 className='all'> All</h5>

              </li><hr />
              <li class="nav-item dropdown">
                <a class="nav-link text-dark" href="#" role="button" aria-expanded="false">
                  WORK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <i class="fa-solid fa-angle-down ms-5" ></i>
                </a><h5 className='all'> All</h5>

              </li><hr />
              <li class="nav-item dropdown">
                <a class="nav-link text-dark" href="#" role="button" aria-expanded="false">
                  FABRIC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <i class="fa-solid fa-angle-down ms-5" ></i>
                </a><h5 className='all'> All</h5>

              </li><hr />
              <li class="nav-item dropdown">
                <a class="nav-link text-dark" href="#" role="button" aria-expanded="false">
                  SEGMENT &nbsp;  <i class="fa-solid fa-angle-down ms-5" ></i>
                </a><h5 className='all'> All</h5>

              </li><hr />
              <li class="nav-item dropdown">
                <a class="nav-link text-dark" href="#" role="button" aria-expanded="false">
                  SUITABLE FOR &nbsp;  <i class="fa-solid fa-angle-down ms-3" ></i>
                </a><h5 className='all'> All</h5>

              </li><hr />
              <li class="nav-item dropdown">
                <a class="nav-link text-dark" href="#" role="button" aria-expanded="false">
                  ROW MATERIAL &nbsp;  <i class="fa-solid fa-angle-down ms-2" ></i>
                </a><h5 className='all'> All</h5>

              </li><hr />
              <li class="nav-item dropdown">
                <a class="nav-link text-dark" href="#" role="button" aria-expanded="false">
                  PATTERN &nbsp;  <i class="fa-solid fa-angle-down ms-5" ></i>
                </a><h5 className='all'> All</h5>

              </li><hr />


            </ul>

          </div>

        </nav>


      </section>
    </div>
  )
}