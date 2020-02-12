var app = new Vue({
  el: '#app',
  data: {
    title: 'My Favorite Movies',
    subTitle: 'These are my 3 favorite movies',
    listOfMovies: [
      {
        id: 1,
        src: `img/Empire.jpg`,
        title: `Star Wars: Empire Strikes Back`,
        description: `After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.`,
        href:  `https://www.imdb.com/title/tt0080684/`,
      },
      {
        id: 2,
        src: `img/Shawshank.jpg`,
        title: `The Shawshank Redemption`,
        description: `Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.`,
        href: `https://www.imdb.com/title/tt0111161/`,
      },
      {
        id: 3,
        src: `img/Fugitive.jpg`,
        title: `The Fugitive`,
        description: `Dr. Richard Kimble, unjustly accused of murdering his wife, must find the real killer while being the target of a nationwide manhunt led by a seasoned U.S. Marshal.`,
        href: `https://www.imdb.com/title/tt0106977/?ref_=nv_sr_srsg_0`,
      },
    ]
  }
})
