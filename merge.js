const fs = require('fs');

const restaurantInfo = require('./restaurants_info.json');
restaurantInfo.sort((a, b) => a.objectID - b.objectID);

const restaurantList = require('./restaurants_list.json');
restaurantList.sort((a, b) => a.objectID - b.objectID);

function mergeData(info, list) {
  let counter = 0;
  let mergedData = [];

  while (counter < info.length) {
    if (info[counter].id === list[counter].id) {
      mergedData.push({...info[counter], ...list[counter]});
    }
    counter = counter + 1;
  }

  return mergedData;
}

const restaurantData = mergeData(restaurantInfo, restaurantList);

fs.writeFile ("restaurant_data.json", JSON.stringify(restaurantData), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);