import React from 'react';
import './Library.css';
import LibraryList from '../LibraryList/LibraryList';


class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBooks: false,
      readBooks: false,
      favouriteBooks: false,
    };
    this.toggleHandler = this.toggleHandler.bind(this);
    this.handleChangeVisible = this.handleChangeVisible.bind(this);
  }

  componentDidMount() {
    const {fetchLibraryBooks, isAuth} = this.props;
    if (isAuth) {
      fetchLibraryBooks();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {fetchLibraryBooks, isAuth} = this.props;
    if (prevProps.isAuth !== isAuth) {
      fetchLibraryBooks();
    }
  }

  handleChangeVisible(title) {
    this.setState(prevState => {
      const newAllBooks = title === 'My Books' ? !prevState.allBooks : prevState.allBooks;
      const newReadBooks = title === 'Read Books' ? !prevState.readBooks : prevState.readBooks;
      const newFavouriteBooks = title === 'Favourite Books' ? !prevState.favouriteBooks : prevState.favouriteBooks;

      return ({
        allBooks: newAllBooks,
        readBooks: newReadBooks,
        favouriteBooks: newFavouriteBooks,
      });
    });
  }

  toggleHandler(e) {
    const {updateUserBooks, deleteUserBook} = this.props;
    const elemId = e.currentTarget.id;
    const toggleFavourite = e.target.closest(`#favourite`);
    const toggleRead = e.target.closest(`#read`);
    const handleDelete = e.target.closest(`#delete`);

    if (toggleFavourite) {
      updateUserBooks(elemId, 'favourite');
    }
    if (toggleRead) {
      updateUserBooks(elemId, 'read');
    }
    if (handleDelete) {
      deleteUserBook(elemId);
    }

  }


  render() {

    const {
      libraryBooks,
      libraryFavouriteBooks,
      libraryReadBooks
    } = this.props;

    const {allBooks, favouriteBooks, readBooks} = this.state;
    return (
      <section className="library">
        <LibraryList
          key={'1'}
          title={'My Books'}
          collection={libraryBooks}
          visible={allBooks}
          handleClick={this.toggleHandler}
          handleChangeVisible={this.handleChangeVisible}

        />
        <LibraryList
          key={'2'}
          title={'Read Books'}
          collection={libraryReadBooks}
          visible={readBooks}
          handleClick={this.toggleHandler}
          handleChangeVisible={this.handleChangeVisible}

        />
        <LibraryList
          key={'3'}
          title={'Favourite Books'}
          collection={libraryFavouriteBooks}
          visible={favouriteBooks}
          handleClick={this.toggleHandler}
          handleChangeVisible={this.handleChangeVisible}

        />
      </section>
    );
  }
}

export default Library;


