import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Courses = (props) => {

    const {heading,instructor,price,image} = props.item;
    let addCourse = props.addCourse;
    return (
        <div>
            <div className="card mb-3" style={{ width: "810px" }}>
                <div className="row no-gutters">
                    <div className="col-md-4 d-flex align-items-center pl-2">
                        <img src={image} className="card-img" style={{ height: "188px" }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Introduction To {heading}</h5>
                            <p className="text-muted">By {instructor}</p>
                            <p style={{ width: "190%" }}>Welcome to Introduction to {heading}! In this course you will learn how to style your pages by taking advantage of the power of {props.heading} . We will focus on both proper syntax (how to write your styling rules) and the importance of accessibility design (making sure that your style enhances your site.</p>
                        </div>
                        <div className="d-flex">
                            <h5 className="mx-4 mt-2">Price : $ {price}</h5>
                            <button className="btn btn-primary mb-3" onClick = {() => addCourse(price,heading)}>Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;