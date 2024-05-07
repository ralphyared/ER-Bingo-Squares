import _ from "lodash";

import { early } from "./squares/early.js";
import { mid } from "./squares/mid.js";
import { late } from "./squares/late.js";

const earlyCount = 10;
const midCount = 15;
const lateCount = 0;

const arr = [
  ..._.sampleSize(early, earlyCount),
  ..._.sampleSize(mid, midCount),
  ..._.sampleSize(late, lateCount),
];

console.log(JSON.stringify(arr));
