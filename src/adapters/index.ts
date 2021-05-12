const API_URL = 'https://api.cardinfo.online';
const API_KEY = '04fd44ce5b6666486e8b8ac12722bb10';

interface ResponseType {
  status: number;
}

export const get = <T extends ResponseType>(
  number: string,
  configRequest: string
): Promise<T> => {
  return fetch(`${API_URL}?input=${number}&apiKey=${API_KEY}${configRequest}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject({ error: res.status });
  });
};
