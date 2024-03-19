import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'attachments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('task_id').notNullable().unsigned().references('id').inTable('tasks')
      table.integer('user_id').notNullable().unsigned().references('id').inTable('users')
      table.string('name').notNullable()
      table.string('path').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
