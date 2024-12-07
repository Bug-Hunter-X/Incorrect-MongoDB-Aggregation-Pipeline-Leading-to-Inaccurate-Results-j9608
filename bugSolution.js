```javascript
// Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /* some filter */ }},
  {$unwind: "$field"},
  {$group: {_id: "$field", count: {$sum: 1}}},
  {$sort: {count: -1}},
  {$limit: 10}
]).toArray((err, result)=>{
  if (err) {
    console.error("Aggregation failed:", err);
  } else {
    console.log(result);
  }
});
```