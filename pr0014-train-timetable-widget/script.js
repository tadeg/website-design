const tableContent = document.getElementById('table-content');
const updateBtn = document.querySelector('.update-btn');

let courses = [

    {
        time: "07:10",
        destination: "WROCŁAW",
        course: "IC351",
        platform: "1",
        info: "NA CZAS"
    },
    {
        time: "08:20",
        destination: "SZCZECIN ",
        course: "IC852",
        platform: "2",
        info: "NA CZAS"
    },
    {
        time: "09:30",
        destination: "KRAKÓW",
        course: "EIP15",
        platform: "4",
        info: "NA CZAS"
    },
    {
        time: "09:50",
        destination: "WARSZAWA",
        course: "TLK23",
        platform: "3",
        info: "NA CZAS"
    },
    {
        time: "10:10",
        destination: "LUBLIN",
        course: "TLK20",
        platform: "4",
        info: "ODWOŁANY"
    },
    {
        time: "11:10",
        destination: "PRAHA",
        course: "IC230",
        platform: "5",
        info: "NA CZAS"
    },
    {
        time: "11:30",
        destination: "OLSZTYN",
        course: "EIP39",
        platform: "2",
        info: "OPÓŹNIONY"
    },
    {
        time: "12:30",
        destination: "LEGNICA",
        course: "IC389",
        platform: "2",
        info: "NA CZAS"
    }
]


const generateTableContent = () => {

    for (const item of courses) {
        const tableRow = document.createElement("tr")

        for (const itemDtl in item) {
            const tableCell = document.createElement("td")
            const element = Array.from(item[itemDtl])

            for (const [key, value] of element.entries()) {
                const letterDiv = document.createElement('div')

                setTimeout(() => {
                    letterDiv.classList.add('move')
                    letterDiv.textContent = value
                    tableCell.append(letterDiv)
                }, 100 * key)
            }


            tableRow.append(tableCell)
        }

        tableContent.append(tableRow)
    }
}

updateBtn.addEventListener('click', generateTableContent);