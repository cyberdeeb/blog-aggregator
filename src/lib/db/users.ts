import { db } from '.';
import { users } from '../../schema';
import { eq } from 'drizzle-orm';

export async function createUser(name: string) {
  const [result] = await db.insert(users).values({ name: name }).returning();
  return result;
}

export async function getUser(name: string) {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.name, name))
    .limit(1);
  return user[0];
}

export async function getAllUsers() {
  return await db.select().from(users);
}
