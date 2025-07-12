/* Task 1 */
import { getDataAsync, getDataTC, thenCatch } from "./src/task1.js";

const statusData = true;

/* Then-Catch */
thenCatch(statusData);
/* Async Await */
getDataAsync(statusData);
/* Try-Catch */
getDataTC(statusData);
