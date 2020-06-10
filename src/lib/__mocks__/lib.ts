interface IUser {
  id: number,
  name: string,
  notes: string,
  sign_out: string | null
}

const user: IUser = {
  id: 1,
  name: 'John Doe',
  notes: 'Sample notes',
  sign_out: null
}

export function getEntries(query?: string): Promise<IUser[] | null> {
  return Promise.resolve([user, user]);
}

export function registerUser(name: string, notes: string): Promise<IUser> {
  return Promise.resolve(user);
}

export function signOutUser(id: number): Promise<string | null> {
  return Promise.resolve('2019-10-21T17:45:21.639Z');
}
