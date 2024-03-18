// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var result = [];
  _.each(numbers, function (item) {
    if (item % 5 === 0) {
      result.push(item);
    }
  });
  return result.length;
};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var result = [];
  _.each(tweets, function(item) {
    if (item.user === user) {
      result.push(item);
    }
  });
  return result;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  var result = _.filter(fruits, function(item) {
    return item === targetFruit;
  });
  return result;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  return _.filter(fruits, function(item) {
    return item.slice(0, 1) === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  return _.filter(desserts, function (item) {
    return item.type === 'cookie';
  });
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  return _.filter(tweets, function (item) {
    return item.user === user;
  });
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  return _.map(fruits, function (item) {
    return item.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  var result = _.map(desserts, function (item) {
    _.each(item.ingredients, function (element) {
      if (element === 'flour') {
        item.gultenFree = false;
     }
    });
    if (item.glutenFree === undefined) {
      item.glutenFree = true;
    }
    return item;
  });
  return result;
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  return _.map(tweets, function (item) {
    return item.message;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  var result = _.map(groceries, function (item) {
    var initialPrice = Number.parseFloat((item.price).slice(1));
    item.salePrice = '$' + (((initialPrice * 100) - (Math.round(initialPrice * coupon * 100)))
    / 100);
    return item;
  });
  return result;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  var prices = _.map(products, function (item) {
    return Number((item.price).slice(1));
  });
  return _.reduce(prices, function(accumulator, currentPrice) {
    return accumulator + currentPrice;
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  var dessertTypes = _.map(desserts, function (item) {
    return item.type;
  });
  return _.reduce(dessertTypes, function (accumulator, currentItem) {
    if (!accumulator[currentItem]) {
      accumulator[currentItem] = 1;
    } else {
      accumulator[currentItem]++;
    }
    return accumulator;
  }, {});
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {
  var userCount = _.map(tweets, function (item) {
    return item.user;
  });
  console.log(userCount);
  return _.reduce(userCount, function(accumulator, currentItem) {
    if (!accumulator[currentItem]) {
      accumulator[currentItem] = 1;
    } else {
      accumulator[currentItem]++;
    }
    return accumulator;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  return _.reduce(movies, function (accumulator, currentItem) {
    if (currentItem.releaseYear >= 1990 && currentItem.releaseYear <= 2000) {
      accumulator.push(currentItem.title);
    }
    return accumulator;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  return _.reduce(movies, function (accumulator, currentValue) {
    if (currentValue.runtime < timeLimit) {
      accumulator = true;
    }
    return accumulator;
  }, false);
};
