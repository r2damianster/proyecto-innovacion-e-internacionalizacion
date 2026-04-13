import PocketBase from 'pocketbase';

const PB_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090';

let pb: PocketBase;

export const getPb = () => {
  if (!pb) {
    pb = new PocketBase(PB_URL);
  }
  return pb;
};

export const loginAdmin = async (email: string, password: string) => {
  const pb = getPb();
  
  try {
    const authData = await pb.collection('users').authWithPassword(email, password);
    
    // Check if user is authorized
    const authorizedEmails = [
      'arturo.rodriguez@uleam.edu.ec',
      'jhonny.villafuerte@uleam.edu.ec'
    ];

    if (!authorizedEmails.includes(email)) {
      throw new Error('No autorizado. Solo el líder y colíder pueden acceder.');
    }

    return authData;
  } catch (error: any) {
    console.error('Login error:', error);
    throw new Error(error.message || 'Error al iniciar sesión');
  }
};

export const logoutAdmin = () => {
  const pb = getPb();
  pb.authStore.clear();
};
