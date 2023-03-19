const {
  prop,
  sortWith,
  descend,
  slice,
  map,
  compose,
  filter,
  keys,
  reduce
} = require("ramda");
const { randomInt } = require('crypto');

// returns a function that sort the entities by provided prop names in descending order
const sortByProps = (...props) => {
  return sortWith(
    map(
      compose(
        descend,
        prop
      ),
      props
    )
  );
};

// returns a function that slices a provided resultSet
const sliceSet = (from, to) => {
  return data => slice(from, to, data);
};


const filterSet = filterQuery => {
  const filterKeys = keys(filterQuery);
  return data => {
    if (!filterKeys.length) {
      return data;
    }

    return filter(entity => reduce((acc, curr) => acc && entity[curr] === filterQuery[curr], true, filterKeys), data);
  };
};

const takeANap = async () => {
  return new Promise(res => setTimeout(res, randomInt(500, 3100)))
}

module.exports = {
  sortByProps,
  sliceSet,
  filterSet,
  takeANap
};
