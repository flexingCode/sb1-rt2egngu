import { Auth } from 'aws-amplify';

export const getAccessToken = async (): Promise<string | null> => {
  try {
    const session = await Auth.currentSession();
    return session.getAccessToken().getJwtToken();
  } catch (error) {
    console.error('Error getting access token:', error);
    return null;
  }
};