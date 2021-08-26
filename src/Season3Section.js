import MediaSection from './MediaSection';

const episodeDetails=[
    {
        title:"Episode 1- The Empty Hearse",
        description:"Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. He tries to convince John—who has moved on and now has a girlfriend, Mary Morstan (Amanda Abbington)—to help; however, John is angry that Sherlock did not tell him he was alive. Will this duo be back together?",
        url:"https://www.youtube.com/embed/O7cKIjNIPoY?autoplay=0&mute=1"
    },
    {
        title:"Episode 2- The Sign of Three",
        description:"It is John and Mary's wedding day and Sherlock is daunted by the task of delivering a Best Man's speech. As part of the speech, he recounts cases they have worked on including a soldier being stalked and somehow stabbed in a locked shower, a ghost dating women he dubs 'The Mayfly Man', the last being part of John's disastrous stag night, among others. Before his speech ends, he realises that a murderer is present among with a target. Will Sherlock save the day?",
        url:"https://www.youtube.com/embed/N-lMgIg2p1c?autoplay=0&mute=1"
    },
    {
        title:"Episode 3 -His Last Vow",
        description:"Stolen letters lead Sherlock into conflict with Charles Augustus Magnussen, 'the Napoleon of blackmail' who knows the personal weakness of every person of importance in the Western world. During the investigation Sherlock is shot. Will he survive or is this the end?",
        url:"https://www.youtube.com/embed/LI7T69cA3Kg?autoplay=0&mute=1"
    }
]
function Season3Section(){
    return(
        <div style={{"fontFamily":"cursive"}}>
            <h1 className="text-center" style={{"color":"gray"}}>SEASON - 3 (2014)</h1>
            <MediaSection content={episodeDetails}/>
        </div>
    );
}
export default Season3Section;