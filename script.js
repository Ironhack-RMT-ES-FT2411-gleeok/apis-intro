console.log("probando")

const btnNode = document.querySelector("button")

btnNode.addEventListener("click", () => {
  
  const promise = fetch("https://api.spacexdata.com/v5/launches/latest")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)

    const dataNode = document.querySelector("#data")
    const imgNode = document.createElement("img")
    imgNode.src = data.links.patch.small

    dataNode.append(imgNode)

    data.crew.forEach((eachCrew) => {
      const liNode = document.createElement("li")
      liNode.innerText = eachCrew.role
      dataNode.append(liNode)
    })
  })

})