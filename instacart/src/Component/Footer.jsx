import"./Footer.css"

function Footer(){
    return(
        <>
        <div class="container">
  <footer class="beauty-footer py-5">

    <div class="row">

      <div class="col-6 col-md-2 mb-4 footer-col">
        <h5 class="footer-title">Explore</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="footer-link">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="footer-link">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="footer-link">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="footer-link">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="footer-link">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-4 footer-col">
        <h5 class="footer-title">Shop</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="footer-link">Makeup</a></li>
          <li class="nav-item mb-2"><a href="#" class="footer-link">Skincare</a></li>
          <li class="nav-item mb-2"><a href="#" class="footer-link">Fragrances</a></li>
          <li class="nav-item mb-2"><a href="#" class="footer-link">Haircare</a></li>
          <li class="nav-item mb-2"><a href="#" class="footer-link">Gifts</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-4 footer-col">
        <h5 class="footer-title">Support</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="footer-link">Help</a></li>
          <li class="nav-item mb-2"><a href="#" class="footer-link">Shipping</a></li>
          <li class="nav-item mb-2"><a href="#" class="footer-link">Returns</a></li>
          <li class="nav-item mb-2"><a href="#" class="footer-link">Payments</a></li>
          <li class="nav-item mb-2"><a href="#" class="footer-link">Contact</a></li>
        </ul>
      </div>

      
      <div class="col-md-5 offset-md-1 mb-4 footer-col">
        <form>
          <h5 class="footer-title">Join our newsletter</h5>
          <p class="footer-text">Get exclusive offers, beauty tips & product updates.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <input id="newsletter1" type="email" class="form-control footer-input" placeholder="Email address"/>
            <button class="btn subscribe-btn" type="button">Subscribe</button>
          </div>
        </form>
      </div>

    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top footer-bottom">
      <p class="footer-copy">© 2025 BeautyBliss. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="footer-icon" href="#"><i class="bi bi-instagram"></i></a></li>
        <li class="ms-3"><a class="footer-icon" href="#"><i class="bi bi-facebook"></i></a></li>
      </ul>
    </div>

  </footer>
</div>
</>
    )
}

export default Footer