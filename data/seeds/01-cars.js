
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 111111, make: "aaa", model: "abcd", mileage:10000, transmission: "automatic", title: "clean" },
        { VIN: 222222, make: "bbb", model: "defg", mileage:20000, transmission: "manual", title: "salvage" },
        { VIN: 333333, make: "ccc", model: "hijk", mileage:2000, transmission: "automatic"},
        { VIN: 444444, make: "ddd", model: "lmno", mileage:60000, transmission: "manual"},
        { VIN: 555555, make: "eee", model: "pqrs", mileage:56000}
      ]);
    });
};

