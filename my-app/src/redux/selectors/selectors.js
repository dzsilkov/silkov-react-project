export const getAuthUserToken = store => store.auth.authUserToken;
export const getActiveUser = store => store.activeUser;

export const getAllUserBooks = store => store.activeUser.userBooksIds;
export const getReadUserBooks = store =>store.activeUser.userReadBooksIds;
export const getFavouriteUserBooks = store => store.activeUser.userFavouriteBooksIds;