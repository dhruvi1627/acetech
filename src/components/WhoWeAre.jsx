import React, { useState, useEffect } from "react";

export default function WhoWeAre() {
    const [goalType, setGoalType] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
      
      const goals = [
        "GOALS",
        "GROWTH",
        "RESULT",
      ];
    
      useEffect(() => {
        let timeout;
        if (charIndex < goals[textIndex].length) {
          timeout = setTimeout(() => {
            setGoalType(goals[textIndex].substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          }, 100);
        } else if (charIndex === goals[textIndex].length) {
          timeout = setTimeout(() => {
            setCharIndex(charIndex + 1);
          }, 1000);
        } else if (charIndex > goals[textIndex].length && goalType.length > 0) {
          timeout = setTimeout(() => {
            setGoalType(goalType.substring(0, goalType.length - 1));
            setCharIndex(charIndex + 1);
          }, 50);
        } else {
          timeout = setTimeout(() => {
            setTextIndex((textIndex + 1) % goals.length);
            setCharIndex(0);
          }, 500);
        }
        return () => clearTimeout(timeout);
      }, [charIndex, textIndex, goals, goalType]);
    
  return (
     <div className="text-center mb-8 mt-20 text-white">
          <h4 className="text-xl font-semibold font-bebas">WHO WE ARE</h4>
          <h3 className="text-3xl font-bold mb-2 font-bebas">
            WE'VE HELPED HUNDREDS OF PARTNERS, RANGING
          </h3>
          <h3 className="text-3xl font-bold mb-2 font-bebas">
            FROM STARTUPS TO MEDIUM-SIZED BUSINESSES
          </h3>
          <h3 className="text-3xl font-bold font-bebas">
            WITH THEIR <span className="underline text-white">{goalType}</span>
          </h3>
        </div>
  )
}
