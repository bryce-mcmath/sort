// Sorting imports
const insertion = require("./insertion");
const bubble = require("./bubble");
const merge = require("./merge");
const heap = require("./heap");
const counting = require("./insertion");
const quick = require("./quick");

// Various array sizes
const small = []; // length 100
for (let i = 0; i < 100; i++) {
  small.push(Math.round(Math.random() * 10000));
}
const medium = []; // length 100 thousand
for (let i = 0; i < 100000; i++) {
  medium.push(Math.round(Math.random() * 10000));
}
const large = []; // length 1 million
for (let i = 0; i < 1000000; i++) {
  large.push(Math.round(Math.random() * 10000));
}

// Timing function (returns time it took for a sort to complete)
const timer = (sort, data) => {
  const start = process.hrtime();
  sort(data);
  time = process.hrtime(start);
  if (time[0]) {
    console.log(`Time: ${time[0]} seconds and ${time[1]} nanoseconds`);
  } else {
    console.log(`Time: ${time[1]} nanoseconds`);
  }
};

// Pull out command line arguments to get the sorts to run and data size
const args = process.argv;
const size = args[2];
let data = [];
const sorts = [];
for (let i = 3; i < args.length; i++) {
  sorts.push(args[i]);
}

// Select data size based on command line input
switch (size) {
  case "small":
    data = small;
    break;
  case "medium":
    data = medium;
    break;
  case "large":
    data = large;
    break;
  default:
    console.log("That is not a valid data size");
    process.exit(-1);
}

// Run different sorts based on command line input
for (const sort of sorts) {
  // Call await timer(sort, data);
  switch (sort) {
    case "merge":
      console.log("================================");
      console.log(`${sort} sort of ${size} data: `);
      timer(merge, data);
      break;
    case "bubble":
      console.log("================================");
      console.log(`${sort} sort of ${size} data: `);
      timer(bubble, data);
      break;
    case "heap":
      console.log("================================");
      console.log(`${sort} sort of ${size} data: `);
      timer(heap, data);
      break;
    case "counting":
      console.log("================================");
      console.log(`${sort} sort of ${size} data: `);
      timer(counting, data);
      break;
    case "insertion":
      console.log("================================");
      console.log(`${sort} sort of ${size} data: `);
      timer(insertion, data);
      break;
    case "quick":
      console.log("================================");
      console.log(`${sort} sort of ${size} data: `);
      timer(quick, data);
      break;
    default:
      console.log("================================");
      console.log(`${sort} is not an included sorting method\n`);
  }
}
