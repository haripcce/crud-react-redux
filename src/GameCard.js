import React from 'react';
import PropTypes from 'prop-types';
import { NavLink} from 'react-router-dom';
const GameCard = ({ game ,deleteGame}) => {
    return (
      <div className="ui card">`
      <div className="image">
      	<img src={game.cover} alt="game cover"/>
      </div>
      <div className="content">
	      	<div className="header">
	      	{game.title}
	     	</div>
      </div>
     
      <div className="extra content">
	      	<div className="ui two buttons">
	      	<NavLink className="ui basic button green" to={'/game/'+game._id}>Edit</NavLink>
	      	<div className="ui basic button red" onClick={() => deleteGame(game._id)}>Delete</div>
	     	</div>
      </div>
      </div>
    );
};

GameCard.propTypes = {
  game : PropTypes.object.isRequired
};

export default GameCard;
