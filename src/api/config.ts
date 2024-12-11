import axios from 'axios';
import { Auth } from 'aws-amplify';

const getAccessJwt = async () => {
  const session = await Auth.currentSession();
  return session.getAccessToken().getJwtToken();
};

// Configure axios defaults
axios.defaults.baseURL = process.env.REACT_APP_API_ROOT;
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Accept'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

// Add auth token interceptor
axios.interceptors.request.use(async (req) => {
  const token = await getAccessJwt();
  req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const axiosInstance = axios;