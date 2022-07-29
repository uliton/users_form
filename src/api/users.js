const TEST_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export const getUsers = async (page) => {
  const response = await fetch(`${TEST_URL}users?page=${page}&count=6`);

  return response.json();
}

export const getPositions = async () => {
  const response = await fetch(`${TEST_URL}positions`);

  return response.json();
}

// export setUser = async ({}) => {
  
// }