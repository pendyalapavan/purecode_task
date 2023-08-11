import './App.css';
 import logo from './images/logo.svg'; // Make sure to provide the correct path to your logo image
import hoodie from './images/hoodie.png'
import purse from './images/purse.png'
import beanie from './images/beanie.png'
import logo1 from './images/logo1.svg'
import { useState } from 'react';

function App() {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const [quantity3, setQuantity3] = useState(1);

  const basePrice1 = 74;
  const basePrice2 = 132;
  const basePrice3 = 28;

  const pricePerItem1 = basePrice1 * quantity1;
  const pricePerItem2 = basePrice2 * quantity2;
  const pricePerItem3 = basePrice3 * quantity3;

  
    const increaseQuantity1 = () => {
      setQuantity1(quantity1 + 1);
    };
    const increaseQuantity2 = () => {
      setQuantity2(quantity2 + 1);
    };
    const increaseQuantity3 = () => {
      setQuantity3(quantity3 + 1);
    };
  
    const decreaseQuantity1 = () => {
      if (quantity1 > 1) {
        setQuantity1(quantity1 - 1);
      }
    }
    const decreaseQuantity2 = () => {
      if (quantity2 > 1) {
        setQuantity2(quantity2 - 1);
      }
    }
    const decreaseQuantity3 = () => {
      if (quantity3 > 1) {
        setQuantity3(quantity3 - 1);
      }
    }

    const subtotal1 = quantity1 * pricePerItem1;
  const subtotal2 = quantity2 * pricePerItem2;
  const subtotal3 = quantity3 * pricePerItem3;

  const subtotal = subtotal1 + subtotal2 + subtotal3;
  const ordertotal = subtotal+5+24.9;
  return (
   
    <div>
      <div>
        <nav className="navbar navbar-light mb-0 bg-dark">
          <div className="container-fluid">
            <img src={logo} alt='logo' height="20rem"/>
            <button className="btn mt-2 mt-md-0" type="submit" style={{backgroundColor:"#a2c11c",color:"white"}}>Buy Now</button>
          </div>
        </nav>
      </div>

      <div style={{ marginLeft: "12%", marginRight: "12%" }}>
  <div>
    <nav className="navbar navbar-expand-lg navbar-light" style={{ marginBottom: "-2%" }}>
      <div className="container-fluid d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <div className="element mb-1 mb-lg-0">
          <img src={logo1} alt="logo1" height="35rem" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <h4 className="nav-link">Men</h4>
            </li>
            <li className="nav-item">
              <h4 className="nav-link">Women</h4>
            </li>
            <li className="nav-item">
              <h4 className="nav-link">Beauty</h4>
            </li>
            <li className="nav-item">
              <h4 className="nav-link">Sport</h4>
            </li>
            <li className="nav-item">
              <h4 className="nav-link dropdown-toggle">Templates</h4>
              <ul className="dropdown-menu">
                <li>
                  <p className="dropdown-item" href="/">Template 1</p>
                </li>
                <li>
                  <p className="dropdown-item" href="/">Template 2</p>
                </li>
                <li>
                  <a className="dropdown-item" href="/">Template 3</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <h4 className="nav-link dropdown-toggle">Explore</h4>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">Explore Option 1</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">Explore Option 2</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">Explore Option 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='d-sm-none d-xs-none d-md-flex d-md-lg'>
        <div className="element d-lg-flex">
          <div style={{ marginRight: "0.8rem" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <div style={{ marginRight: "0.8rem" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2-2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </div>
        </div>
        </div>
      </div>
    </nav>
    <hr />
  </div>
      <div style={{ marginTop:"3%"}}> 
        <h2>Checkout</h2>
        <p>Homepage / Clothing Categories / <u>Checkout</u></p>
      </div>

      <div className='m-3'>
        <div class="row mt-5">
          <div class="col-sm-7">
            <div class="card mb-4">
              <div class="card-body d-flex justify-content-between">
                  <div className='m-2 d-flex mb-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle m-2 mt-1" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                    <div className='mt-0 m-2'>
                      <div className='d-flex'>
                        <p className='mb-1'>CONTACT INFO</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg m-1" viewBox="0 0 16 16">
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                      </div>
                      <h6>Enrico Smith   +855-666-7744</h6>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <button type="button" class="btn btn-light" style={{backgroundColor:"#eaeaea"}}>Change</button>
                  </div>
              </div>
            </div>
            <div class="card mb-4">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                  <div className='m-2 d-flex mb-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-y m-2 mt-1" viewBox="0 0 16 16">
  <path d="M10.493 5.197 8 7.483 5.507 5.197 4.493 6.303 7.25 8.83V12h1.5V8.83l2.757-2.527-1.014-1.106Z"/>
  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435Zm-1.4.7a.495.495 0 0 1 .7 0l6.516 6.515a.495.495 0 0 1 0 .7L8.35 14.866a.495.495 0 0 1-.7 0L1.134 8.35a.495.495 0 0 1 0-.7L7.65 1.134Z"/>
</svg>
                    <div className='mt-0 m-2'>
                      <div className='d-flex'>
                        <p className='mb-1'>SHIPPING ADDRESS</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg m-1" viewBox="0 0 16 16">
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                      </div>
                      <h6>St. Paul's Road, Norris, SD 57560, Dakota, USA</h6>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <button type="button" class="btn btn-light" style={{backgroundColor:"#eaeaea"}}>Change</button>
                  </div>
              </div>
              <hr className='m-0 p-0'/>
              <div class="container mt-4">
    <form>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="firstName" class="form-label">First name</label>
          <input type="text" class="form-control" id="firstName" placeholder="First Name"/>
        </div>
        <div class="col-md-6">
          <label for="lastName" class="form-label">Last name</label>
          <input type="text" class="form-control" id="lastName" placeholder="Last Name"/>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-8">
          <label for="address" class="form-label">Address</label>
          <input type="text" class="form-control" id="address" placeholder="Address"/>
        </div>
        <div class="col-md-4">
          <label for="apt" class="form-label">Apt, Suite *</label>
          <input type="text" class="form-control" id="apt" placeholder="Apt"/>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="city" class="form-label">City</label>
          <input type="text" class="form-control" id="city" placeholder="City"/>
        </div>
        <div class="col-md-6">
          <label for="country" class="form-label">Country</label>
          <select class="form-select" id="country">
            <option selected>Select Country</option>
            <option>Country 1</option>
            <option>Country 2</option>
           
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="state" class="form-label">State/Province</label>
          <input type="text" class="form-control" id="state" placeholder="State"/>
        </div>
        <div class="col-md-6">
          <label for="postalCode" class="form-label">Postal code</label>
          <input type="text" class="form-control" id="postalCode" placeholder="Postal Code"/>
        </div>
      </div>
      <div class="row mb-3">
        {/* <div class="col"> */}
          <label class="form-label">Address Type</label>
          <div className='d-flex justify-content-between'>
          <div class="form-check col-md-6">
            <input class="form-check-input" type="radio" name="addressType" id="home" value="home"/>
            <label class="form-check-label" for="home">Home (All day Delivery)</label>
          </div>
          <div class="form-check col-md-6">
            <input class="form-check-input" type="radio" name="addressType" id="office" value="office"/>
            <label class="form-check-label" for="office">Office (Delivery 9 AM - 5 PM)</label>
          </div>

          {/* </div> */}
        </div>
      </div>
      <div class="row mt-5">
        <div class="d-flex">
          <button type="submit" class="btn btn-dark " style={{borderRadius:"2rem",marginRight:"1rem"}}>Save and next to Payment</button>
          <button type="button" class="btn">Cancel</button>
        </div>
        <div class="col-md-2">
          
        </div>
      </div>
    </form>
  </div>
              </div>
            </div>
            <div class="card mb-4 border-left">
            <div class="card-body d-flex justify-content-between">
                  <div className='m-2 d-flex mb-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card m-2 mt-1" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
</svg>
                    <div className='mt-0 m-2'>
                      <div className='d-flex'>
                        <p className='mb-1'>PAYMENT METHOD</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg m-1" viewBox="0 0 16 16">
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                      </div>
                      <h6>Google / Apple Wallet xxx-xxx-xx55</h6>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <button type="button" class="btn btn-light" style={{backgroundColor:"#eaeaea"}}>Change</button>
                  </div>
              </div>
            </div>
          </div>
          <div class="col-sm-5">
            <div class="card">
              <div class="card-body">
                
              <div class="container mt-0">
              <h6>Order Summary</h6>
    <div class="card border-0">
      
      <div class="card-body">
        <div class="row border-bottom pb-3 mb-3">
          <div class="col-md-3 card d-flex align-items-center justify-content-center border-0" style={{backgroundColor:"#edf7fa"}}>
            <img src={hoodie} alt="Item 1" class="img-fluid"/>
          </div>
          <div class="col-md-6">
            <p class="card-title">Rey Nylon Backpack</p>
            <div className='d-flex mb-3'>
              <div className='d-flex p-0'>
              {/* style={{borderRight: '1px solid #ccc',marginRight:"10px"}} */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paint-bucket mt-1" viewBox="0 0 16 16">
  <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z"/>
</svg>          
                
                <p style={{fontSize:"13px",borderRight: '1px solid #ccc',paddingRight:"0.5rem",marginLeft:"0.3rem"}}>Black</p>
              </div>
              <div className='d-flex' style={{marginLeft:"0.5rem"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-arrows-angle-expand mt-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
</svg>
                <p style={{fontSize:"13px", marginRight:"1rem",marginLeft:"0.3rem"}}>2XL</p>

              </div>
            </div>
            <div class="input-group mt-3 mb-0 ">
        <button
          class="btn btn-outline-secondary"
          type="button"
          style={{ borderRadius: "50%", height: "20px", width: "20px", textAlign: "center", padding: "0" }}
          onClick={decreaseQuantity1}
        >
          <p style={{marginTop:"-0.2rem"}}>-</p>
        </button>
        <p style={{ marginRight: "1rem", marginLeft: "1rem" }}>{quantity1}</p>
        <button
          class="btn btn-outline-secondary btn-circle"
          type="button"
          style={{ borderRadius: "50%", height: "1.25rem", width: "1.25rem", textAlign: "center", padding: "0", margin: "0" }}
          onClick={increaseQuantity1}
        >
         <p style={{marginTop:"-0.2rem"}}>+</p>
        </button>
      </div>
          </div>
          <div class="col-md-3 position-relative">
          <button type="button" class="btn btn-sm btn-outline-success position-absolute top-0 end-0">${pricePerItem1}</button>
            <p class="position-absolute bottom-0 end-0 " style={{color:"#005792"}}>Remove</p>
          </div>
        </div>
        <div class="row border-bottom pb-3 mb-3">
          <div class="col-md-3 card d-flex align-items-center justify-content-center border-0" style={{backgroundColor:"#edf7fa"}}>
              <img src={beanie} alt="Item 1" class="img-fluid"/>
          </div>
          <div class="col-md-6">
          <p class="card-title">Waffle Knit Beanie</p>
            <div className='d-flex mb-3'>
              <div className='d-flex p-0'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paint-bucket mt-1" viewBox="0 0 16 16">
                <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z"/>
              </svg>
                <p style={{fontSize:"13px",borderRight: '1px solid #ccc',paddingRight:"0.5rem",marginLeft:"0.3rem"}}>Black</p>
            </div>
            <div className='d-flex' style={{marginLeft:"0.5rem"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-arrows-angle-expand mt-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
</svg>
                <p style={{fontSize:"13px", marginRight:"1rem",marginLeft:"0.3rem"}}>2XL</p>

            </div>
          </div>
          <div class="input-group mt-3 mb-0 ">
        <button
          class="btn btn-outline-secondary"
          type="button"
          style={{ borderRadius: "50%", height: "20px", width: "20px", textAlign: "center", padding: "0" }}
          onClick={decreaseQuantity2}
        >
          <p style={{marginTop:"-0.2rem"}}>-</p>
        </button>
        <p style={{ marginRight: "1rem", marginLeft: "1rem" }}>{quantity2}</p>
        <button
          class="btn btn-outline-secondary btn-circle"
          type="button"
          style={{ borderRadius: "50%", height: "1.25rem", width: "1.25rem", textAlign: "center", padding: "0", margin: "0" }}
          onClick={increaseQuantity2}
        >
         <p style={{marginTop:"-0.2rem"}}>+</p>
        </button>
      </div>
        </div>
          <div class="col-md-3 position-relative">
          <button type="button" class="btn btn-sm btn-outline-success position-absolute top-0 end-0">${pricePerItem2}</button>
            
            <p class="position-absolute bottom-0 end-0 " style={{color:"#005792"}}>Remove</p>
          </div>
        </div>
        <div class="row border-bottom pb-3 mb-3">
        <div class="col-md-3 card d-flex align-items-center justify-content-center border-0" style={{backgroundColor:"#edf7fa"}}>
              <img src={purse} alt="Item 1" class="img-fluid"/>
          </div>
          <div class="col-md-6">
          <p class="card-title">Travel Pet Carrier</p>
            <div className='d-flex mb-3'>
              <div className='d-flex p-0'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paint-bucket mt-1" viewBox="0 0 16 16">
                <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z"/>
              </svg>
                <p style={{fontSize:"13px",borderRight: '1px solid #ccc',paddingRight:"0.5rem",marginLeft:"0.3rem"}}>Black</p>
            </div>
            <div className='d-flex' style={{marginLeft:"0.5rem"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-arrows-angle-expand mt-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
</svg>
                <p style={{fontSize:"13px", marginRight:"1rem",marginLeft:"0.3rem"}}>2XL</p>

            </div>
          </div>
          <div class="input-group mt-3 mb-0 ">
        <button
          class="btn btn-outline-secondary"
          type="button"
          style={{ borderRadius: "50%", height: "20px", width: "20px", textAlign: "center", padding: "0" }}
          onClick={decreaseQuantity3}
        >
          <p style={{marginTop:"-0.2rem"}}>-</p>
        </button>
        <p style={{ marginRight: "1rem", marginLeft: "1rem" }}>{quantity3}</p>
        <button
          class="btn btn-outline-secondary btn-circle"
          type="button"
          style={{ borderRadius: "50%", height: "1.25rem", width: "1.25rem", textAlign: "center", padding: "0", margin: "0" }}
          onClick={increaseQuantity3}
        >
         <p style={{marginTop:"-0.2rem"}}>+</p>
        </button>
      </div>
        </div>
          <div class="col-md-3 position-relative">
          <button type="button" class="btn btn-sm btn-outline-success position-absolute top-0 end-0">${pricePerItem3}</button>
            <p class="position-absolute bottom-0 end-0 " style={{color:"#005792"}}>Remove</p>
          </div>
        </div>
        <div class="container m-0 p-0">
          <p className='mb-1'>Discount code</p>
          <div className='d-flex'>
            <div class="input-group mb-3" style={{marginRight:"1rem"}}>
              <input type="text" class="form-control" style={{borderRadius:"1.5rem"}}/>
            </div>
            <div>
              <button class="btn btn-secondary border-0" type="button" id="apply-button" style={{borderRadius:"1.2rem", paddingLeft:"1rem",paddingRight:"1rem",backgroundColor:"#d3d6db",color:"black"}} >Apply</button>
            </div>
          </div>
        </div>
        <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <p>Subtotal</p>
      </div>
      <div class="col-md-6 d-flex justify-content-end">
        <h6>${subtotal}</h6>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <p>Shipping estimate</p>
      </div>
      <div class="col-md-6 d-flex justify-content-end">
        <h6>$5.00</h6>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 ">
        <p>Tax estimate</p>
      </div>
      <div class="col-md-6 d-flex justify-content-end">
        <h6>$24.90</h6>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h6>Order total</h6>
      </div>
      <div class="col-md-6 d-flex justify-content-end">
        <h6>${ordertotal.toFixed(2)}</h6>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-12">
        <button class="btn btn-dark btn-block" style={{paddingLeft:"31%",paddingRight:"31%",borderRadius:"2rem"}}>Confirm Order</button>
      </div>
    </div>
    <div class="row mt-1">
      <div class="col-md-12 text-center" style={{fontSize:"10px"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg> Learn more <u>Taxes</u> and <u>Shipping</u> information
      </div>
    </div>
  </div>
      </div>
      
      
    </div>
  </div>
           
              </div>
            </div>
          </div>
        </div>
        
      </div>
      

      <div>
      <footer class="py-4">
      <hr class="mb-4"></hr>
    <div class="container mt-5">
      
      <div class="row">
        <div class="col-md-3">
        <img src={logo1} alt="logo1"  height="30rem"/>
          <ul class="list-unstyled">
            <div className='d-flex mb-2 mt-3'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{fill:"#005792",margin:"0.25rem"}}><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
            <li>Facebook</li>
            </div>
            <div className='d-flex mb-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" style={{fill:"#f50025",margin:"0.25rem"}}><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
            <li>Youtube</li>
            </div>
            <div className='d-flex mb-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512" style={{fill:"#29afd1",margin:"0.25rem"}}><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
            <li>Telegram</li>
            </div>
            <div className='d-flex mb-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#1890ec",margin:"0.25rem"}}><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>
            <li>Telegram</li>
            </div>
          </ul>
        </div>
        <div class="col-md-3">
          <h5>Getting Started</h5>
          <ul class="list-unstyled">
            <li className='mb-2 mt-3'>Release Notes</li>
            <li className='mb-2'>Upgrade Guide</li>
            <li className='mb-2'>Browser Support</li>
            <li className='mb-2'>Dark Mode</li>
          </ul>
        </div>
        <div class="col-md-2">
          <h5>Explore</h5>
          <ul class="list-unstyled">
            <li className='mb-2 mt-3'>Prototyping</li>
            <li className='mb-2'>Design Systems</li>
            <li className='mb-2'>Pricing</li>
            <li className='mb-2'>Security</li>
          </ul>
        </div>
        <div class="col-md-2">
          <h5>Resources</h5>
          <ul class="list-unstyled">
            <li className='mb-2 mt-3'>Best Practices</li>
            <li className='mb-2'>Support</li>
            <li className='mb-2'>Developers</li>
            <li className='mb-2'>Learn design</li>
          </ul>
        </div>
        <div class="col-md-2">
          <h5>Community</h5>
          <ul class="list-unstyled">
            <li className='mb-2 mt-3'>Discussion Forums</li>
            <li className='mb-2'>Code of Conduct</li>
            <li className='mb-2'>Contributing</li>
            <li className='mb-2'>API Reference</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
      </div>

      </div>

    </div>
  );
}

export default App;
