

import CardCastSection from "./CardCastSection";
import CommentSection from './CommentSection';
import CardSection from './CardSection';
import RecommendationSection from "./RecommendationSection";
const castDetails=[{
  image:"./sherlock_img.png",
  text:"Benedict Cumberbatch (Sherlock)",
  url:"https://en.wikipedia.org/wiki/Benedict_Cumberbatch"
  },
  {
  image:"./johnwatson.png",
  text:"Martin Freeman (Dr. John Watson)",
  url:"https://en.wikipedia.org/wiki/Martin_Freeman"
  },
  {
  image:"./microft.png",
  text:"Mark Gatiss (Mycroft Holmes)",
  url:"https://en.wikipedia.org/wiki/Mark_Gatiss"
  },
  {
  image:"./moriaty.png",
  text:"Andrew Scott (Jim Moriarty )",
  url:"https://en.wikipedia.org/wiki/Andrew_Scott_(actor)"
  },
  {
  image:"./mrshutson.png",
  text:"Una Stubbs (Mrs. Hudson )",
  url:"https://en.wikipedia.org/wiki/Una_Stubbs"
  },
  {
  image:"./johnwife.png",
  text:"Amanda Abbington (Mary) ",
  url:""
  },
  {
  image:"./molly.png",
  text:"	Louise Brealey (Molly Hooper)",
  url:"https://en.wikipedia.org/wiki/Amanda_Abbington"
  }
];

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
  ];
  const seasonCardDetails=[
    {
      image:"./sherlock-s01.jpg",
      text:"SEASON 1",
      url:"/season1"
    },
    {
      image:"./sherlock-s2.jpg",
      text:"SEASON 2",
      url:"/season2"
    },
    {
      image:"./xmas.jpg",
      text:"CHRISTMAS SPECIAL",
      url:"/seasonxmas"
    },
    {
      image:"./sherlock-3.jpg",
      text:"SEASON 3",
      url:"/season3"
    },
    {
      image:"./sherlock-special.jpg",
      text:"NEW YEAR SPECIAL",
      url:"/seasonspecial"
    },
    {
      image:"./sherlock-holmes-season-4.jpg",
      text:"SEASON 4",
      url:"/season4"
    },  
    
  ];

  
function ProfileScreen(){
    
   return(
       <div style={{"fontFamily":"cursive"}}>
          <nav className="navbar py-3 my-3 px-3">
            <div className="container-fluid">
                <h1>SHERLOCK</h1>
                <div><img src="./Capture.png" className="img-fluid"/></div>
              <div>        
              <h1>HOLMES</h1>
              </div>
            </div>
          </nav>
          
          <div>
            <h5 className="text-center" style={{"fontStyle":"italic"}}>'I'm not a psychopath. I'm a high-functioning sociopath. Do your research'</h5>
          </div>
          <br/><br/>
            <CardSection content={seasonCardDetails}/>
         <br/><br/>
          <div  className="container">
    <div className="row">
    <div class="col-12 col-sm-4 ">
        <h5 className=" my-3  text-left">RECOMMENDATIONS</h5>
        <RecommendationSection content={recommendData}/>
    </div>

      
    <div className="col-12 col-sm-8 ">
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light px-4 my-3 mx-3">
      <iframe  width="100%" height="345" src="https://www.youtube.com//embed/xK7S9mrFWL4?autoplay=1&mute=1">
      </iframe>
      </div>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light px-4 my-3 mx-3">
        <h4>Synposis</h4>
        <br/>
        <p style={{"wordWrap":"break-word"}}>Sherlock depicts "consulting detective" Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr. John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps. Although Metropolitan Police Service Detective Inspector Greg Lestrade (Rupert Graves) and others are suspicious of Holmes at first, over time, his exceptional intellect and bold powers of observation persuade them of his value. In part through Watson's blog documenting their adventures, Holmes becomes a reluctant celebrity with the press reporting on his cases and eccentric personal life. Both ordinary people and the British government ask for his help.

Although the series depicts a variety of crimes and perpetrators, Holmes's conflict with his archenemy Jim Moriarty (Andrew Scott) is a recurring feature. Molly Hooper (Louise Brealey), a pathologist at St. Bart's Hospital, occasionally assists Holmes in his cases. Other recurring roles include Una Stubbs as Mrs. Hudson, Holmes and Watson's landlady, and series co-creator Mark Gatiss as Holmes's elder brother Mycroft.</p>
      </div>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light px-4 my-3 mx-3"> 
           <h5>ADD YOUR REVIEW OR COMMENT</h5>
          <CommentSection/>
      </div>
  </div>
  
  </div>

</div>
<br/><br/>
<div>
      <CardCastSection content={castDetails}/>
      
</div>
<br/><br/>

        
       </div>
    );
}
export default ProfileScreen;