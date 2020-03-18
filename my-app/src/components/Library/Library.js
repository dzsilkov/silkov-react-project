import React from 'react';
import './Library.css'
import LibraryList from '../LibraryList/LibraryList';

const playlist =  [
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
      playlist: []
    };

    this.handlePlaylistToggle = this.handlePlaylistToggle.bind(this);
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        playlist: [...prevState.playlist, ...playlist],
      };
    });
  }

  handlePlaylistToggle(id, prop) {
    this.setState(prevState => {
      const updateItems = prevState.playlist.map(item => {
        return item.id === id
          ? {...item, [prop]: !item[prop]}
          : {...item}
      });
      return ({
        playlist: updateItems
      })
    });
  }

  render() {

    const {playlist} = this.state;
    const favoriteCollection = playlist.filter(item => item.favourite);
    const listenedCollection = playlist.filter(item => item.listened);

    return (
      <section className="library">
        <LibraryList title={'Playlist'} collection={playlist} handlerToggle={this.handlePlaylistToggle}/>
        <LibraryList title={'Listened'} collection={listenedCollection} handlerToggle={this.handlePlaylistToggle}/>
        <LibraryList title={'Favourite'} collection={favoriteCollection} handlerToggle={this.handlePlaylistToggle}/>
      </section>
    );
  }
}

export default Library;


