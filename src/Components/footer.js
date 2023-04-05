import React from 'react';
import './footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-widget">
              <h3>About Us</h3>
              <p>Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, </p>
              <p>lifestyle, accessories, makeup, hairstyle, and body posture.The term implies a look defined by the fashion industry as that which is trending.</p>
              <p> Everything that is considered fashion is available and popularized by the fashion system (industry and media).</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-widget">
              <h3>Quick Links</h3>
              <ul className="list-unstyled">
                <li><a href="https:/www.whatsapp.com" target="_blank" >Whatsapp</a></li>
                <li> <a href="https:/www.instagram.com" target="_blank" >Instagram</a></li>
                <li> <a href="https:/www.twitter.com" target="_blank" >Twitter</a></li>
              
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget">
              <h3>Signup</h3>
              <form className="form-inline">
                <div className="form-group">
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email"/>
                </div>
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget">
              <h3>Customer Service</h3>
              <ul className="list-unstyled">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Return Policies & Exchanges</a></li>
                <li><a href="https:/www.google.com" target="_blank" >Cart</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>© 2023 FASHION HUB. All Rights Reserved</p>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled list-inline pull-right">
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
