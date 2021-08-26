import MediaSection from './MediaSection';

const episodeDetails=[
    
    {
        title:"The Abominable Bride",
        description:"Sherlock, under the influence of drugs, enters his mind palace to solve a case from Victorian times about a bride shooting herself in the head and rising from the grave to kill her husband.",
        url:"https://www.youtube.com/embed/FO0d0nq0Ud8?autoplay=0&mute=1"
    }
]
function SeasonSpecialSection(){
    return(
        <div style={{"fontFamily":"cursive"}}>
            <h1 className="text-center" style={{"color":"gray"}}>NEW YEAR SPECIAL EPISODE (2016)</h1>
            <MediaSection content={episodeDetails}/>
        </div>
    );
}
export default SeasonSpecialSection;