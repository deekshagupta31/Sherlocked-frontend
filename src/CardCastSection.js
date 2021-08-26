function CardCastSection(props){
    return(
        <div className="container-fluid text-center">
        <div class="row ">
            {
                props.content.map(
                    function(element){
                        return(
                            <div className="col-sm-2" style={{"MozMarginStart":"100"}}>
                            <div className="wrapper">
                                <div className="card card-block text-xs-center">
                                <img src={element.image} style={{"width":"100%"}}/>
                                <p className="card-text">{element.text}</p>
                                <div>
                                <div class="card-footer bg-transparent border-success"><a href={element.url}>Wikipedia</a></div>
                            </div>
                            </div>
                        </div>

                    </div>                    
                )
            })}
        </div>
    </div>
    );
}
export default CardCastSection;