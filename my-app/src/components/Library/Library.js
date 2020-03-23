import React from 'react';
import './Library.css'
import LibraryList from '../LibraryList/LibraryList';

const books =  [
  {
    "id": 1,
    "artist": "Oasis",
    "track": "Half The World Away",
    "listened": false,
    "favourite": true
  },
  {
    "id": 2,
    "artist": "Pink Floyd",
    "track": "Wish You Were Here",
    "listened": true,
    "favourite": true
  },
  {
    "id": 3,
    "artist": "Blink-182",
    "track": "All The Small Things",
    "listened": false,
    "favourite": true
  },
  {
    "id": 4,
    "artist": "Third Eye Blind",
    "track": "Get Me Out Of Here",
    "listened": true,
    "favourite": true
  },
  {
    "id": 5,
    "artist": "The Chainsmokers",
    "track": "Closer",
    "listened": false,
    "favourite": false
  },
  {
    "id": 6,
    "artist": "Sia",
    "track": "Cheap Thrills",
    "listened": true,
    "favourite": true
  },
  {
    "id": 7,
    "artist": "Birdy",
    "track": "Wild Horses",
    "listened": false,
    "favourite": true
  },
  {
    "id": 8,
    "artist": "Stereophonics",
    "track": "Local Boy In The Photograph",
    "listened": true,
    "favourite": false
  }
];


class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };

    this.handlePlaylistToggle = this.handlePlaylistToggle.bind(this);
  }

  componentDidMount() {
    const {activeUser, userBooksIds, userReadBooksIds, userFavouriteBooksIds, fetchUserBooks} = this.props;
    console.log(userBooksIds)
    fetchUserBooks(userBooksIds);
  }

  handlePlaylistToggle(id, prop) {
    this.setState(prevState => {
      const updateItems = prevState.books.map(item => {
        return item.id === id
          ? {...item, [prop]: !item[prop]}
          : {...item}
      });
      return ({
        books: updateItems
      })
    });
  }

  render() {

    const {
      userBooks,
      userFavouriteBooks,
      userReadBooks
    } = this.props;
    return (
      <section className="library">
        <LibraryList key={'1'} title={'My Books'} collection={userBooks} handlerToggle={this.handlePlaylistToggle}/>
        <LibraryList key={'2'} title={'Read Books'} collection={userReadBooks} handlerToggle={this.handlePlaylistToggle}/>
        <LibraryList key={'3'} title={'Favourite Books'} collection={userFavouriteBooks} handlerToggle={this.handlePlaylistToggle}/>
      </section>
    );
  }
}

export default Library;


