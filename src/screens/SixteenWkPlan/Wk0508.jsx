// Import React
import React, { useState } from "react";
// Import Components
import RestItem from "../../components/workouts/RestItem.jsx";
import WorkoutShellItem from "../../components/workouts/WorkoutShellItem.jsx";
// Import CSS
import "./Wk0116.scss";
// Import Framer Motion
import PageTransitionFade from "../../hooks/framer-motion/PageTransitionFade.jsx";

// Import State Management
import { useSelector, useDispatch } from "react-redux";

export default function Wk0508() {
  const exerciseData = useSelector((state) => state.exerciseData.data);

  const [workoutIdx, setWorkoutIdx] = useState([
    {
      title: "Day 1",
      workouts: [0,74,76,78,79,82,83,13,14,15,16,125],
      rest: false,
      show: false,
    },
    {
      title: "Day 2",
      workouts: [86,88,90,189,93,26,31,32,33,128],
      rest: false,
      show: false,
    },
    {
      title: "Day 3",
      workouts: [],
      rest: true,
      show: false,
    },
    {
      title: "Day 4",
      workouts: [34,35,36,95,97,99,101,103,125],
      rest: false,
      show: false,
    },
    {
      title: "Day 5",
      workouts: [104,105,106,107,109,111,131],
      rest: false,
      show: false,
    },
    {
      title: "Day 6",
      workouts: [0,113,115,117,119,121,190,128],
      rest: false,
      show: false,
    },
    {
      title: "Day 7",
      workouts: [],
      rest: true,
      show: false,
    },
  ]);

  return (
    <PageTransitionFade>
      <div className="Wk0116-container">
        <div className="Wk0116-title">Weeks 5 - 8</div>
        {workoutIdx.map((data, index) => (
          <div className="Wk0116-workout-container" key={index}>
            <div
              className="Wk0116-workout-day"
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
                className="Wk0116-rest-item-container"
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
                className="Wk0116-workout-item-container"
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
