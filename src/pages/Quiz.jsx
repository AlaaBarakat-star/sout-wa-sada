
import { useState } from "react";

function Quiz() {
  const [fairuz, setFairuz] = useState(0);
  const [abd, setAbd] = useState(0);
  const [umm, setUmm] = useState(0);
  const [finished, setFinished] = useState(false);
  const[selectedbtn,setOfSelected]=useState({});

  function addPoint(artist,queId){
    if(artist === "fairuz"){
      setFairuz(fairuz + 1);
    }
    else if(artist === "abd"){
      setAbd(abd + 1);
    }
    else if(artist === "umm"){
      setUmm(umm + 1);
    }
    setOfSelected({...selectedbtn,[queId]:artist});
  }

  
  function showResult(){
    setFinished(true);
  }

  function getWinner(){
    if(fairuz>abd && fairuz>umm){
      return "Fairuz";
    }
    else if(abd>fairuz && abd>umm){
      return "Abdel Halim Hafez";
    }
    else{
      return "Umm Kulthum";
    }
  }

  return (
    <section className="quiz-sec">
      <h1>Which Arabic Artist Matches Your Soul?</h1>
      <div className="question-box">
        <h2>1. What is your ideal evening?</h2>
        <button className={selectedbtn[1]==="fairuz" ? "selected": ""} onClick={() => addPoint("fairuz",1)}>
          Quiet morning with coffee
        </button>
        <button className={selectedbtn[1]==="abd" ? "selected":""} onClick={() => addPoint("abd",1)}>
          Romantic dinner
        </button>
        <button className={selectedbtn[1]==="umm" ? "selected":""} onClick={() => addPoint("umm",1)}>
          Emotional gathering with deep conversations
        </button>


        <h2>2. Which word describes you most?</h2>
        <button className={selectedbtn[2]==="fairuz" ? "selected": ""} onClick={() => addPoint("fairuz",2)}>
          Peaceful
        </button>
        <button className={selectedbtn[2]==="abd" ? "selected":""} onClick={() => addPoint("abd",2)}>
          Passionate
        </button>
        <button className={selectedbtn[2]==="umm" ? "selected":""} onClick={() => addPoint("umm",2)}>
          Wise
        </button>

        <h2>3. Choose a place to travel:</h2>
        <button className={selectedbtn[3]==="fairuz" ? "selected": ""} onClick={() => addPoint("fairuz",3)}>
          Mountains and nature
        </button>
        <button className={selectedbtn[3]==="abd" ? "selected":""} onClick={() => addPoint("abd",3)}>
          Paris at night
        </button>
        <button className={selectedbtn[3]==="umm" ? "selected":""} onClick={() => addPoint("umm",3)}>
          Historic cultural cities
        </button>

        <h2>4. What type of music touches you most?</h2>
        <button className={selectedbtn[4]==="fairuz" ? "selected": ""} onClick={() => addPoint("fairuz",4)}>
          Calm nostalgic melodies
        </button>
        <button className={selectedbtn[4]==="abd" ? "selected":""} onClick={() => addPoint("abd",4)}>
          Romantic emotional songs
        </button>
        <button className={selectedbtn[4]==="umm" ? "selected":""} onClick={() => addPoint("umm",4)}>
          Powerful classical performances
        </button>
        <button className="result-btn" onClick={showResult}>
          Show My Result
        </button>
      </div>

      <div className="quiz-result">
        {finished && (
          <h2>
            Your musical match is: {getWinner()}
          </h2>
        )}

      </div>

    </section>

  );
}

export default Quiz;