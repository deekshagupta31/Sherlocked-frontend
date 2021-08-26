import {Link as ReactLink} from 'react-router-dom';


function MainScreen() {
  return (
    <div style={{"fontFamily":"cursive"}}>
       <header className="py-3 my-3 mx-3 ">
                <div >
                    <h4 className="underlinestyle blog-header-logo text-dark text-center display-6" style={{"textDecoration":"underline" , "textShadow":"revert"}} >SHERLOCKED <img style ={{"width":"100px", "height":"100px"}} src="./CaptureLogo.png"/></h4>
                  
                    
                </div>             
            </header>  
            <div className="px-4 my-3 mx-3 text-center">           
           <div className="col-lg-6 mx-auto">
               <h4>Crime/Mystery- British Series [IMDB : 9.1/10]</h4>
               <p className="lead expandstyple">Created By-Mark Gatiss , Steven Moffat<br/>Starring -Benedict Cumberbatch ,Martin Freeman </p>       
          </div>
           <div className="mb-2">
            <p className="lead" >Based on	Sherlock Holmes by <a href="https://en.wikipedia.org/wiki/Arthur_Conan_Doyle" target="_blank+9+"> Sir Arthur Conan Doyle</a> 
            </p>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="row">
          <div className="col-12 col-sm-6 ">
          <img src="./3008sherlockstampscompositev1.jpg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="100%" loading="lazy">
                  </img>
          </div>
          <div className="col-12 col-sm-6 ">
            <p style={{"wordWrap":"break-word"}}>A modernised series of adaptations of the Sherlock Holmes novels by Sir Arthur Conan Doyle. John Watson (played by Martin Freeman), an army doctor, is wounded in Afghanistan and invalided out of the Army. Back in London his search for a place to stay leads him to share a flat with Sherlock Holmes (Benedict Cumberbatch), a brilliant but eccentric private detective. Together they solve baffling, and often bizarre, murder mysteries. They also have to compete with Holmes' nemesis, the criminal genius Moriarty.<br/>—grantss</p>
          </div>

         </div>


          
        
        </div>
       
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center px-3 mx-3">
                    <ReactLink className="btn btn-outline-primary btn-lg px-4 gap-3" to="/register"><img style ={{"width":"50px", "height":"50px"}} src="./icons8-check.gif"/>  Register</ReactLink>
                    <ReactLink className="btn btn-outline-primary btn-lg px-4" to="/login"><img style ={{"width":"50px", "height":"50px"}} src="./icons8-lock (3).gif"/> Log In</ReactLink>
                </div>
                
          
    </div>
  );
}

export default MainScreen;
