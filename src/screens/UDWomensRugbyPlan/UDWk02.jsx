// Import React
import React, { useState } from "react";
// Import Components
import RestItem from "../../components/workouts/RestItem.jsx";
import WorkoutShellItem from "../../components/workouts/WorkoutShellItem.jsx";
// Import CSS
import "./UDWk0103.scss";
// Import Framer Motion
import PageTransitionFade from "../../hooks/framer-motion/PageTransitionFade.jsx";

// Import State Management
import { useSelector, useDispatch } from "react-redux";

export default function UDWk02() {
  const exerciseData = useSelector((state) => state.exerciseData.data);

  const [workoutIdx, setWorkoutIdx] = useState([
    {
      title: "Max Effort Lower",
      workouts: [132, 163, 164, 165, 136, 137],
      rest: false,
      show: false,
    },
    {
      title: "Max Effort Upper",
      workouts: [143,166,145,167,168,69],
      rest: false,
      show: false,
    },
    {
      title: "Stability (Optional)",
      workouts: [138,170,171,172,142],
      rest: false,
      show: true,
    },
    {
      title: "Dynamic Lower",
      workouts: [],
      rest: false,
      show: false,
    },
    {
      title: "Dynamic Upper",
      workouts: [],
      rest: false,
      show: false,
    },
  ]);

  return (
    <PageTransitionFade>
      <div className="UDWk0103-container">
        <div className="UDWk0103-title">Week 2</div>
        {workoutIdx.map((data, index) => (
          <div className="UDWk0103-workout-container" key={index}>
            <div
              className="UDWk0103-workout-day"
              style={{
                margin: data.show ? "0 0 5px 0" : "0 0 15px 0",
                border: `3px solid ${
                  data.show
                    ? "rgba(140, 140, 140, 0.47)"
                    : "rgba(255, 255, 255, 0.37)"
                }`,
                backgroundColor: data.show
                  ? "rgba(255, 255, 255, 0.87)"
                  : "rgba(255, 255, 255, 0.47)",
              }}
              onClick={() => {
                let shallowData = workoutIdx;
                shallowData[index].show = !shallowData[index].show;
                setWorkoutIdx([...shallowData]);
              }}
            >
              {`${data.title} (${data.show ? " - " : " + "})`}
            </div>
            {data.rest ? (
              <div
                className="UDWk0103-rest-item-container"
                style={{
                  display: data.show ? "flex" : "none",
                  animation: data.show
                    ? "inAnimation 250ms ease-in"
                    : "outAnimation 0ms ease-out",
                }}
              >
                <RestItem />
              </div>
            ) : (
              <div
                className="UDWk0103-workout-item-container"
                style={{
                  display: data.show ? "grid" : "none",
                  animation: data.show
                    ? "inAnimation 250ms ease-in"
                    : "outAnimation 0ms ease-out",
                }}
              >
                {data.workouts.map((workoutsArr, index) => (
                  <div key={index}>
                    <WorkoutShellItem
                      exerciseDataItem={exerciseData[workoutsArr]}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </PageTransitionFade>
  );
}
