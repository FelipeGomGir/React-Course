import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle}) =>{
    //Si las funciones no tienen dependencia de estar dentro es mejor sacarlo para que react no este continuamente renderizando eso que no cambia. 
    return(
    <>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    </>
    )
}

FirstApp.propTypes ={
    title: PropTypes.string.isRequired
}