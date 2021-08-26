
function CardCastSection(props){
    return(
        <div className="container-fluid text-center">
            <div className="row ">
            <div className="col-sm-3" style={{"MozMarginStart":"100"}}>
                <br/><br/>
                <h4 className="text-center" style={{"fontStyle":"italic"}}>MAIN STARCAST</h4>
            <div className="wrapper">
                </div>
                </div>
                {
                    props.content.map(
                        function(element){
                            return(
                                <div className="col-sm-1" style={{"width":"10%"}}>
                                <div className="wrapper">
                                    <div className="card card-block text-xs-center">
                                    <img src={element.image} style={{"width":"100%"}} />
                                    <p className="card-text">{element.text}</p>
                                    <div>
                                    <div class="card-footer">
                                    <small class="text-muted"><a href={element.url} target="_blank">Wikipedia</a></small>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    );

}
export default CardCastSection;