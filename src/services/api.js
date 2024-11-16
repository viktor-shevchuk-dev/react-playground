const baseUrl = 'https://67389f714eb22e24fca87a7a.mockapi.io';

export const addMaterial = async (values) => {
  try {
    const response = await fetch(`${baseUrl}/materials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    return await response.json();
  } catch (error) {
    console.error('Failed to add material:', error);
  }
};
