import React from "react";
import logo from "../Images/logo.png"
import "./Navbar.css"

const Navbar = ({ sticky }) => (
   <div className= {sticky ? "navbar navbar-sticky" : "navbar"  }  
   style={{backgroundColor:'#E3EEE9',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
     
     <div className="uk-visible@l uk-visible@m" >
        <ul style={{display:'flex',flexDirection:'row',listStyle:'none',margin:0,padding:0,justifyContent:'space-between'}}>
            <li>
             <img src={logo} style={{width:50}} /> 
            </li>

            <li style={{color:'#85161F',fontSize:35,fontFamily:'bradley hand,cursive',fontWeight:900}}>Malvino</li>

            

            
            <li  style={{margin:'0 20',transition:'0.5s'}}><a  href="#" style={{display:'block',
            position:'relative', 
            textDecoration:'none',
            padding:15,
            transition:'0.5s',
            left:20,
            color:'black',
            fontSize:15,
            fontFamily:'sans-serif',
            fontWeight:500
            }}>Home</a></li>
            <li  style={{margin:'0 20',transition:'0.5s'}}><a href="#" style={{display:'block',
            position:'relative',
            textDecoration:'none',
            padding:15,
            transition:'0.5s',
            left:20,
            color:'black',
            fontSize:15,
            fontFamily:'sans-serif',
            fontWeight:500
            }} >About</a></li>
            <li style={{margin:'0 20',transition:'0.5s'}}><a href="#scrollspyHeading2" style={{display:'block',
            position:'relative',
            textDecoration:'none',
            padding:15,
            transition:'0.5s',
            left:20,
            color:'black',
            fontSize:15,
            fontFamily:'sans-serif',
            fontWeight:500
            }}>Services</a></li>
            <li style={{margin:'0 20',transition:'0.5s'}}><a href="#scrollspyHeading1" style={{display:'block',
            position:'relative',
            textDecoration:'none',
            padding:15,
            transition:'0.5s',
            left:20,
            color:'black',
            fontSize:15,
            fontFamily:'sans-serif',
            fontWeight:500
            }}>Case Study</a></li>
            <li  style={{margin:'0 20',transition:'0.5s'}}><a href="#scrollspyHeading3" style={{display:'block',
            position:'relative',
            textDecoration:'none',
            padding:15,
            transition:'0.5s',
            left:20,
            color:'black',
            fontSize:15,
            fontFamily:'sans-serif',
            fontWeight:500
            }}>Blog</a></li>
            <li style={{margin:'0 20',transition:'0.5s'}}><a href="#" style={{display:'block',
            position:'relative',
            textDecoration:'none',
            padding:15,
            
            transition:'0.5s',
            left:20,
            color:'black',
            fontSize:15,
            fontFamily:'sans-serif',
            fontWeight:500
            }} >Contact</a></li>
            
        </ul>
     </div>

     <div className="uk-visible@l uk-visible@m">
        <ul style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <li style={{color:'#85161F',fontSize:20,fontFamily:'bradley hand,cursive',fontWeight:600,listStyle:'none',marginRight:30}}>Call Us:+28945674537628</li>
            <button class="uk-button uk-button-default" style={{borderRadius:10,color:'black',fontWeight:600,fontStyle:'bradley hand,cursive'}} >Lets Talk</button>
        </ul>
     </div>
     
    
     <div className=" uk-hidden@l uk-hidden@m " >
        <ul style={{display:'flex',flexDirection:'column',listStyle:'none',margin:0,padding:0,lineHeight:0.1}}>
            <ul style={{display:'flex',flexDirection:'row',listStyle:'none',justifyContent:'flex-start'}}>
            <li>
             <img src={logo} style={{width:50}} /> 
            </li>

            <div style={{marginTop:15}} ><li style={{color:'#85161F',fontSize:40,fontFamily:'bradley hand,cursive',fontWeight:900,marginLeft:50}}>Malvino</li></div>
            <li style={{color:'#85161F',fontSize:11,fontFamily:'bradley hand,cursive',fontWeight:600,listStyle:'none',marginRight:30}}>Call:+28945674537628</li>
            </ul>

            

            
            <ul style={{display:'flex',flexDirection:'row',listStyle:'none',margin:0,padding:0,lineHeight:0.1}}>
            <li  style={{transition:'0.5s'}}><a  href="#" style={{display:'block',
            position:'relative', 
            textDecoration:'none',
            padding:15,
            transition:'0.5s',
            left:10,
            color:'black',
            fontSize:13,
            fontFamily:'sans-serif',
            fontWeight:500
            }}>Home</a></li>
            <li  style={{margin:'0 20',transition:'0.5s'}}><a href="#" style={{display:'block',
            position:'relative',
            textDecoration:'none',
            padding:15,
            transition:'0.5s',
            left:10,
            color:'black',
            fontSize:13,
            fontFamily:'sans-serif',
            fontWeight:500
            }} >About</a></li>
            <li style={{margin:'0 20',transition:'0.5s'}}><a href="#scrollspyHeading2" style={{display:'block',
            position:'relative',
            textDecoration:'none',
            padding:15,
            transition:'0.5s',
            left:10,
            color:'black',
            fontSize:13,
            fontFamily:'sans-serif',
            fontWeight:500
            }}>Services</a></li>
            <li style={{margin:'0 20',transition:'0.5s'}}><a href="#scrollspyHeading1" style={{display:'block',
            position:'relative',
            textDecoration:'none',
            padding:15,
            transition:'0.5s',
            left:10,
            color:'black',
            fontSize:13,
            fontFamily:'sans-serif',
            fontWeight:500
            }}> Study</a></li>
            <li  style={{margin:'0 20',transition:'0.5s'}}><a href="#scrollspyHeading3" style={{display:'block',
            position:'relative',
            textDecoration:'none',
            padding:15,
            transition:'0.5s',
            left:10,
            color:'black',
            fontSize:13,
            fontFamily:'sans-serif',
            fontWeight:500
            }}>Blog</a></li>
            <li style={{margin:'0 20',transition:'0.5s'}}><a href="#" style={{display:'block',
            position:'relative',
            textDecoration:'none',
            padding:15,
            
            transition:'0.5s',
            left:10,
            color:'black',
            fontSize:13,
            fontFamily:'sans-serif',
            fontWeight:500
            }} >Contact</a></li>
            
            </ul>
        </ul>
     </div>

    
 

     
     
   </div>
  )
export default Navbar