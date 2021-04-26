// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB1rMhlqq6FWYZpFvhxE8md-lvT2hxOIFA",
  authDomain: "eleventy-netlifycms-project.firebaseapp.com",
  projectId: "eleventy-netlifycms-project",
  storageBucket: "eleventy-netlifycms-project.appspot.com",
  messagingSenderId: "59016517056",
  appId: "1:59016517056:web:3d02734f288445879b6425"
});

let db = firebase.firestore();

const initGamesList = () => {
  db.collection("games").get().then((querySnapshot) => {
    const gamesList = [];
    querySnapshot.forEach((doc) => {
      gamesList.push(doc.data())
    });
    pupulateGamesList(gamesList);
  });
  
  const pupulateGamesList = (games) => {
    const list = document.querySelector(".games-list");
    games.forEach(game => {
      const line = document.createElement("li");
      line.innerHTML = game.name;
      list.appendChild(line);
    })
  };
};

if (document.querySelector(".games-list")){
  initGamesList();
};
