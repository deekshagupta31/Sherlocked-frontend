import CardCastSection from "./CardCastSection";
const seasonCardDetails=[
  {
    image:"./benedict-cumberbatch-premiere-disney-marvels-260nw-1075669214.jpg",
    text:"SEASON 1",
    url:"/season1"
  },
  {
    image:"./martin.jpg",
    text:"SEASON 2",
    url:"/season2"
  },
  {
    image:"./sherlock-3.jpg",
    text:"SEASON 3",
    url:"/season3"
  },
  {
    image:"./sherlock-holmes-season-4.jpg",
    text:"SEASON 4",
    url:"/season4"
  },
  {
    image:"./xmas.jpg",
    text:"CHRISTMAS SPECIAL",
    url:"/seasonxmas"
  },
  {
    image:"./sherlock-special.jpg",
    text:"NEW YEAR SPECIAL",
    url:"/seasonspecial"
  },
  
];

function test(){
  return(
   <div>
     <CardCastSection content={seasonCardDetails}/>
   </div>
   
    )
}
export default test;