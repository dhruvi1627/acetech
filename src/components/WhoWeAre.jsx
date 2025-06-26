import React, { useState, useEffect } from "react";

export default function WhoWeAre() {
  const [goalType, setGoalType] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const goals = React.useMemo(() => ["GOALS", "GROWTH", "RESULT"], []);

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
  }, [charIndex, textIndex, goalType, goals]);

  return (
    <div className="w-full text-white my-16 px-4">
      <div className="max-w-3xl mx-auto text-center tracking-wider">
        <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-bebas mb-4">
          WHO WE ARE
        </h4>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bebas leading-snug">
          WE'VE HELPED HUNDREDS OF PARTNERS, RANGING FROM STARTUPS TO
          MEDIUM-SIZED BUSINESSES WITH THEIR{" "}
          <span className="underline">{goalType}</span>
        </h3>
      </div>
    </div>
  );
}
