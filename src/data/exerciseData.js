

const exerciseData = [
    {
        id: 0, // corresponds to index
        title: "Rotator cuff warmups with band",
        type: "warmup", // warmup, upper, lower, core, stretch
        each: true, // true if one appendage, false if both
        each_type: "arm", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "10-15",
        time: "n/a",
        sets: "1",
        note: "",
        description01: "Banded shoulder external rotation and internal rotation (upper arm at side), banded external rotation with upper arm in 90/90 position",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 1, // corresponds to index
        title: "Dumbbell flat bench press",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 2, // corresponds to index
        title: "Dumbbell flat bench press",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "15-20",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 3, // corresponds to index
        title: "Pullups",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "4",
        note: "Can perform weighted",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 4, // corresponds to index
        title: "Pullups",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "15-20",
        time: "n/a",
        sets: "4",
        note: "Can perform weighted",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 5, // corresponds to index
        title: "Overhead Barbell Press (SS)",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: true,
        circuit: false,
        completed: false,
    },
    {
        id: 6, // corresponds to index
        title: "Bicep Curls (SS)",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: true,
        circuit: false,
        completed: false,
    },
    {
        id: 7, // corresponds to index
        title: "Overhead Barbell Press (SS)",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "15-20",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: true,
        circuit: false,
        completed: false,
    },
    {
        id: 8, // corresponds to index
        title: "Bicep Curls (SS)",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "15-20",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: true,
        circuit: false,
        completed: false,
    },
    {
        id: 9, // corresponds to index
        title: "Bent over dumbbell rows (SS)",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: true,
        circuit: false,
        completed: false,
    },
    {
        id: 10, // corresponds to index
        title: "Skull crushers (SS)",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: true,
        circuit: false,
        completed: false,
    },
    {
        id: 11, // corresponds to index
        title: "Bent over dumbbell rows (SS)",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "15-20",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: true,
        circuit: false,
        completed: false,
    },
    {
        id: 12, // corresponds to index
        title: "Skull crushers (SS)",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "15-20",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: true,
        circuit: false,
        completed: false,
    },
    {
        id: 13, // corresponds to index
        title: "Pec stretch (Upper Body)",
        type: "stretch", // warmup, upper, lower, core, agility, stretch
        each: true, // true if one appendage (arms/legs), false if both
        each_type: "arm", // arm, leg, side, n/a
        rep_type: "time", // reps or time
        reps: "n/a",
        time: "30 seconds",
        sets: "3",
        note: "",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 14, // corresponds to index
        title: "Bicep stretch (Upper Body)",
        type: "stretch", // warmup, upper, lower, core, agility, stretch
        each: true, // true if one appendage (arms/legs), false if both
        each_type: "arm", // arm, leg, side, n/a
        rep_type: "time", // reps or time
        reps: "n/a",
        time: "30 seconds",
        sets: "3",
        note: "",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 15, // corresponds to index
        title: "Tricep stretch (Upper Body)",
        type: "stretch", // warmup, upper, lower, core, agility, stretch
        each: true, // true if one appendage (arms/legs), false if both
        each_type: "arm", // arm, leg, side, n/a
        rep_type: "time", // reps or time
        reps: "n/a",
        time: "30 seconds",
        sets: "3",
        note: "",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 16, // corresponds to index
        title: "Pullup Hangs (Upper Body)",
        type: "stretch", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "time", // reps or time
        reps: "n/a",
        time: "30 seconds",
        sets: "3",
        note: "",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 17, // corresponds to index
        title: "Barbell back squats",
        type: "lower", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 18, // corresponds to index
        title: "Barbell back squats",
        type: "lower", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "15-20",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 19, // corresponds to index
        title: "Barbell deadlifts",
        type: "core", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 20, // corresponds to index
        title: "Barbell deadlifts",
        type: "core", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "15-20",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 21, // corresponds to index
        title: "Single leg squat to box",
        type: "lower", // warmup, upper, lower, core, agility, stretch
        each: true, // true if one appendage (arms/legs), false if both
        each_type: "leg", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "start with squatting to a high box, progressively lower, do NOT cave in knee on the way up or down",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 22, // corresponds to index
        title: "Single leg squat to box",
        type: "lower", // warmup, upper, lower, core, agility, stretch
        each: true, // true if one appendage (arms/legs), false if both
        each_type: "leg", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "15-20",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 23, // corresponds to index
        title: "Standing hamstring curls",
        type: "lower", // warmup, upper, lower, core, agility, stretch
        each: true, // true if one appendage (arms/legs), false if both
        each_type: "leg", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "4",
        note: "use a band for additional resistance, but can also be done with no resistance",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 24, // corresponds to index
        title: "Standing hamstring curls",
        type: "lower", // warmup, upper, lower, core, agility, stretch
        each: true, // true if one appendage (arms/legs), false if both
        each_type: "leg", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "15-20",
        time: "n/a",
        sets: "4",
        note: "use a band for additional resistance, but can also be done with no resistance",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 25, // corresponds to index
        title: "Calf raises (SS)",
        type: "lower", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: true,
        circuit: false,
        completed: false,
    },
    {
        id: 26, // corresponds to index
        title: "Tibialis anterior raises (SS)",
        type: "lower", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: true,
        circuit: false,
        completed: false,
    },
    {
        id: 27, // corresponds to index
        title: "Calf raises (SS)",
        type: "lower", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "15-20",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: true,
        circuit: false,
        completed: false,
    },
    {
        id: 28, // corresponds to index
        title: "Tibialis anterior raises (SS)",
        type: "lower", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "15-20",
        time: "n/a",
        sets: "4",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: true,
        circuit: false,
        completed: false,
    },
    {
        id: 29, // corresponds to index
        title: "Standing hip abduction with band around knees",
        type: "lower", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "4",
        note: "use band around knees for resistance",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 30, // corresponds to index
        title: "Standing hip abduction with band around knees",
        type: "lower", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "15-20",
        time: "n/a",
        sets: "4",
        note: "use band around knees for resistance",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 31, // corresponds to index
        title: "Hamstring stretch (Lower Body)",
        type: "stretch", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "time", // reps or time
        reps: "n/a",
        time: "30 seconds",
        sets: "3",
        note: "",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 32, // corresponds to index
        title: "Quad stretch (Lower Body)",
        type: "stretch", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "time", // reps or time
        reps: "n/a",
        time: "30 seconds",
        sets: "3",
        note: "",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 33, // corresponds to index
        title: "Abductor stretch (Lower Body)",
        type: "stretch", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "time", // reps or time
        reps: "n/a",
        time: "30 seconds",
        sets: "3",
        note: "",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 34, // corresponds to index
        title: "1/2 kneel stretch rocking forward and back (Lower Body)",
        type: "stretch", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "time", // reps or time
        reps: "n/a",
        time: "30 seconds",
        sets: "2",
        note: "",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 35, // corresponds to index
        title: "Hamstring scoop stretch (Lower Body)",
        type: "stretch", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "time", // reps or time
        reps: "n/a",
        time: "30 seconds",
        sets: "2",
        note: "",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 36, // corresponds to index
        title: "Alt standing quad stretch (Lower Body)",
        type: "stretch", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "time", // reps or time
        reps: "n/a",
        time: "30 seconds",
        sets: "2",
        note: "",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 37, // corresponds to index
        title: "Box jumps (max height)",
        type: "core", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6",
        time: "n/a",
        sets: "6",
        note: "max height",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 38, // corresponds to index
        title: "Box jumps (75% max height)",
        type: "core", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "4",
        time: "n/a",
        sets: "10",
        note: "75% max height",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 39, // corresponds to index
        title: "Skater jumps (lateral jumps)",
        type: "core", // warmup, upper, lower, core, agility, stretch
        each: true, // true if one appendage (arms/legs), false if both
        each_type: "side", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6",
        time: "n/a",
        sets: "6",
        note: "max distance",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 40, // corresponds to index
        title: "Skater jumps (lateral jumps)",
        type: "core", // warmup, upper, lower, core, agility, stretch
        each: true, // true if one appendage (arms/legs), false if both
        each_type: "side", // arm, leg, side, n/a
        rep_type: "time", // reps or time
        reps: "n/a",
        time: "30 seconds",
        sets: "3",
        note: "75% of max distance each jump",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 41, // corresponds to index
        title: "Vertical Jump (max height)",
        type: "core", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6",
        time: "n/a",
        sets: "6",
        note: "max height",
        description01: "load up position -> arms back, knees bent 25%",
        description02: "when propelling forward -> swing hands in front of you in the direction you’re going to gain max distance, do NOT cave knees inwards",
        description03: "landing -> arms return back to going behind the body, knees do NOT cave inwards, soft landing",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 42, // corresponds to index
        title: "Vertical Jump",
        type: "core", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "4",
        time: "n/a",
        sets: "10-12",
        note: "",
        description01: "load up position -> arms back, knees bent 25%",
        description02: "when propelling forward -> swing hands in front of you in the direction you’re going to gain max distance, do NOT cave knees inwards",
        description03: "landing -> arms return back to going behind the body, knees do NOT cave inwards, soft landing",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 43, // corresponds to index
        title: "Supine heel taps (CC)",
        type: "core", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "time", // reps or time
        reps: "n/a",
        time: "45 seconds - 1 minute",
        sets: "3",
        note: "",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: true,
        completed: false,
    },
    {
        id: 44, // corresponds to index
        title: "Plank alt from forearms to hands (CC)",
        type: "core", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "time", // reps or time
        reps: "n/a",
        time: "45 seconds - 1 minute",
        sets: "3",
        note: "",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: true,
        completed: false,
    },
    {
        id: 45, // corresponds to index
        title: "V ups (CC)",
        type: "core", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "time", // reps or time
        reps: "n/a",
        time: "45 seconds - 1 minute",
        sets: "3",
        note: "",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: true,
        completed: false,
    },
    {
        id: 46, // corresponds to index
        title: "Pike ups on hands (CC)",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "time", // reps or time
        reps: "n/a",
        time: "45 seconds - 1 minute",
        sets: "3",
        note: "",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: true,
        completed: false,
    },
    {
        id: 47, // corresponds to index
        title: "Plyo pushups",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "3",
        note: "weighted or banded",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 48, // corresponds to index
        title: "Plyo pushups",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "failure (aim for 12-15)",
        time: "n/a",
        sets: "3",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 49, // corresponds to index
        title: "TRX rows",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "3",
        note: "feet on elevated surface",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 50, // corresponds to index
        title: "TRX rows",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "12-15",
        time: "n/a",
        sets: "3",
        note: "feet on floor",
        description01: "",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 51, // corresponds to index
        title: "Band pull aparts (heavy band)",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "3",
        note: "palms facing upwards",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 52, // corresponds to index
        title: "Band pull aparts",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "12-15",
        time: "n/a",
        sets: "3",
        note: "palms facing upwards",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 53, // corresponds to index
        title: "Side lateral raises",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "12-15",
        time: "n/a",
        sets: "3",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 54, // corresponds to index
        title: "Side lateral raises",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "20-30",
        time: "n/a",
        sets: "3",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 55, // corresponds to index
        title: "Straight arm pulldown (with rope)",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "3",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 56, // corresponds to index
        title: "Straight arm pulldown (with rope)",
        type: "upper", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "12-15",
        time: "n/a",
        sets: "3",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 57, // corresponds to index
        title: "Paloff walkouts (band or cable)",
        type: "core", // warmup, upper, lower, core, agility, stretch
        each: true, // true if one appendage (arms/legs), false if both
        each_type: "side", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "6-8",
        time: "n/a",
        sets: "3",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 58, // corresponds to index
        title: "Paloff walkouts (band or cable)",
        type: "core", // warmup, upper, lower, core, agility, stretch
        each: true, // true if one appendage (arms/legs), false if both
        each_type: "side", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "12-15",
        time: "n/a",
        sets: "3",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },
    {
        id: 59, // corresponds to index
        title: "Trunk rotations (band or cable)",
        type: "core", // warmup, upper, lower, core, agility, stretch
        each: false, // true if one appendage (arms/legs), false if both
        each_type: "n/a", // arm, leg, side, n/a
        rep_type: "reps", // reps or time
        reps: "12-15",
        time: "n/a",
        sets: "3",
        note: "",
        description01: "3 seconds on the 'negative' or 'eccentric' portion of the rep",
        description02: "",
        description03: "",
        description04: "",
        description05: "",
        img: [], // array
        video: "", // url
        addtl_reqs: "",
        superset: false,
        circuit: false,
        completed: false,
    },











]

console.log(`The last index should be: ${exerciseData.length - 1}`)