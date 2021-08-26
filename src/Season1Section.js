import MediaSection from './MediaSection';

const episodeDetails=[
    {
        title:"Episode 1- A Study in Pink",
        description:"The police investigate a series of deaths related to people who all appear to have committed suicide by taking a poisonous pill. They turn to their unofficial consultant, Sherlock Holmes, who deduces various elements pointing to a serial killer. Meanwhile, Holmes is introduced to John Watson, a former soldier who served in Afghanistan, and the pair immediately move into a flat in Baker Street. John Watson slowly gets to know and trust Sherlock despite police officer Sally Donovan (Vinette Robinson) warning him that Holmes is a psychopath and will one day be responsible for murder. Will this new friendship survive as the plt thickens.",
        url:"https://www.youtube.com/embed/IrBKwzL3K7s?autoplay=0&mute=1"
    },
    {
        title:"Episode 2- The Blind Banker",
        description:"Sherlock is hired by an old friend to investigate a mysterious break-in at a bank in the City. He discovers that symbols spray-painted onto an office wall are a coded message intended for an employee of the bank, who is later discovered dead in his flat. The next day, a journalist is killed and the same symbols are found nearby. Sherlock and John follow a trail of clues to unwrap the mystery.",
        url:"https://www.youtube.com/embed/y_GGbRkqqFg?autoplay=0&mute=1"
    },
    {
        title:"Episode 3- The Great Game",
        description:"Sherlock is commissioned by Mycroft to investigate the suspicious death of a government employee, who was working on a top-secret defence project: the Bruce-Partington Project.[12] After rejecting the case and handing it over to John, Sherlock begins to be taunted by a criminal who puts his victims into explosive vests and sets Sherlock deadlines to solve the apparently unrelated cases, which include a twenty-year-old cold case involving the shoes of a drowned boy, the disappearance of a businessman, the death of a TV personality, and the assassination of a museum security guard by the Golem.Will Sherlock unmask the criminal and put a stop at this.",
        url:"https://www.youtube.com/embed/AviDWKhmVdU?autoplay=0&mute=1"
    }// 
    //
]
function Season1Section(){
    return(
        <div style={{"fontFamily":"cursive"}}>
            <h1 className="text-center" style={{"color":"gray"}}>SEASON - 1 (2010)</h1>
            <MediaSection content={episodeDetails}/>
        </div>
    );
}
export default Season1Section;