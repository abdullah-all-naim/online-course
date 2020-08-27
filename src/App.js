import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './Components/Courses/Courses';
import { useState } from 'react';
import fake from './Components/FakeData/fake';
import AddedCourse from './Components/AddedCourse/AddedCourse';
import ViewCart from './Components/ViewCart/ViewCart';


function App() { 
  const [cart, setCart] = useState(fake);
  const [enroll, setEnroll] = useState([]);
  const [enrolledCourse,setEnrolledCourse] = useState([]); 

  const addCourse = (course,product) => {
    let newCart = [...enroll,course];
    setEnroll(newCart);
    const newAdd = [...enrolledCourse, product];
    setEnrolledCourse(newAdd);
  }
  
  return (
    <div className="container pt-5 d-flex">
      <div className="">
        <h4 className="ml-5">Hi! Welcome To</h4>
        <h3 className="text-center mb-5 pb-5"> Full Stack Web Development Crash Courses Section</h3>
        <div>
          {
           cart.map((item) => (<Courses item={item} addCourse={addCourse}></Courses>))
          }
        </div>
      </div>
      <div className="border-left ml-4 pl-4">
      <h4>Total Courses : 13</h4>
      <h5> Enrolled Courses : {enroll.length}</h5>
      <h5>Your Courses :</h5>
      
      <ViewCart add ={enrolledCourse}></ViewCart>
      <AddedCourse enroll={enroll}></AddedCourse>
      </div>
    </div>

  );
}

export default App;
