import MediaSection from './MediaSection';

const episodeDetails=[
    {
        title:"The Six Thatchers",
        description:"Sherlock is asked to investigate the mysterious death of a young man, which he solves quickly but he is led into another mystery when a bust of Margaret Thatcher owned by the dead man's father is smashed. Further busts are smashed and Sherlock discovers that the mystery is linked to Mary and her past as a government agent.",
        url:""
    },
    {
        title:"The Lying Detective",
        description:"Sherlock is contacted by the daughter of entrepreneur Culverton Smith, who she claims has confessed to a murder, but she does not know who the victim was as her father has used a drug on her that inhibits memory. Sherlock deduces that her father is a serial killer and sets out to expose him, but he has returned to narcotics use since Mary's death and unable to clearly distinguish his own thoughts from reality.",
        url:""
    },
    {
        title:"The Final Problem",
        description:"Sherlock and Watson – who had been shot with a tranquilizer by Eurus – trick Mycroft into acknowledging her existence.Eurus steps up her attacks on Sherlock, subjects the trio to a series of ordeals, testing their morals.",
        url:""
    }
]
function Season4Section(){
    return(
        <div>
            <h1>Season 4</h1>
            <MediaSection content={episodeDetails}/>
        </div>
    );
}
export default Season4Section;