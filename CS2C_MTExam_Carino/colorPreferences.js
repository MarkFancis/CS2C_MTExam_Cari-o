let colorPreferance = []

while (true) {
    let color = prompt("enter a color, 'stop' to finish")
    if (color.toLocaleLowerCase() === 'stop') {
        break
    }
    colorPreferance.push(color)
    console.log("color prefenece", colorPreferance)
}