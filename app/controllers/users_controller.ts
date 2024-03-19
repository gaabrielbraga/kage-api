import User from '#models/user'
import { createUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async store({ request }: HttpContext) {
    const payload = await createUserValidator.validate(request.all())
    return await User.create(payload)
  }
}
