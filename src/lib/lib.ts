import { IUser } from '../components/people/People';

interface IData {
  data: IEntries[]
}

interface IEntries {
  type: string,
  id: number,
  attributes: {
    name: string,
    notes: string,
    sign_out: string | null,
  }
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
    search = `?filter[name]="${encodeURIComponent(query)}"`;
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

export function registerUser(name: string, notes: string): Promise<Response> {
  const url = `/api/entries?data[attributes][name]=${name}&data[attributes][notes]=${notes}`;
  return fetchFromAPI(url, "POST");
}

export function signOutUser(id: number) {
  const url = `/api/entries/sign_out?data[id]=${id}`;
  return fetchFromAPI(url, "POST");
}
