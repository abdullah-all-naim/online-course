import React from 'react';

const AddedCourse = (props) => {
    const enroll = props.enroll;
    let totalPrice = 0;
    for (let i = 0; i < enroll.length; i++) {
        const element = enroll[i];
        totalPrice = totalPrice + element;
        
    }

    return (
        <div>   
            <h2>Total Price :$ {totalPrice}</h2>   
        </div>
    );
};

export default AddedCourse;