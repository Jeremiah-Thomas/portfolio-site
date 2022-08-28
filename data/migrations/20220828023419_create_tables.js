exports.up = function (knex) {
  return knex.schema.createTable("projects", (tbl) => {
    tbl.increments();
    tbl.text("project_name").unique().notNullable();
    tbl.blob("project_screenshot").notNullable();
    tbl.text("technologies_used").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
