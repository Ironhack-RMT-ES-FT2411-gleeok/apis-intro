console.log("probando")

// Replicar/Similar este comportamiento asincrono
function pedirUnLibro(bookId, callback, errorCallback) {
  // let bookId = 1
  // let callback = recibirData // ref 1234

  if (typeof bookId !== "number") {
    errorCallback("Numero de ID incorrecto")
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
      callback(foundBook)
    } else {
      errorCallback("No existe libro con ese ID")
    }

  }, (Math.random() * 3000) + 1000)

}

// como hacemos que al invocar la funcion, esperamos el tiempo del setTimout para poder recibir la data
// const receivedBook = pedirUnLibro(1)
// console.log(receivedBook)

// function recibirData(data) {
//   console.log(data)
// } // ref 1234

pedirUnLibro(1, (receivedBook) => {
  console.log(receivedBook) // aqui ya tengo el primer libro. 2seg

  pedirUnLibro(2, (receivedBook) => {
    console.log(receivedBook) // 2seg + 1.5seg

    pedirUnLibro(3, (receivedBook) => {
      console.log(receivedBook) // 2seg + 1.5seg + 3seg
    }, (error) => {
      console.log(error)
    })

  }, (error) => {
    console.log(error)
  })

}, (error) => {
  console.log(error)
})



