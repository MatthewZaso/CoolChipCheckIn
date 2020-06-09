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

export function getEntries(query?: string): Promise<IUser[] | null> {
  let search = '';

  if (query) {
    search = `?filter[name]="${encodeURIComponent(query)}"`;
  }

  return fetch(`https://mini-visitors-service.herokuapp.com/api/entries${search}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': 'bd28e4cd57cb8e704214'
    },
  })
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
