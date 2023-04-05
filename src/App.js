import './App.css';
import Footer from './Components/footer';
import Shirt from './pages/Title';
function App() {
  return (
    <div>
      <section id="header">
    <nav>
        <a href=""><img src="https://cdn.dribbble.com/users/883011/screenshots/10080344/media/67309535ffcf9ac33e254446fd43674d.png"/> </a>
            <div class="nav-links"><br/><br/>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="#header1">Sale</a></li>
                    <li><a href="#header3">Purchase</a></li>
                    <li><a href="#header4">Contact Us</a></li>
                </ul>
           </div>
    </nav>
<div class ="title">
    <br/><br/><h1>FASHION HUB </h1><br/>
    <p>
        India's largest MEN'S WEAR
    </p><br/><br/><br/><br/>
    <a href="https:/www.google.com" target="_blank" >VISIT US TO KNOW MORE</a>
</div>
    
</section>
{/* About Section */}
<section id="header1">
    <nav>
        <div class="headertext">
               <h2>
               Recent sale and offers(DISCOUNT)
                </h2><br/>
                <div class="img2">
                    <div>
                    <img className="dress" src="https://tse4.mm.bing.net/th?id=OIP.yKBdoFELUBfnGfeWe5TTNQHaJo&pid=Api&P=0" alt="" />
                    <h1>SHIRT</h1>
                    </div>
                    <div>
                    <img  className="dress" src="https://tse4.mm.bing.net/th?id=OIP.4R__tB1o-ZnH3FY7ua4fTAHaHa&pid=Api&P=0" alt="" />
                    <h1>T-SHIRT</h1><br/><br/>
                    </div>
                    <div>
                        <img className="dress" src="https://tse4.mm.bing.net/th?id=OIP.bMtCdBgXDQXXt5GH7PcTjwHaHa&pid=Api&P=0" alt=""/>"
                        <h1>FULL HAND T-SHIRT</h1>
                    </div>
                    <div>
                        <img className="dress" src="https://tse3.mm.bing.net/th?id=OIP.PBbFCnMlWi4yIqfWbQ7PigHaH5&pid=Api&P=0" alt=""/>
                        <h1>COAT </h1>
                 </div>
                 
                
                </div>
                <div class="img2">
                    <div>
                    <img className="dress" src="https://tse2.mm.bing.net/th?id=OIP.F3Y9t-gK2VpZkSr_65KBrQHaJ4&pid=Api&P=0" alt="" />
                    <h1>SHORTS</h1>
                    </div>
                    <div>
                    <img  className="dress" src="https://tse1.mm.bing.net/th?id=OIP.HlQFTpofxKRdwAv3pXVAjwHaNK&pid=Api&P=0" alt="" />
                    <h1>ACTIVE WEAR</h1><br/><br/>
                    </div>
                    <div>
                        <img className="dress" src="https://tse2.mm.bing.net/th?id=OIP.HRERv10G-nailFkAaTOt5AHaHp&pid=Api&P=0" alt=""/>"
                        <h1>JEANS</h1>
                    </div>
                    <div>
                        <img className="dress" src="https://tse3.mm.bing.net/th?id=OIP.38Tprqn2oC7VkCSIfCDEQAHaLH&pid=Api&P=0" alt=""/>
                        <h1>WEDDING WEAR</h1>
                 </div>
                 
                
                </div>
              
                
                 
                <h6>Various brands are available with unexpected offers 💯<br/>      
                </h6><br/>
          <h6> <i>NOTE: Online payment also available</i><br/><br/></h6> 
            <div>
                <a class="slots" href="https:/www.google.com" target="_blank">SHOP NOW</a>
            </div> 
        </div>
    </nav>
</section>
   <Shirt/>    
    <Footer/>
    </div>
  );
}

export default App;
