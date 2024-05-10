import _ from "lodash";

import { early, earlyCount, mid, midCount, late, lateCount } from "./config.js";

const arr = [
  ..._.sampleSize(early, earlyCount),
  ..._.sampleSize(mid, midCount),
  ..._.sampleSize(late, lateCount),
];

console.log(JSON.stringify(arr));
