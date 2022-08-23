import React from "react"
import "./Section2.css"
import pricing from "../Images/pricing.jpg"
import "./Section4.css"
const Section4 = () => (
   

      


   <div>
     <div  className="uk-height-viewport  uk-visible@l " style={{backgroundColor:'#E3EEE9'}}>
        <div className="container" style={{display:'flex', flexDirection:'column'}}>
            <div style={{marginLeft:520}}>
            <div style={{fontSize:15,color:'#85161F',fontFamily:'sans-serif',fontWeight:200,marginTop:100}}>PRICING PLAN</div>
            </div>
           <div style={{marginLeft:250}}>
           <div className="uk-align-center" style={{fontFamily:'bradley hand,cursive',fontSize:50,fontWeight:600,color:'black',marginTop:10}}>
            Choose Your Best Pricing Plan
            </div>

           </div>

           <div style={{marginLeft:480}}>
            <div class="uk-button-group">
            <button class="uk-button uk-button-secondary ">Yearly</button>
            <button class="uk-button uk-button-secondary ">Monthly</button>
            </div>
            </div>

            <section style={{display:'flex',flexDirection:'row',marginTop:50}}>
    <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="card card_red text-center">
            <div class="title">
                <img src={pricing} style={{width:200}} />
              <h2 >Basic</h2>
            </div>
            <div class="price">
              <h4><sup>$</sup>25</h4>
            </div>
            <div class="option">
              <ul>
                <li><i class="fa fa-check" aria-hidden="true"></i>Increase traffic 50%</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>Social Media Marketing</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>10 Free Optimization</li>
                <li><i class="fa fa-times" aria-hidden="true"></i>24/7 support</li>
                </ul>
            </div>
            <a href="#">Get Started</a>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card card_violet text-center">
            <div class="title">
            <img src={pricing} style={{width:200}} />
              <h2>Premium</h2>
            </div>
            <div class="price">
              <h4><sup>$</sup>25</h4>
            </div>
            <div class="option">
              <ul>
              <li><i class="fa fa-check" aria-hidden="true"></i>Increase traffic 50%</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>Social Media Marketing</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>10 Free Optimization</li>
                <li><i class="fa fa-times" aria-hidden="true"></i>24/7 support</li>
                </ul>
            </div>
            <a href="#">Get Started</a>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card card_three text-center">
            <div class="title">
            <img src={pricing} style={{width:200}} />
              <h2>Standard</h2>
            </div>
            <div class="price">
              <h4><sup>$</sup>50</h4>
            </div>
            <div class="option">
              <ul>
                <li><i class="fa fa-check" aria-hidden="true"></i>Increase traffic 50%</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>Social Media Marketing</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>10 Free Optimization</li>
                <li><i class="fa fa-times" aria-hidden="true"></i>24/7 support</li>
                </ul>
            </div>
            <a href="#">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            
        </div>
    </div>

    {/* <div  className="uk-hidden@l uk-hidden@m" style={{backgroundColor:'#E3EEE9'}}>
        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{marginLeft:180}}>
            <div style={{fontSize:12,color:'#85161F',fontFamily:'sans-serif',fontWeight:200,marginTop:100}}>PRICING PLAN</div>
            </div>
           <div style={{marginLeft:50}}>
           <div className="uk-align-center" style={{fontFamily:'bradley hand,cursive',fontSize:40,fontWeight:600,color:'black',marginTop:10}}>
            Choose Your Best Pricing Plan
            </div>

           </div>

           <div style={{marginLeft:100}}>
            <div class="uk-button-group">
            <button class="uk-button uk-button-secondary ">Yearly</button>
            <button class="uk-button uk-button-secondary ">Monthly</button>
            </div>
            </div>

            <section style={{display:'flex',flexDirection:'row',marginTop:50}}>
    <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="card card_red text-center" style={{width:50}}>
            <div class="title">
                <img src={pricing} style={{width:200}} />
              <h2 >Basic</h2>
            </div>
            <div class="price">
              <h4><sup>$</sup>25</h4>
            </div>
            <div class="option">
              <ul>
                <li><i class="fa fa-check" aria-hidden="true"></i>Increase traffic 50%</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>Social Media Marketing</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>10 Free Optimization</li>
                <li><i class="fa fa-times" aria-hidden="true"></i>24/7 support</li>
                </ul>
            </div>
            <a href="#">Get Started</a>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card card_violet text-center"  style={{width:50}}>
            <div class="title">
            <img src={pricing} style={{width:200}} />
              <h2>Premium</h2>
            </div>
            <div class="price">
              <h4><sup>$</sup>25</h4>
            </div>
            <div class="option">
              <ul>
              <li><i class="fa fa-check" aria-hidden="true"></i>Increase traffic 50%</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>Social Media Marketing</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>10 Free Optimization</li>
                <li><i class="fa fa-times" aria-hidden="true"></i>24/7 support</li>
                </ul>
            </div>
            <a href="#">Get Started</a>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card card_three text-center"  style={{width:50}}>
            <div class="title">
            <img src={pricing} style={{width:200}} />
              <h2>Standard</h2>
            </div>
            <div class="price">
              <h4><sup>$</sup>50</h4>
            </div>
            <div class="option">
              <ul>
                <li><i class="fa fa-check" aria-hidden="true"></i>Increase traffic 50%</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>Social Media Marketing</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>10 Free Optimization</li>
                <li><i class="fa fa-times" aria-hidden="true"></i>24/7 support</li>
                </ul>
            </div>
            <a href="#">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            
        </div>
    </div> */}
   </div>
)

export default Section4