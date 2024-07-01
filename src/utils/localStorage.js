const access_token = 'accessToken';

export const getAccessToken = () => localStorage.getItem(access_token);

export const storeAccessToken = (accessToken) =>
  localStorage.setItem(access_token, accessToken);

export const removeAccessToken = () => localStorage.removeItem(access_token);
