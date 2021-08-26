// to display season detail
function MediaSection(props) {
    return (
        <div className="container py-5">
            {
                props.content.map(
                    function(element, index) {

                        let rowOrder = "";
                        if( index % 2 === 0) {
                            rowOrder = "";
                        } else {
                            rowOrder = "flex-row-reverse";
                        }

                        return (
                            <div>                                
                                <div className={"row " + rowOrder}>
                                    <div className="col-12 col-lg-7">
                                        <p className="display-6 mt-5">{element.title}</p>
                                        <p>{element.description}</p>
                                    </div>
                                    <div className="col-12 col-lg-5">
                                    <iframe  width="420" height="345" src={element.url}>
                                      </iframe> 
                                    </div>
                                
                                </div>
                                <hr style={ {"margin": "80px 0px 80px 0px"}} />
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default MediaSection;