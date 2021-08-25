
// 4 season 1 special card--- click here and detail about each episode--make boxes.. new page


import CommentSection from './CommentSection';
import RecommendationSection from "./RecommendationSection";

const recommendData=[
    {
        image:"./truedetecive.jpg",
        url:"https://www.youtube.com/watch?v=JOLbeYKxh7U"
    },
    {
        image:"./peakybinder.jpg",
        url:"https://www.youtube.com/watch?v=JwXfVGjSz-4"
    },
    {
        image:"./mentalist.jpg",
        url:"https://www.youtube.com/watch?v=tCpWApgVqbc"
    },
    {
        image:"./blackmirror.jpg",
        url:"https://www.youtube.com/watch?v=nSDviEdvw4U"
    }
  ]


function ProfileScreen(){
    //HISTORY
   return(
       <div>
          <nav class="navbar py-3 my-3 px-3">
            <div class="container-fluid">
                <h1>SHERLOCK</h1>
                <div><img src="./Capture.png" class="img-fluid"/></div>
              <div>        
              <h1>HOLMES</h1>
              </div>
            </div>
          </nav>
          <div  className="container">
    <div className="row">
      <div class="col-12 col-sm-4 ">
        <h5 className=" my-3 mx-3 text-left">RECOMMENDATION</h5>
        <RecommendationSection content={recommendData}/>
    </div>
    <div class="col-12 col-sm-8 ">
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light px-4 my-3 mx-3">
      <iframe  width="420" height="345" src="https://www.youtube.com//embed/xK7S9mrFWL4?autoplay=1&mute=1">
      </iframe>
      </div>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light px-4 my-3 mx-3">
        <h4>Synposis</h4>
        <p style={{"wordWrap":"break-word"}}>Sherlock depicts "consulting detective" Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr. John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps. Although Metropolitan Police Service Detective Inspector Greg Lestrade (Rupert Graves) and others are suspicious of Holmes at first, over time, his exceptional intellect and bold powers of observation persuade them of his value. In part through Watson's blog documenting their adventures, Holmes becomes a reluctant celebrity with the press reporting on his cases and eccentric personal life. Both ordinary people and the British government ask for his help.

Although the series depicts a variety of crimes and perpetrators, Holmes's conflict with his archenemy Jim Moriarty (Andrew Scott) is a recurring feature. Molly Hooper (Louise Brealey), a pathologist at St. Bart's Hospital, occasionally assists Holmes in his cases. Other recurring roles include Una Stubbs as Mrs. Hudson, Holmes and Watson's landlady, and series co-creator Mark Gatiss as Holmes's elder brother Mycroft.</p>
      </div>
      <div class="d-flex flex-column flex-shrink-0 p-3 bg-light px-4 my-3 mx-3"> 
           <h5>ADD YOUR REVIEW OR COMMENT</h5>
          <CommentSection/>
      </div>
  </div>

  </div>

</div>

        
       </div>
    );
}
export default ProfileScreen;