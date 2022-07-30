const TEST_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export const getUsers = async (page) => {
  const response = await fetch(`${TEST_URL}users?page=${page}&count=6`);

  return response.json();
}

export const getPositions = async () => {
  const response = await fetch(`${TEST_URL}positions`);

  return response.json();
}

export const getToken = async () => {
  const response = await fetch(`${TEST_URL}token`);

  return response.json();
}

export const setUser = async (name, email, phone, position_id, photo) => {
  const formData = new FormData();
  formData.append('name', name); 
  formData.append('email', email); 
  formData.append('phone', phone); 
  formData.append('position_id', position_id); 
  formData.append('photo', photo);

  const token = await getToken();

  const response = await fetch(`${TEST_URL}users`, { 
      method: 'POST', 
      headers: {
        'Token': token.token,
      },
      body: formData, 
  });

  return response.json();
};
