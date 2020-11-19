const PokemonCard = props => {
    const{pokemon} = props;

    return(
        <div className="card">
            <div className = "card-body"></div>
            <h2 className="card-title">{pokemon.name}</h2>
        </div>
    );

}

export default PokemonCard;