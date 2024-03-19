import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tasks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('project_id').notNullable().unsigned().references('id').inTable('projects')
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.integer('assignee_id').notNullable().unsigned().references('id').inTable('users')
      table.dateTime('due_date').notNullable()
      table.string('priority').notNullable()
      table.string('status').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
