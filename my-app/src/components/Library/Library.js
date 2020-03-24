import React from 'react';
import './Library.css';
import LibraryList from '../LibraryList/LibraryList';


class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          title: 'My Books',
          collection: []
        },
        {
          title: 'Favorite Books',
          collection: []
        },
        {
          title: 'Read Books',
          collection: []
        }
      ]
    };

    this.toggleHandler = this.toggleHandler.bind(this);

    this.handlers = this.props.userBooks.map(book => {
      return {
        id: book.id,
        toggleRead: this.clickHandler.bind(
          this,
          book.id,
          book.read
        ),
        toggleFavourite: this.clickHandler.bind(
          this,
          book.id,
          book.favourite
        ),
        deleteBook: this.clickHandler.bind(
          this,
          book.id
        )
      };
    });

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    const {activeUser, userBooksIds, fetchUserBooks} = this.props;
    fetchUserBooks(userBooksIds);
  }


  // componentDidUpdate(prevState) {
  //   const {fetchBooks, currentPage, booksPerPage} = this.props;
  //   if (prevState.currentPage !== currentPage || prevState.booksPerPage !== booksPerPage) {
  //     fetchBooks(currentPage, booksPerPage);
  //   }
  // }


  clickHandler(bookId, prop) {

    // const updatedCounters = this.state.counters.map(counter => {
    //   if (counter.id === counterId) {
    //     return {
    //       ...counter,
    //       value: this.calculateCounterValue(counter.id, counter.value, step)
    //     };
    //   } else {
    //     return {...counter};
    //   }
    // });
    // this.setState({counters: updatedCounters});
  }


  toggleHandler(id, prop) {
    const {updateUserBooks} = this.props;
    console.log(id, '  ', prop)
    updateUserBooks(id, prop);
    // this.setState(prevState => {
    //   const updateItems = prevState.books.map(item => {
    //     return item.id === id
    //       ? {...item, [prop]: !item[prop]}
    //       : {...item};
    //   });
    //   return ({
    //     books: updateItems
    //   });
    // });
  }

  render() {
    // const {lists} = this.state;
    // const library = lists.map(list => {
    //   return (
    //     <LibraryList id={list.title} key={list.title} collection={list.collection} hadlerToggle={this.toggleHandler}/>
    //   );
    // });


    const {
      userBooks,
      userFavouriteBooks,
      userReadBooks
    } = this.props;
    return (
      <section className="library">
        <LibraryList key={'1'} title={'My Books'} collection={userBooks} handlerToggle={this.toggleHandler}/>
        <LibraryList key={'2'} title={'Read Books'} collection={userReadBooks}
        handlerToggle={this.toggleHandler}/>
        <LibraryList key={'3'} title={'Favourite Books'} collection={userFavouriteBooks}
        handlerToggle={this.toggleHandler}/>
      </section>
    );
  }
}

export default Library;


