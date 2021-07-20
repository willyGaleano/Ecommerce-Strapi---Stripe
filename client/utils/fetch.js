import { getToken, hasExpiredToken } from "../api/tokens";

export async function authFetch(url, params, logout) {
  const token = getToken();
  if (!token) {
    //Usuario no logueado
    logout();
  } else {
    if (hasExpiredToken(token)) {
      //Token caducado
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          //si en params tenemos el headers pues lo va a añadir
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, paramsTemp);
        const result = await response.json();
        return result;
      } catch (error) {
        console.log(error);
        return error;
      }
    }
  }
}
