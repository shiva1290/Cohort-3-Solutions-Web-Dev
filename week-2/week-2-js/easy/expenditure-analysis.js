/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  //We create empty object
  let totals={};
  // For all individiual transaction we run a for loop
  for(let transaction of transactions){
    if(totals[transaction.category]){
      totals[transaction.category]+=transaction.price;
    } else {
      totals[transaction.category]=transaction.price;
    }
  }
//Convert this object into array
  let result=[];
  for(let category in totals){
    result.push({category: category, totalSpent:totals[category]});
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
