# MongoDB Aggregation Pipeline Bug

This repository demonstrates a common error in MongoDB aggregation pipelines:  incorrect handling of array fields during grouping.  The `bug.js` file shows an aggregation pipeline that produces incorrect results due to the absence of the `$unwind` operator. The `bugSolution.js` demonstrates the corrected pipeline.

## Problem
The original pipeline attempts to group documents and count occurrences of a field without considering the possibility of that field being an array.  This leads to inaccurate counts.

## Solution
The corrected pipeline includes the `$unwind` operator to deconstruct arrays before grouping, ensuring that each element is counted correctly.

## How to reproduce
1.  Clone this repository.
2.  Run `bug.js` and observe the incorrect results.
3.  Run `bugSolution.js` and compare the output.