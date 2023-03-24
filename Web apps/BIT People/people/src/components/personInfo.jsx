import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import './personInfo.css';

export default function InfoPerson({ content, gen }) {
    const [gender,setGender] = useState(true);

    useEffect(()=>{
        if(gen === 'male'){
            setGender(false);
        }else{
            setGender(true);
        }
    }, [gen])

  return (
    <div className={`col-md-11 col-sm-10 border border-dark d-flex p-3 ${gender ? 'genderBg1' : 'genderBg2'}`}>
      <div>
        <img src={content.picture.thumbnail} alt="" className="rounded-circle m-3" />
      </div>
      
        <div className="d-flex flex-column align-items-start mt-2">
            <p>{content.name.first} {content.name.last} <br /></p>
          
          <span className="email">
            <FontAwesomeIcon icon={faEnvelope} />
            {content.email}
          </span>
          <br />
          <span className="dateBrth">
            <FontAwesomeIcon icon={faCakeCandles} />
            {content.dob.date}
          </span>
        </div>
      
    </div>
  );
}
