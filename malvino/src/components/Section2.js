import React from "react"
import brain from "../Images/brain.png"
import online from "../Images/online.png"
import target from "../Images/target.png"
import "./Section2.css"

const Section2 = () => (
    <div>
      <div id="scrollspyHeading1" className="uk-height-viewport uk-visible@l  " style={{backgroundColor:'#E3EEE9'}}>
       <div className="container" style={{display:'flex',flexDirection:'column'}}>
            <div style={{color:'#85161F',fontFamily:'sans-serif',fontSize:15,fontWeight:200,marginLeft:550}}>
                OUR SERVICES
            </div>

            <div style={{marginLeft:50}}>
            <div className="uk-align-center uk-text-center uk-text-break" style={{fontFamily:'bradley hand,cursive',fontSize:50,fontWeight:600,color:'black',marginTop:20}}>
            Provide Awesome <br/> Service With Our Tools
            </div>
            </div>

            <div>
            <div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="card card-1">
        <div style={{fontFamily:'bradley hand,cursive',fontSize:30,fontWeight:400,color:'black',marginTop:20}}>Discover,Explore the product</div>
        <div>
            <img src={brain} style={{width:135}} />
        </div>
        <div style={{fontFamily:'bradley hand,cursive',fontSize:20,fontWeight:300,color:'black',marginTop:70}}>Effective strategies to help <br/> you reach customers</div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card card-2">
      <div style={{fontFamily:'bradley hand,cursive',fontSize:30,fontWeight:400,color:'black',marginTop:20}}>Discover,Explore the product</div>
        <div>
            <img src={online} style={{width:280}} />
        </div>
        <div style={{fontFamily:'bradley hand,cursive',fontSize:20,fontWeight:300,color:'black',marginTop:70}}>Effective strategies to help <br/> you reach customers</div>
     </div>

    </div>
    <div class="col-md-4">
      <div class="card card-3">
      <div style={{fontFamily:'bradley hand,cursive',fontSize:30,fontWeight:400,color:'black',marginTop:20}}>Discover,Explore the product</div>
        <div>
            <img src={target} style={{width:140}} />
        </div>
        <div style={{fontFamily:'bradley hand,cursive',fontSize:20,fontWeight:300,color:'black',marginTop:70}}>Effective strategies to help <br/> you reach customers</div>
      </div>
    </div>

   
  </div>
</div>
            </div>
       </div>
      </div>


      <div id="scrollspyHeading1" className=" uk-hidden@l uk-hidden@m" style={{backgroundColor:'#E3EEE9'}}>
       <div className="" style={{display:'flex',flexDirection:'column'}}>
            <div style={{marginTop:50}}>
            <div style={{color:'#85161F',fontFamily:'sans-serif',fontSize:12,fontWeight:200,marginLeft:180}}>
                OUR SERVICES
            </div>
            </div>

            <div style={{marginLeft:10}}>
            <div className="uk-align-center uk-text-center uk-text-break" style={{fontFamily:'bradley hand,cursive',fontSize:40,fontWeight:600,color:'black',marginTop:20}}>
            Provide Awesome <br/> Service With Our Tools
            </div>
            </div>

            <div>
            <div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="card card-1" style={{width:20}}>
        <div style={{fontFamily:'bradley hand,cursive',fontSize:20,fontWeight:400,color:'black',marginTop:20}}>Discover,Explore the product</div>
        <div>
            <img src={brain} style={{width:105}} />
        </div>
        <div style={{fontFamily:'bradley hand,cursive',fontSize:15,fontWeight:300,color:'black',marginTop:70}}>Effective strategies to help <br/> you reach customers</div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card card-2"  style={{width:20}}>
      <div style={{fontFamily:'bradley hand,cursive',fontSize:20,fontWeight:400,color:'black',marginTop:20}}>Discover,Explore the product</div>
        <div>
            <img src={online} style={{width:200}} />
        </div>
        <div style={{fontFamily:'bradley hand,cursive',fontSize:15,fontWeight:300,color:'black',marginTop:70}}>Effective strategies to help <br/> you reach customers</div>
     </div>

    </div>
    <div class="col-md-4">
      <div class="card card-3"  style={{width:20}}>
      <div style={{fontFamily:'bradley hand,cursive',fontSize:20,fontWeight:400,color:'black',marginTop:20}}>Discover,Explore the product</div>
        <div>
            <img src={target} style={{width:100}} />
        </div>
        <div style={{fontFamily:'bradley hand,cursive',fontSize:15,fontWeight:300,color:'black',marginTop:70}}>Effective strategies to help <br/> you reach customers</div>
      </div>
    </div>

   
  </div>
</div>
            </div>
       </div>
    </div>
    </div>
   
 )

 export default Section2