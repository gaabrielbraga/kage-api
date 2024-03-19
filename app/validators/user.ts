import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .email()
      .trim()
      .unique(async (db, value, _) => {
        const user = await db.from('users').where('email', value).first()
        return !user
      }),
    password: vine.string().trim().confirmed().minLength(6),
    first_name: vine.string(),
    last_name: vine.string(),
    document: vine.string().unique(async (db, value, _) => {
      const user = await db.from('users').where('document', value).first()
      return !user
    }),
    telephone: vine.string(),
    username: vine.string().unique(async (db, value, _) => {
      const user = await db.from('users').where('username', value).first()
      return !user
    }),
    role: vine.enum(['admin', 'user']).optional(),
  })
)
