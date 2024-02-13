import React, {useState} from "react";
import data from "../Data/data";
import Review from "./Review";

const App = ()=>{

    // const [currentReview, setCurrentReview] = useState(data[0]);

    // const [currentId, setCurrentId] = useState(0);

    // function handlePrevious(){
    //     if(currentId == 0){
    //         return;
    //     }
    //     let id = currentId;
    //     setCurrentId(currentId-1);
    //     setCurrentReview(data[id-1]);
    // }

    // function handleNext(){
    //     if(currentId == 3){
    //         return;
    //     }
    //     let id = currentId;
    //     setCurrentId(currentId+1);
    //     setCurrentReview(data[id+1]);
    // }


    // function handleRandom(){
    //     setCurrentId(0);
    //     setCurrentReview(data[0]);
    // }

    return(
        <section className="container">
            <main>
            <h1 id="review-heading">Our Reviews</h1>
            </main>
            <Review/>
        </section>
    )
}

export default App;

