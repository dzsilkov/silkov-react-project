export const getLibraryState = store => store.library;
export const getAllLibraryBooks = store => getLibraryState(store).libraryBooks;
export const getUserReadBooks = store => getLibraryState(store).userReadBooks;
export const getUserFavouriteBooks = store => getLibraryState(store).userFavouriteBooks;