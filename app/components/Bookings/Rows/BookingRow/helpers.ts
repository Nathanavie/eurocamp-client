const USER_API_URL = 'http://localhost:3001/api/1/users';
const PARC_API_URL = 'http://localhost:3001/api/1/parcs';

export async function getData(userId: string, parcId: string) {
  const userRes = await fetch(`${USER_API_URL}/${userId}`);
  const parcRes = await fetch(`${PARC_API_URL}/${parcId}`);

  let userErrors = [];
  let parcErrors = [];

  if (!userRes.ok) {
    userErrors.push('Not Found');
  }

  if (!parcRes.ok) {
    parcErrors.push('Not Found');
  }

  if (!userRes.ok && !parcRes.ok) {
    return {
      user: [],
      parc: [],
      userErrors,
      parcErrors,
    };
  }
  const user = await userRes.json();
  const parc = await parcRes.json();

  return { user: user.data, parc: parc.data, userErrors, parcErrors };
}
