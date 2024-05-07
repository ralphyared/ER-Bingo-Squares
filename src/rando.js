import _ from "lodash";

import { early } from "./squares/early.js";
import { mid } from "./squares/mid.js";

const arr = [..._.sampleSize(early, 10), ..._.sampleSize(mid, 15)];

console.log(JSON.stringify(arr));
