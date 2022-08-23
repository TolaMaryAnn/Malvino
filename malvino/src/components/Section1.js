
import React from "react"
import dollar from "../Images/dollar.png"

const Section1 = () => (
  <div>
     <div  className="uk-height-viewport uk-visible@l " style={{backgroundColor:'#E3EEE9'}}>
        <div className="container" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <div style={{marginTop:100}}>
                <div>
                <div class="uk-button uk-button-default" style={{fontFamily:'sans-serif',fontSize:12,fontWeight:300,backgroundColor:'white',color:'#85161F',fontWeight:500,borderRadius:20}}>Digital Marketing Expert</div>
                </div>

                
                    <div style={{fontFamily:'bradley hand,cursive',fontSize:60,fontWeight:600,color:'black',lineHeight:1,marginTop:20}}>
                    We bring you <br/> new customers
                    </div>

                    <div style={{fontFamily:'sans-serif',fontSize:20,fontWeight:200,color:'black',marginTop:25}}>
                    We build effective strategies to help you reach <br/> customers and prospects across the entire web.
                    </div>

                    <div>
                    <div class="uk-button uk-button-default" style={{fontFamily:'sans-serif',marginTop:30,fontSize:12,fontWeight:500,color:'black',fontWeight:900,borderRadius:40,backgroundImage:" linear-gradient(maroon, honeydew)",padding:'20 20'}}>Explore Service</div>
                    </div>
            </div>

            <div >
                <img src={dollar} style={{width:500,height:600}} />
            </div>
        </div>
    </div>

    <div  className=" uk-hidden@l uk-hidden@m" style={{backgroundColor:'#E3EEE9'}}>
        <div className="container" style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <div style={{marginTop:50}}>
                <div className="container" >
                    <img src={dollar} style={{width:300,height:400}} />
                </div>

                <div style={{marginTop:10}}>
                <div class=" " style={{fontFamily:'sans-serif',fontSize:12,fontWeight:300,color:'#85161F',fontWeight:500}}>Digital Marketing Expert</div>
                </div>

                
                    <div >
                    <div style={{fontFamily:'bradley hand,cursive',fontSize:40,fontWeight:600,color:'black',lineHeight:1,marginTop:20}}>
                    We bring you <br/> new customers
                    </div>
                    </div>

                    <div >
                    <div style={{fontFamily:'sans-serif',fontSize:15,fontWeight:200,color:'black',marginTop:25}}>
                    We build effective strategies to help you reach <br/> customers and prospects across the entire web.
                    </div>
                    </div>

                    <div>
                    <div class="uk-button uk-button-default" style={{fontFamily:'sans-serif',marginTop:30,fontSize:5,fontWeight:300,color:'black',fontWeight:900,borderRadius:40,backgroundImage:" linear-gradient(maroon, honeydew)",padding:'20 20'}}>Explore Service</div>
                    </div>
            </div>

           
        </div>
    </div>
  </div>


  
)

export default Section1