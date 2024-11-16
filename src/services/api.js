const baseUrl = 'https://67389f714eb22e24fca87a7a.mockapi.io';

export const addMaterial = async (values) => {
  const response = await fetch(`${baseUrl}/materials`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });
  const material = await response.json();
  return material;
};

export const getMaterials = async () => {
  const response = await fetch(`${baseUrl}/materials`);
  const materials = await response.json();
  return materials;
};

export const removeMaterial = async (id) => {
  await fetch(`${baseUrl}/materials/${id}`, {
    method: 'DELETE',
  });
};

export const edtMaterial = async (fields) => {
  const response = await fetch(`${baseUrl}/materials/${fields.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields),
  });
  const editedMaterial = response.json();
  return editedMaterial;
};
