import React from 'react';
import EstateLayout from '../../components/EstateLayout';

const LeadersCity = () => {
    return (
        <EstateLayout
            title="Leaders City"
            location="Ho, Volta Region"
            description="The heart of commercial and residential excellence. Strategically positioned for businesses and families looking for easy accessibility and growth."
            features={[
                'Commercial & Residential Plots',
                'Center of Ho Township',
                'High Traffic Area',
                'Perfect for Office Complexes',
                'Easy Access to Main Roads',
                'Well Demarcated'
            ]}
            imagePlaceholder="Leaders City Image"
            heroImage="/leaders_city_main.jpg"
        />
    );
};

export default LeadersCity;
