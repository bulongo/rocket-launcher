// I should bring questions according to difficulty
// start the difficulty level at preschool math.
const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
const CANVAS_WIDTH = canvas.width = window.innerWidth
const CANVAS_HEIGHT = canvas.height = window.innerHeight
const operators = Array.from(document.getElementsByClassName("operator"))
const chosenOperator = document.getElementById("chosenOperator")
const firstNumber = document.getElementById("firstNumber")
const secondNumber = document.getElementById("secondNumber")
const answer = document.getElementById("answer")


const createNumbers = () => {
  firstNumber.innerText = Math.floor(Math.random() * 10)
  secondNumber.innerText = Math.floor(Math.random() * 10)
  answer.innerText = Math.floor(Math.random() * 10)

  if (Number(firstNumber.innerText) + Number(secondNumber.innerText) == Number(answer.innerText) ||
    Number(firstNumber.innerText) - Number(secondNumber.innerText) == Number(answer.innerText)
  ) {
    return
  } else {
    createNumbers()
  }
}

createNumbers()


const rocket = new Rocket()

const moveRocket = (ans) => {
  if (ans == true) {
    rocket.acceleration += 10
  }
}

const handleOperators = (ans) => {
  // if the operator chosen is the correct one, this function clears the chosen operator field
  // and changes the numbers to operate on.
  moveRocket(ans)
  console.log(ans)
  setTimeout(() => {
    chosenOperator.innerText = ""
    createNumbers()
    rocket.acceleration *= -1
  }, 1000)
}

const checker = (operand) => {
  let ans
  // this will just check if the clicked element is the one need to complete the calculation
  // console.log(`The operator used here is ${operand}`)
  switch (operand) {
    case "+":
      chosenOperator.innerText = "+"
      ans = Number(firstNumber.innerText) + Number(secondNumber.innerText) == Number(answer.innerText)
      moveRocket(ans)
      handleOperators(ans)
      break
      return ans
    case "−":
      chosenOperator.innerText = "−"
      ans = Number(firstNumber.innerText) - Number(secondNumber.innerText) == Number(answer.innerText)
      handleOperators(ans)
      // console.log(Number(answer.innerText))
      break
    // return ans
    case "×":
      chosenOperator.innerText = "×"
      ans = firstNumber * secondNumber == answer
      moveRocket(ans)
      // console.log(ans)
      break
    // return ans
    case "÷":
      chosenOperator.innerText = "÷"
      ans = firstNumber / secondNumber == answer
      moveRocket(ans)
      // console.log(ans)
      break
    // return ans
    default:
      break
  }
}

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    checker(operator.innerText)
  })
})

// chosenOperator.innerText = "+"


const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  rocket.update()
  requestAnimationFrame(animate)
}

animate()
