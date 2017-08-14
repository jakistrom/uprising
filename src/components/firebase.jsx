export const getBase = (movieId) => {

  const config = {
      apiKey: "AIzaSyAjkZ8QbVwTu0zwbm1Oh1ykvysadCnS4pw",
      authDomain: "uprising-dfc2c.firebaseapp.com",
      databaseURL: "https://uprising-dfc2c.firebaseio.com",
      projectId: "uprising-dfc2c",
      storageBucket: "uprising-dfc2c.appspot.com",
      messagingSenderId: "519273459219"
    };

  firebase.initializeApp(config);

  const database = firebase.database();
  let data;

  firebase.database().ref('data').once('value').then( (snapshot) => {
  data = (snapshot.val());
     this.setState({
       info: data[0]
     });
  });


  const fetchMovie = fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c77922b9a6b67bfd89b55cf3dfd8d3fc&language=en-US`);

  return fetchMovie.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Fetching movie failed');
    }
  }).then(response => {
    return response;
  }).catch(error => {
    console.log('Fetching data error:', error);
  });

};
