//- Notes:
//-   . slug is shown on the url so it needs to be web friendly
//-   . _id is set with an underscore at the beginning to make it compatible
//-     with MongoDB database

const data = {
  products: [
    {
      _id: '1',
      name: 'Berserk Guts Black Swordsman Action Figure',
      slug: 'berserk-guts-black-swordsman-action-figure',
      category: 'Toys',
      image: '/images/gut-berserk.jpg',
      price: 287.49,
      countInStock: 10,
      brand: 'Max Factory',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality action figure'
    },
    {
      _id: '2',
      name: 'Play Arts Darth Maul Action Figure',
      slug: 'play-arts-darth-maul-action-figure',
      category: 'Toys',
      image: '/images/darth-maul.jpg',
      price: 119.98,
      countInStock: 0,
      brand: 'Disney',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality action figure'
    },
    {
      _id: '3',
      name: 'One Piece - Manga TV Show Poster',
      slug: 'one-piece-manga-tv-show-poster',
      category: 'Posters',
      image: '/images/one-piece.jpg',
      price: 10.99,
      countInStock: 20,
      brand: 'Movie Posters USA',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality poster'
    },
    {
      _id: '4',
      name: 'Naruto Shippuden - Anime Poster',
      slug: 'naruto-shippuden-anime-poster',
      category: 'Posters',
      image: '/images/naruto-shippuden.jpg',
      price: 14.99,
      countInStock: 5,
      brand: 'Movie Posters USA',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality action figure'
    }
  ]
};

export default data;