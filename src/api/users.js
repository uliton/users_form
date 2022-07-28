const TEST_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';

export const getUsers = async (page) => {
  const response = await fetch(`${TEST_URL}?page=${page}&count=6`);

  return response.json();
}