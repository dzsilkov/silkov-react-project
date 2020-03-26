import React from 'react';
import './Library.css';
import LibraryList from '../LibraryList/LibraryList';


class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.toggleHandler = this.toggleHandler.bind(this);
  }

  componentDidMount() {
    const {fetchLibraryBooks} = this.props;
    fetchLibraryBooks();
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
    return (
      <section className="library">
        <LibraryList
          key={'1'}
          title={'My Books'}
          collection={libraryBooks}
          handleClick={this.toggleHandler}
        />
        <LibraryList
          key={'2'}
          title={'Read Books'}
          collection={libraryReadBooks}
          handleClick={this.toggleHandler}/>
        <LibraryList
          key={'3'}
          title={'Favourite Books'}
          collection={libraryFavouriteBooks}
          handleClick={this.toggleHandler}/>
      </section>
    );
  }
}

export default Library;


