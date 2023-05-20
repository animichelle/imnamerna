// pick a tag to do our code in
// then lets set up js in this tag

//pick the section tag from our document
const container = document.querySelector("section")

//set parameters for what we need aka the stange
const params = {
  width: 500,
  height: 500,
}
// make a new version of 2js just for the container
const two = new Two(params)
two.appendTo(container)

//next, we want to add a square

const shape = two.makeRectangle(250, 250, 100, 100)
shape.fill = "blue"
shape.noStroke()
shape.rotation = Math.PI * 0.25

//listen for any update, any frame 60fps
two.bind("update", function () {
  shape.rotation -= 0.05
  shape.fill += "red"
})

two.play()
