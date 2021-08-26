import MediaSection from './MediaSection';

const episodeDetails=[{
    title:"Many Happy Returns",
    description:"Anderson believes that Sherlock is still alive after the Reichenbach fall. He confides in Lestrade and tells him his theory for his existence. Anderson believes a string of events ranging from Tibet to India to Germany involve Sherlock's assistance, and this is due to Sherlock not being able to stop investigating.",
    url:"https://www.youtube.com/embed/JwntNANJCOE?autoplay=0&mute=1"
}];


function SeasonChristmasSpecial(){
    return(
        <div style={{"fontFamily":"cursive"}}>
            <h1 className="text-center" style={{"color":"gray"}}>CHRISTMAS MIMI EPISODE (2013)</h1>
            <MediaSection content={episodeDetails}/>
        </div>
    );
}
export default SeasonChristmasSpecial;