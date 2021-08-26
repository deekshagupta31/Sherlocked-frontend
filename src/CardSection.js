import {Link as ReactLink} from 'react-router-dom';

function CardSection(props){
    return(
        <div className="container-fluid text-center">
            <div className="row ">
                {
                    props.content.map(
                        function(element){
                            return(
                                <div className="col-sm-2" style={{"MozMarginStart":"100"}}>
                                <div className="wrapper">
                                    <div className="card card-block text-xs-center">
                                    <img src={element.image}/>
                                    <p className="card-text">{element.text}</p>
                                    <div>
                                    <ReactLink className="btn btn-success mx-1" to={element.url}>Click For More Details</ReactLink></div>
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
export default CardSection;