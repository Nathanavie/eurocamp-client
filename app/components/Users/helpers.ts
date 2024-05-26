const API_URL = 'http://localhost:3001/api/1/users';

export async function getData() {
  const res = await fetch(API_URL, { next: { tags: ['users'] } });

  if (!res.ok) {
    return { data: [], errors: ['Failed to load users.'] };
  }
  const users = await res.json();

  return { data: users.data, errors: [] };
}
