import React from 'react';

const NovedadItem = (props) => {
    const {title, subtitle, imagen, body} = props;
    return (
        <div className = "novedades">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            {imagen && <img src={imagen} width={200}  alt=""/>}
            <div dangerouslySetInnerHTML = {{__html: body}} />
            <hr />
        </div>
    );
}

export default NovedadItem;