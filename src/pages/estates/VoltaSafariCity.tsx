import React from 'react';
import EstateLayout from '../../components/EstateLayout';

const VoltaSafariCity = () => {
    return (
        <EstateLayout
            title="Volta Safari City"
            location="Sogakope, Volta Region"
            description="Experience the magic of the Volta River. Eco-friendly riverside lodges and homes designed for nature lovers and those seeking a resort-style life."
            features={[
                'Direct River Access',
                'Eco-Friendly Design',
                'Resort Style Living',
                'Water Sports Activities',
                'Serene Atmosphere',
                'Tourist Attraction Proximity'
            ]}
            imagePlaceholder="Volta Safari City Image"
            heroImage="/volta_safari_city_main.jpg"
        />
    );
};

export default VoltaSafariCity;
