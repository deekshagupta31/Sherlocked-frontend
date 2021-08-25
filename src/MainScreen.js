import {Link as ReactLink} from 'react-router-dom';


function MainScreen() {
  return (
    <div>
       <header className="py-3 my-3 mx-3 ">
                <div>    
                    <h4 className="underlinestyle blog-header-logo text-dark text-center display-6" >SHERLOCKED </h4>
                </div>             
            </header>  
            <div className="px-4 my-3 mx-3 text-center">           
           <div className="col-lg-6 mx-auto">
               <h4>Crime/Mystery- English Series</h4>
               <p className="lead expandstyple">Create By-Mark Gatiss , Steven Moffat<br/>Staring -Benedict Cumberbatch ,Martin Freeman </p>       
          </div>
           <div className="mb-2">
            <p className="lead" >Based on	Sherlock Holmes by Sir Arthur Conan Doyle 
            </p>
        </div>
           <div>
             <div className="container px-5">
               <img src="./sherlocked.jpeg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="40%" loading="lazy">
             </img>
           </div>
        </div> 
        </div>
        <div className="d=flex">
                    <ReactLink className="btn btn-primary mx-1" to="/register">Register</ReactLink>
                    <ReactLink className="btn btn-primary mx-1" to="/login"> Sign In</ReactLink>
                </div>
          
    </div>
  );
}

export default MainScreen;
