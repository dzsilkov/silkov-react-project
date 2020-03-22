export const getError = state => state.auth.error;

export const getIsLoggedIn = state => state.auth.idToken != null;

export const getAuthUser = store => store.auth.authUser;