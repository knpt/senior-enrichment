const db = require ('./db')
const {Campus, Student, User} = require('./db/models')

const campuses = [
    {name: 'Hogwarts', image: 'https://i.pinimg.com/736x/0a/41/0e/0a410e3a4f03610eed0dbbbcd2f0a3db--book-tattoo-harry-potter-hogwarts.jpg'},
    {name: 'Ilvermorny', image: 'https://vignette1.wikia.nocookie.net/harrypotter/images/b/bc/Ilvermorny_Crest_3.png/revision/latest?cb=20160703031619'}, 
    {name: 'Beauxbatons', image: 'https://vignette3.wikia.nocookie.net/harrypotter/images/e/ea/BeauxbatonsCrestClearBg.png/revision/latest?cb=20160630041801'},
    {name: 'Durmstrang', image: 'http://vignette2.wikia.nocookie.net/harrypotter/images/f/f3/DurmstrangCrest.png/revision/latest?cb=20160112161151'}
]
const id = ()=> Math.round(Math.random()* (campuses.length-1))+1

const students = [
    {name: 'Abe', email: 'abe@cat.com', campusId: id()}, 
    {name: 'Barbara', email: 'barb@cat.com', campusId: id() }, 
    {name: 'Charlie', email: 'chuck@cat.com', campusId: id()},
    {name: 'David', email: 'dave@cat.com', campusId: id()}, 
    {name: 'Elizabeth', email: 'lizzy@cat.com', campusId: id()}, 
    {name: 'Forrest', email: 'tree@cat.com', campusId: id()}
]

const seed = () => 
    Promise.all(campuses.map(campus=>Campus.create(campus)))
    .then(()=> 
    Promise.all(students.map(student=>Student.create(student))))

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: false })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();