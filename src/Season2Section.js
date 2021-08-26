import MediaSection from './MediaSection';

const episodeDetails=[
    {
        title:"Episode 1- A Scandal in Belgravia",
        description:" Mycroft hires Sherlock and John to retrieve compromising photos of a minor royal, which are held on the camera phone of Irene Adler (Lara Pulver), a ruthless and brilliant dominatrix who also trades in classified information extracted from her rich and powerful clients.",
        url:"https://www.youtube.com/embed/JE4wTmbyV8g?autoplay=0&mute=1"
    },
    {
        title:"Episode 2- The Hounds of Baskerville",
        description:"Sherlock and John are contacted by Henry Knight (Russell Tovey), a man traumatised by the death of his father by a monstrous hound on Dartmoor years before. Investigating Dewer's Hollow, a local spot where the beast was allegedly seen, as well as the nearby Ministry of Defence testing site Baskerville, Sherlock and John uncover a conspiracy.",
        url:"https://www.youtube.com/embed/bm78r2innnE?autoplay=0&mute=1"
    },
    {
        title:"Episode 3- The Reichenbach Fall",
        description:"Moriarty launches a simultaneous heist on the Tower of London, Bank of England, and Pentonville Prison, crimes for which he allows himself to be captured and put on trial. He secures not-guilty by intimidating the jury and visits Sherlock, explaining he still intends to 'burn' him, taunting him with a 'final problem' for him to solve. He also tries to destroy Sherlock's reputation. The two meet on the roof of a hospital, where Moriarty explains that assassins will kill John, Mrs. Hudson, and Lestrade if Sherlock does not commit suicide. What will Sherlock Do?",
        url:"https://www.youtube.com/embed/wVoo9RqrHtw?autoplay=0&mute=1"
    }
]
function Season2Section(){
    return(
        <div style={{"fontFamily":"cursive"}}>
            <h1 className="text-center" style={{"color":"gray"}}>SEASON - 2 (2012)</h1>
            <MediaSection content={episodeDetails}/>
        </div>
    );
}
export default Season2Section;