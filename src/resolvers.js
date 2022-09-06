// Ce fichier permet de lier le schema graphQl aux données qui vont être renvoyées
const messageHello = "Hello !"

// Un objet pour simuler une BDD
let users = [
  {
    id: 1,
    name: "Galadrielle",
    race: "Elfe",
    age: 3000
  },
  {
    id: 2,
    name: "Elrond",
    race: "Elfe",
    age: 2800
  },
  {
    id: 3,
    name: "Nori",
    race: "Pied poilu",
    age: 16
  },
  {
    id: 4,
    name: "Durin",
    race: "Nain",
    age: 80
  },
]

//  On definit les resolvers crées dans le Schema
const resolvers = {
  Query: {
    /* 4 paramètres différents dans les resolvers :
      -parent ou root : pour connaitre le type d'objet précédent
      -args: tous les paramètres qu'il va y avoir dans la requête
      -context: une liste de type d'objet
      -info: va donner des infos sur la  requête courante 
    */
    hello: () => messageHello,
    users: () => users,
    user: (parent, args) => {
      // Il est aussi possible de déstructurer args et de n'indiquer que le param souhaité : { id }
      return users.find(user => user.id == args.id)
    }
  }
}

// On exporte le resolver pour pouvoir l'utiliser
export default resolvers