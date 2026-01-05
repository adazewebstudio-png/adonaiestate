import React from 'react';
import EstateLayout from '../../components/EstateLayout';

const UhasFloridaCity = () => {
    return (
        <EstateLayout
            title="UHAS Florida City"
            location="Ho, Volta Region"
            description="A vibrant and youthful community designed for modern lifestyles, located just minutes away from the University of Health and Allied Sciences (UHAS)."
            features={[
                'Proximity to UHAS Campus',
                'Ideal for Student Hostels',
                'Fast Developing Area',
                'Close to Teaching Hospital',
                'Scenic Mountain Views',
                'Litigation Free'
            ]}
            imagePlaceholder="UHAS Florida City Image"
            heroImage="/uhas_florida_city_main.jpg"
        />
    );
};

export default UhasFloridaCity;
