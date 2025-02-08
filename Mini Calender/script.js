const monthName = document.getElementById("month-name")
const dateName = document.getElementById("date-name")
const dayNum = document.getElementById("day-number")
const year = document.getElementById("year")

const date = new Date();

const month = date.getMonth()

monthName.innerText = date.toLocaleDateString("en",{
    month: "long"
})

dateName.innerText = date.toLocaleDateString("en",{
    weekday : "long"
})

dayNum.innerText = date.getDate()

year.innerText = date.getFullYear()