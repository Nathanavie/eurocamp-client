const API_URL = 'http://localhost:3001/api/1/parcs';

export async function getData() {
  const res = await fetch(API_URL, { next: { tags: ['parcs'] } });

  if (!res.ok) {
    return { data: [], errors: ['Failed to load parcs.'] };
  }
  const users = await res.json();

  return { data: users.data, errors: [] };
}
