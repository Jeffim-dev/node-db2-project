
exports.up = async function(knex) {
  await knex.schema.createTable("cars", tbl => {
    tbl.increments("id")
    tbl.integer("VIN").notNull().unique()
    tbl.text("make").notNull()
    tbl.text("model").notNull()
    tbl.integer("mileage").notNull()
    tbl.text("transmission")
    tbl.text("title")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
