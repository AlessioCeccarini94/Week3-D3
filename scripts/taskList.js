const form = document.getElementById("form")
form.addEventListener("submit", function (e) {
  e.preventDefault()
  console.log("aggiunto", e)

  const newLi = document.createElement("li")

  const input = document.getElementById("input")
  console.log(input)
  const inputValue = input.value

  const textSpan = document.createElement("span")
  textSpan.textContent = inputValue
  newLi.appendChild(textSpan)

  const dltButton = document.createElement("button")
  dltButton.textContent = "delete"
  dltButton.classList.add("delete-button")
  newLi.appendChild(dltButton)

  newLi.textContent = inputValue
  console.log(newLi)

  const jsUl = document.getElementById("ul")
  jsUl.appendChild(newLi)

  input.value = ""

  newLi.addEventListener("click", () => {
    newLi.classList.toggle("done")

    dltButton.addEventListener("click", () => {
      newLi.remove
    })
  })
})

console.log(form)
