import React from 'react';
import '../stylesheets/CardStyle.css';
import FlippyCard from './FlippyCard';

class Card extends React.Component {
    render(){
        return(
            <div className="col-sm-6 col-lg-3 p-3">
    				<div className="card">
    					<FlippyCard/>
    				</div>
    			</div>
        );
    }
}
export default Card;