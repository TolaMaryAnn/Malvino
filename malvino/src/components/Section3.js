import React from "react"
import women from "../Images/women.jpg"
import "./Section2.css"

const Section3 = () => (
   <div>
         <div  className="uk-height-viewport uk-visible@l" style={{backgroundColor:'#E3EEE9'}}>
        <div className="container" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <div>
                <img src={women} style={{width:400,marginTop:150}} />
            </div>

            <div className="abu" style={{marginTop:250}}>
                <div id="scrollspyHeading2" style={{fontSize:15,color:' #85161F',fontFamily:'sans-serif',fontWeight:200}} >ABOUT US</div>
                <div style={{fontFamily:'bradley hand,cursive',fontSize:35,fontWeight:600,color:'black',marginTop:20}}>
                We Create a Steps to Build a <br/> Successful Digital Product
                </div>
                <div style={{color:'black',fontFamily:'sans-serif',fontSize:15,fontWeight:300,marginTop:20}}>
                With over 50 years of combined experience, our mission is to design <br/> with your values and vision in mind. We’re out to create purposeful <br/> spaces that balance art and creativity with science and strategy.<br/>
                    <br/>
                We’re out to create purposeful spaces that balance art and creativity <br/> with science and strategy.
                </div>

                <div className="explore" style={{color:'#85161F',fontWeight:900,fontFamily:'bradley hand,cursive',fontSize:20}}>Explore More</div>
            </div>
        </div>
        </div>

        <div  className="uk-hidden@l uk-hidden@m" style={{backgroundColor:'#E3EEE9'}}>
        
        <div className="container" style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
       
            <div>
               
              
             <img src={women} style={{width:300,marginTop:150,borderRadius:50}} />
            </div>

            <div className="abu">
            <div id="scrollspyHeading2" style={{fontSize:12,color:' #85161F',fontFamily:'sans-serif',fontWeight:200}} >ABOUT US</div>
                <div style={{fontFamily:'bradley hand,cursive',fontSize:35,fontWeight:600,color:'black',marginTop:20}}>
                We Create a Steps to Build a <br/> Successful Digital Product
                </div>
                <div style={{color:'black',fontFamily:'sans-serif',fontSize:15,fontWeight:300,marginTop:20}}>
                With over 50 years of combined experience, our mission is to design <br/> with your values and vision in mind. We’re out to create purposeful <br/> spaces that balance art and creativity with science and strategy.<br/>
                    <br/>
                We’re out to create purposeful spaces that balance art and creativity <br/> with science and strategy.
                </div>

                <div className="explore" style={{color:'#85161F',fontWeight:900,fontFamily:'bradley hand,cursive',fontSize:20}}>Explore More</div>
            </div>
        </div>
    </div>
   </div>
)

export default Section3