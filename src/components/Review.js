import React, {useState} from "react";
import data from "../Data/data";


const Review = ()=>{

    const [currentReview, setCurrentReview] = useState(data[0]);

    const [currentId, setCurrentId] = useState(0);

    function handlePrevious(){
        if(currentId == 0){
            return;
        }
        let id = currentId;
        setCurrentId(currentId-1);
        setCurrentReview(data[id-1]);
    }

    function handleNext(){
        if(currentId == 3){
            return;
        }
        let id = currentId;
        setCurrentId(currentId+1);
        setCurrentReview(data[id+1]);
    }


    function handleRandom(){
        setCurrentId(0);
        setCurrentReview(data[0]);
    }

    return(
       
            <div className="review">
                <h3 className="author" id={currentReview.id}>{currentReview.name}</h3>
                <h4 className="job">{currentReview.job}</h4>
                <p className="info">{currentReview.text}</p>
                <img className="person-img" src={currentReview.image}/>
                <button className="prev-btn" onClick={handlePrevious}>Previous</button>
                <button className="next-btn" onClick={handleNext}>Next</button>
                <button className="random-btn" onClick={handleRandom}>Random Review</button>
            </div>
            
        
    )
}

export default Review;