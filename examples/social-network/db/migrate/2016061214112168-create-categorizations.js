export function up(schema) {
  return schema.createTable('categorizations', table => {
    table.increments('id');
    table.integer('post_id');
    table.integer('tag_id');
    table.timestamps();

    table.index([
      'id',
      'post_id',
      'tag_id',
      'created_at',
      'updated_at'
    ]);
  });
}

export function down(schema) {
  return schema.dropTable('categorizations');
}
