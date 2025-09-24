import { get } from 'http';
import { setUser } from '../config';
import { createUser, getUser } from '../lib/db/users';

export async function handlerLogin(cmdName: string, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error(`usage: ${cmdName} <name>`);
  }

  const exists = await getUser(args[0]);

  if (!exists) {
    throw new Error(`User ${args[0]} does not exist`);
  }

  const userName = args[0];
  setUser(userName);
  console.log('User switched successfully!');
}

export async function handlerCreateUser(cmdName: string, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error(`usage: ${cmdName} <name>`);
  }

  const userName = args[0];

  const newUser = await createUser(userName);
  console.log('User created successfully:', newUser);
}
