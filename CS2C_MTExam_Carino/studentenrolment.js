const DSA = []
const PL = []
const Networks = []

function displayStudents(subjectArray) {
    if (subjectArray.length === 0) {
        console.log("No students enrolled.")
    } else {
        console.log("Currently enrolled students:")
        subjectArray.forEach((student, index) => {
            console.log(${index + 1}: ${student})
        })
    }
}

function enrollStudent(subjectArray) {
    const studentName = prompt("Enter your name to enroll:")
    subjectArray.push(studentName)
    console.log(${studentName} has been enrolled.)
}

function unenrollStudent(subjectArray) {
    displayStudents(subjectArray)
    if (subjectArray.length === 0) return

    const studentName = prompt("Enter your name to unenroll:")
    const index = subjectArray.indexOf(studentName)
    
    if (index !== -1) {
        subjectArray.splice(index, 1)
        console.log(${studentName} has been unenrolled.)
    } else {
        console.log(${studentName} is not enrolled in this subject.)
    }
}

function selectSubject() {
    while (true) {
        const subject = prompt("Select a subject to enroll (A) DSA, (B) PL, (C) Networks, (D) Exit:")

        let subjectArray
        if (subject === 'A') {
            subjectArray = DSA
        } else if (subject === 'B') {
            subjectArray = PL
        } else if (subject === 'C') {
            subjectArray = Networks
        } else if (subject === 'D') {
            console.log("Exit program")
            console.log("Final enrollment:")
            console.log(DSA: ${DSA})
            console.log(PL: ${PL})
            console.log(Networks: ${Networks})
            break
        } else {
            console.log("Please select again.")
            continue
        }

        while (true) {
            const operation = prompt("Select an operation: (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit")

            if (operation === 'A') {
                enrollStudent(subjectArray)
            } else if (operation === 'B') {
                unenrollStudent(subjectArray)
            } else if (operation === 'C') {
                break
            } else if (operation === 'D') {
                console.log("Exit program")
                console.log("Final enrollment:")
                console.log(DSA: ${DSA})
                console.log(PL: ${PL})
                console.log(Networks: ${Networks})
                return
            } else {
                console.log("Please select again.")
            }
        }
    }
}

selectSubject()