
export const getError = state => state.activeUser.error;

export const getIsLoggedIn = state => state.activeUser.idToken != null;

// export const getActiveUser = store => store.activeUser.authUser;

export const getAuthUserId = store => store.activeUser.authUserId;



export const getActiveUserState = store => store.activeUser;

// export const getActiveUser = store => getActiveUserState(store).authUser;
export const getActiveUser = store => store.activeUser.authUser;

// export const getActiveUserBooks = store => getActiveUser(store).userBooks;
export const getActiveUserBooks = store => store.activeUser.userBooks;

// export const getIdsUserBooks = store => getActiveUserBooks(store).map(book => book.id);
export const getIdsUserBooks = store => store.activeUser.userBooksIds;

export const getIdsUserReadBooks = store => getActiveUserBooks(store).filter(book => book.read).map(book => book.id)

export const getIdsUserFavouriteBooks = store => getActiveUserBooks(store).filter(book => book.favourite).map(book => book.id)




export const getLibraryState = store => store.library;

export const getAllLibraryBooks = store => getLibraryState(store).libraryBooks;
export const getUserReadBooks = store => getLibraryState(store).userReadBooks;
export const getUserFavouriteBooks = store => getLibraryState(store).userFavouriteBooks;




export const getReadBooksIds = store => store.activeUser.userReadBooks;

export const getFavouriteBooksIds = store => store.activeUser.userFavouriteBooks;


// export const getUserFavouriteBooks = store => store.library.userFavouriteBooks;
//
// export const getUserReadBooks = store => store.library.userReadBooks;
