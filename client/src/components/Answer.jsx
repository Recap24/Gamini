import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStars } from "../helper";
const Answer = ({ans}) => {
    
    const [heading, setHeading] = useState(false)
    const [answer, setAnswer] = useState(ans)
    useEffect(()=>{
        if (checkHeading(ans)) {
            setHeading(true);
            setAnswer(replaceHeadingStars(ans))
        }
    },[ans]) 
    
    
    return (
        <>
            {heading ? <span className="py-2 text-lg block">{answer}</span> :
             <span className="pl-5 text-sm">{answer}</span>}
        </>
    );
};

export default Answer;