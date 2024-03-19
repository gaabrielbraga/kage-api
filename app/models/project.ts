import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare workspaceId: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare startDate: DateTime

  @column()
  declare endDate: DateTime

  @column()
  declare status: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
