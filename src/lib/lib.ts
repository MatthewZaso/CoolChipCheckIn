import { IUser } from '../components/people/People';

interface IData {
  data: IEntries[]
}

interface IEntries {
  type: string,
  id: number,
  attributes: IAttributes
}

interface IAttributes {
  name: string,
  notes: string,
  sign_out: string | null,
}

type IMethod = "GET" | "POST" | "PATCH"

function fetchFromAPI(url: string, method: IMethod) {
  return fetch(`https://mini-visitors-service.herokuapp.com${url}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': 'bd28e4cd57cb8e704214'
    }
  })
}

export function getEntries(query?: string): Promise<IUser[] | null> {
  let search = '';

  if (query) {
    search = `?filter[name]=${query}`;
    ///api/entries?filter[name]="Jane%20Doe"
  }

  const url = `/api/entries${search}`

  return fetchFromAPI(url, "GET")
    .then((res) => res.json())
    .then((json: IData) => {
      return json.data.map((entry) => {
        return {
          id: entry.id,
          name: entry.attributes.name,
          notes: entry.attributes.notes,
          sign_out: entry.attributes.sign_out
        }
      }) || [];
    })
}

export function registerUser(name: string, notes: string): Promise<IUser> {
  const url = `/api/entries?data[attributes][name]=${name}&data[attributes][notes]=${notes}`;
  return fetchFromAPI(url, "POST")
    .then((res) => res.json())
    .then(({ data }: { data: IEntries }) => {
      return {
        id: data.id,
        name: data.attributes.name,
        notes: data.attributes.notes,
        sign_out: data.attributes.sign_out
      }
    })
}

export function signOutUser(id: number): Promise<string | null> {
  const url = `/api/entries/sign_out?data[id]=${id}`;
  return fetchFromAPI(url, "POST")
    .then((res) => res.json())
    .then((json: { data: IEntries }) => {
      return json.data.attributes.sign_out;
    })
}
