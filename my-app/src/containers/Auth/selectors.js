export const getError = state => state.auth.error;

export const getIdToken = state => state.auth.idToken;

export const getIsLoggingIn = state => state.auth.isLoggingIn;

export const getIsLoggedIn = state => state.auth.idToken != null;

export const getAuthUser = store => store.auth.authUser;