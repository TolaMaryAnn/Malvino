import "./Section6.css"
import React from "react"
import laptop from "../Images/laptop.png"
import influencer from "../Images/influencer.jpg"
import man from "../Images/man.jpg"
import marketing from "../Images/marketing.jpg"
import online from "../Images/online.png"
import phones from "../Images/phones.png"
import pricing from "../Images/pricing.jpg"
import seo from "../Images/seo.jpg"
import social from "../Images/social.png"
import startup from "../Images/startup.jpg"
import target from "../Images/target.png"
import ecommerce from "../Images/ecommerce.jpg"
import photo from "../Images/photo.jpg"
import ipad from "../Images/ipad.jpg"
// import UIkit from "uikit"


function Section6()  {
   
    return(
        <div>
            <div id="scrollspyHeading3"  className="uk-height-viewport uk-visible@l " style={{backgroundColor:'#E3EEE9',display:'flex',flexDirection:'column'}}>
        <div className="container" style={{display:'flex',flexDirection:'column'}}>
           <div style={{marginLeft:500}}>
                <div style={{fontSize:15,color:'#85161F',fontFamily:'sans-serif',fontWeight:200,marginTop:100,}}>
                    CASE STUDY
                </div>

            </div>

            <div >
                <div className="uk-align-center uk-text-center uk-text-break" style={{fontFamily:'bradley hand,cursive',fontSize:50,fontWeight:600,color:'black',marginTop:10}}>
                    Some Of Our Awesome <br/> Stuffs
                </div>
            </div>



            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 10"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={ecommerce} class="d-block w-100" alt="..."  style={{width:100,height:400}}/>
      <div class="carousel-caption d-none d-md-block">
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:15,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:25,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
   
    <div class="carousel-item">
      <img src={laptop} class="d-block w-100" alt="..."  style={{width:100,height:400}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:15,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:25,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={man} class="d-block w-100" alt="..."  style={{width:100,height:400}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:15,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:25,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={marketing} class="d-block w-100" alt="..."  style={{width:100,height:400}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:15,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:25,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={online} class="d-block w-100" alt="..."  style={{width:100,height:400}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:15,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:25,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={phones} class="d-block w-100" alt="..."  style={{width:100,height:400}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:15,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:25,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={photo} class="d-block w-100" alt="..."  style={{width:100,height:400}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:15,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:25,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={pricing} class="d-block w-100" alt="..."  style={{width:100,height:400}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:15,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:25,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={seo} class="d-block w-100" alt="..."  style={{width:100,height:400}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:15,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:25,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={influencer} class="d-block w-100" alt="..."  style={{width:100,height:400}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:15,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:25,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div id="carouselExampleControls " class="carousel slide" data-bs-ride="carousel" style={{marginTop:100}} >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="uk-text-center uk-text-break" style={{marginLeft:50,fontSize:30,fontFamily:'bradley hand,cursive',fontWeight:'300',color:'black'}}> “Instead of one-way interruption, <br/>
        web marketing is about delivering useful content at<br/>
         just the right moment that a buyer needs it.” </div>
    </div>
    <div class="carousel-item">
    <div  className="uk-text-center uk-text-break" style={{marginLeft:50,fontSize:30,fontFamily:'bradley hand,cursive',fontWeight:'300',color:'black'}}> “Instead of one-way interruption, <br/>
        web marketing is about delivering useful content at<br/>
         just the right moment that a buyer needs it.” </div>
    </div>
    <div class="carousel-item">
    <div  className="uk-text-center uk-text-break" style={{marginLeft:50,fontSize:30,fontFamily:'bradley hand,cursive',fontWeight:'300',color:'black'}}> “Instead of one-way interruption, <br/>
        web marketing is about delivering useful content at<br/>
         just the right moment that a buyer needs it.” </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>


        

            </div>


            <div id="scrollspyHeading3"  className="uk-hidden@l uk-hidden@m" style={{backgroundColor:'#E3EEE9',display:'flex',flexDirection:'column'}}>
        <div className="container" style={{display:'flex',flexDirection:'column'}}>
           <div style={{marginLeft:180}}>
                <div style={{fontSize:12,color:'#85161F',fontFamily:'sans-serif',fontWeight:200,marginTop:100,}}>
                    CASE STUDY
                </div>

            </div>

            <div >
                <div className="uk-align-center uk-text-center uk-text-break" style={{fontFamily:'bradley hand,cursive',fontSize:40,fontWeight:600,color:'black',marginTop:10}}>
                    Some Of Our Awesome <br/> Stuffs
                </div>
            </div>



            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 10"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={ecommerce} class="d-block w-100" alt="..."  style={{width:100,height:400}}/>
      <div class="carousel-caption d-none d-md-block">
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:12,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:18,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
   
    <div class="carousel-item">
      <img src={laptop} class="d-block w-100" alt="..."  style={{width:100,height:200}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:12,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:18,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={man} class="d-block w-100" alt="..."  style={{width:100,height:200}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:12,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:18,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={marketing} class="d-block w-100" alt="..."  style={{width:100,height:200}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:12,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:18,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={online} class="d-block w-100" alt="..."  style={{width:100,height:200}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:12,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:18,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={phones} class="d-block w-100" alt="..."  style={{width:100,height:200}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:12,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:18,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={photo} class="d-block w-100" alt="..."  style={{width:100,height:200}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:12,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:18,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={pricing} class="d-block w-100" alt="..."  style={{width:100,height:200}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:12,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:18,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={seo} class="d-block w-100" alt="..."  style={{width:100,height:200}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:12,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:18,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={influencer} class="d-block w-100" alt="..."  style={{width:100,height:200}}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:15,fontWeight:900}}>Marketing</div>
        <div style={{color:'#85161F',fontFamily:'bradley hand,cursive',fontSize:18,fontWeight:600}}>Discover, Explore, Product</div>
      </div>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div id="carouselExampleControls " class="carousel slide" data-bs-ride="carousel" style={{marginTop:100}} >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="uk-text-center uk-text-break" style={{marginLeft:50,fontSize:20,fontFamily:'bradley hand,cursive',fontWeight:'300',color:'black'}}> “Instead of one-way interruption, <br/>
        web marketing is about delivering useful content at<br/>
         just the right moment that a buyer needs it.” </div>
    </div>
    <div class="carousel-item">
    <div  className="uk-text-center uk-text-break" style={{marginLeft:50,fontSize:20,fontFamily:'bradley hand,cursive',fontWeight:'300',color:'black'}}> “Instead of one-way interruption, <br/>
        web marketing is about delivering useful content at<br/>
         just the right moment that a buyer needs it.” </div>
    </div>
    <div class="carousel-item">
    <div  className="uk-text-center uk-text-break" style={{marginLeft:50,fontSize:20,fontFamily:'bradley hand,cursive',fontWeight:'300',color:'black'}}> “Instead of one-way interruption, <br/>
        web marketing is about delivering useful content at<br/>
         just the right moment that a buyer needs it.” </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>


        

    </div>
        </div>
    )
}

export default Section6