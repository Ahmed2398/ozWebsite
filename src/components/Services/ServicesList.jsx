import React from 'react';

const ServicesList = ({id,title, text, img}) => {
    return (
        <>
            <div className="features" key={id}>
                <img src={img} className="mb-3" title={title}/>
                    <h2 className="bold-head mt-3">{title}</h2>
                    <p className="text-content text-left mt-4">{text}</p>
            </div>
        </>
    );
};

export default ServicesList;