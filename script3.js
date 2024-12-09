function pedirUnLibro(bookId) {

  return new Promise((success, reject) => {

    if (typeof bookId !== "number") {
      reject("Numero de ID incorrecto")
      return 
    }
  
    // let foundBook = null;
    setTimeout(() => {
      const books = [
        {
          id: 1,
          title: "La Comunidad del Anillo",
          texto: "..."
        },
        {
          id: 2,
          title: "Las Dos Torres",
          texto: "..."
        },
        {
          id: 3,
          title: "El Retorno del Rey",
          texto: "..."
        }
      ]
      let foundBook = books.find((libro) => libro.id === bookId)
      if (foundBook) {
        success(foundBook)
      } else {
        reject("No existe libro con ese ID")
      }
  
    }, (Math.random() * 3000) + 1000)

  })

}

// const algo = pedirUnLibro(6)
// console.log(algo)

// Como resolvemos promesas?

//* .then() y .catch() y .finally()

pedirUnLibro(1)
.then((libro1) => {
  console.log(libro1)

  // encadenar promesas
  return pedirUnLibro(2)
})
.then((libro2) => {
  console.log(libro2)
  return pedirUnLibro(3)
})
.then((libro3) => {
  console.log(libro3)
})
.catch((error) => {
  console.log(error)
})
.finally(() => {
  // algo que ocurre siempre independientemente si falla algo o no
  console.log("esto se ve?")
})

// cuando no nos interesa que la anterior se resuelva antes de tener la proxima.
//* agrupandolas en un Promise.all o Promise.allSettled


//* Promise.all => si una falla, todo falla
// recibe un array de multiples promesas
Promise.all([
  pedirUnLibro(1),
  pedirUnLibro(2),
  pedirUnLibro(10)
])
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.log(error)
})


//* Promise.allSettled => siempre devuelve toda la info, fallen o no
Promise.allSettled([
  pedirUnLibro(10),
  pedirUnLibro(20),
  pedirUnLibro(10)
])
.then((response) => {
  console.log(response)
})


//* async await & try catch

// obligatorio trabajar dentro de una funcion e invocarla
async function getData() {

  try {

    const libro1 = await pedirUnLibro(10)
    // 1. resolver la promesa
    // 2. esperar el tiempo necesario antes de continuar
    console.log(libro1)
  
    const libro2 = await pedirUnLibro(2)
    console.log(libro2)
    const libro3 = await pedirUnLibro(3)
    console.log(libro3)

  } catch(error) {
    console.log(error)
  }

}

getData() //! NUNCA OLVIDAR INVOCAR LA FUNCION