import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewCart = (props) => {
    const addPeople = props.add;
    return (
        <div className="border">
            <ol className="pr-1">
            {
                addPeople.map((x) => <li>{x}</li>)
            }
            </ol>
        </div>
    );
};

export default ViewCart;