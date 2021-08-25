import MediaSection from './MediaSection';

const episodeDetails=[
    {
        title:"Christmas Special- Many Happy Returns",
        description:"Anderson believes that Sherlock is still alive after the Reichenbach fall. He confides in Lestrade and tells him his theory for his existence. Anderson believes a string of events ranging from Tibet to India to Germany involve Sherlock's assistance, and this is due to Sherlock not being able to stop investigating.",
        url:"https://www.youtube.com/embed/JwntNANJCOE?autoplay=0&mute=1"
    },
    {
        title:"The Abominable Bride",
        description:"Sherlock, under the influence of drugs, enters his mind palace to solve a case from Victorian times about a bride shooting herself in the head and rising from the grave to kill her husband.",
        url:"https://www.youtube.com/embed/FO0d0nq0Ud8?autoplay=0&mute=1"
    }
]
function SeasonSpecialSection(){
    return(
        <div>
            <h1>Special Episode</h1>
            <MediaSection content={episodeDetails}/>
        </div>
    );
}
export default SeasonSpecialSection;