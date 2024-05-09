function addSeatTitle() {
    let preview = document.querySelector(".preview");
    const color = ["#58899c", "#cfdce1", "#e94074"]
    const seatTitle = ["Available", "Booked", "Selected"];

    for (let i = 0; i < 3; i++) {
        let seat = document.createElement("span");
        seat.classList.add('flex', 'flex-row', 'gap5', 'align-center');

        seat.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="18" fill="${color[i]}"><path d="M16 3H8C5.79086 3 4 4.79086 4 7V8C6.76142 8 9 10.2386 9 13H15C15 10.2386 17.2386 8 20 8V7C20 4.79086 18.2091 3 16 3ZM20 10C18.3431 10 17 11.3431 17 13V16H15V15H9V16H7V13C7 11.3431 5.65685 10 4 10C2.34315 10 1 11.3431 1 13C1 14.3062 1.83481 15.4175 3 15.8293V21H5V20H19V21H21V15.8293C22.1652 15.4175 23 14.3062 23 13C23 11.3431 21.6569 10 20 10Z"></path></svg>
    <small>${seatTitle[i]}</small>`;

        preview.appendChild(seat);
    }
}
addSeatTitle();
function addLeftRightSeat(){


const div1 = document.querySelector(".leftSeat");
const text = ['G', 'F', 'E', 'D', 'C', 'B', 'A'];
let textIndex = 0;
const colors = ["#58899c", "#cfdce1"];
let colorIndex = 0;

for (let i = 0; i < 42; i++) {
    const divElement = document.createElement("span");
    divElement.classList.add("seat");

    if (i === 0 || i === 6 || i === 12 || i === 18 || i === 24 || i === 30 || i === 36) {
        const divSmallText = document.createElement("small");
        divSmallText.textContent = text[textIndex];
        divElement.prepend(divSmallText);
        textIndex++;
    } else {
        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.setAttribute("viewBox", "0 0 24 24");
        svgElement.setAttribute("width", "20");
        svgElement.setAttribute("height", "18");
        svgElement.setAttribute("fill", colors[colorIndex]);

        const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathElement.setAttribute("d", "M16 3H8C5.79086 3 4 4.79086 4 7V8C6.76142 8 9 10.2386 9 13H15C15 10.2386 17.2386 8 20 8V7C20 4.79086 18.2091 3 16 3ZM20 10C18.3431 10 17 11.3431 17 13V16H15V15H9V16H7V13C7 11.3431 5.65685 10 4 10C2.34315 10 1 11.3431 1 13C1 14.3062 1.83481 15.4175 3 15.8293V21H5V20H19V21H21V15.8293C22.1652 15.4175 23 14.3062 23 13C23 11.3431 21.6569 10 20 10Z");

        svgElement.appendChild(pathElement);
        divElement.appendChild(svgElement);

        if (colors[colorIndex] === "#cfdce1") {
            divElement.style.cursor = "no-drop";
        } else {
            divElement.style.cursor = "pointer";
            svgElement.addEventListener("click", () => {
                // Toggle between colors
                if (svgElement.getAttribute("fill") === "#58899c") {
                    svgElement.setAttribute("fill", "#e94074");
                } else {
                    svgElement.setAttribute("fill", "#58899c");
                }
            });
        }
    }

    div1.appendChild(divElement);
    colorIndex = (i + 1) % 7 === 0 ? (colorIndex + 1) % colors.length : colorIndex;
}


const rightSeat = document.querySelector(".rightSeat"); // Select the rightSeat section

// Loop to create the seats in the rightSeat section
for (let i = 0; i < 35; i++) {
    const divElement = document.createElement("span");
    divElement.classList.add("seat");

    // Creating the SVG element for the seat
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("viewBox", "0 0 24 24");
    svgElement.setAttribute("width", "20");
    svgElement.setAttribute("height", "18");
    svgElement.setAttribute("fill", colors[colorIndex]);

    // Creating the path element within the SVG
    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M16 3H8C5.79086 3 4 4.79086 4 7V8C6.76142 8 9 10.2386 9 13H15C15 10.2386 17.2386 8 20 8V7C20 4.79086 18.2091 3 16 3ZM20 10C18.3431 10 17 11.3431 17 13V16H15V15H9V16H7V13C7 11.3431 5.65685 10 4 10C2.34315 10 1 11.3431 1 13C1 14.3062 1.83481 15.4175 3 15.8293V21H5V20H19V21H21V15.8293C22.1652 15.4175 23 14.3062 23 13C23 11.3431 21.6569 10 20 10Z");

    // Appending the path element to the SVG element
    svgElement.appendChild(pathElement);

    // Appending the SVG element to the div element
    divElement.appendChild(svgElement);

    // Adding cursor style based on seat color
    if (colors[colorIndex] === "#cfdce1") {
        divElement.style.cursor = "no-drop";
    } else {
        divElement.style.cursor = "pointer";
        svgElement.addEventListener("click", () => {
            // Toggle between colors
            if (svgElement.getAttribute("fill") === "#58899c") {
                svgElement.setAttribute("fill", "#e94074");
            } else {
                svgElement.setAttribute("fill", "#58899c");
            }
        });
    }

    // Appending the div element to the rightSeat section
    rightSeat.appendChild(divElement);

    // Updating the colorIndex for cycling through colors
    colorIndex = (i + 1) % 7 === 0 ? (colorIndex + 1) % colors.length : colorIndex;
}
}
addLeftRightSeat();

function addFooterElement(){


let movieCard = document.querySelector(".movieCard");
let screenSec = document.createElement("div")
screenSec.classList.add('screen', 'flex', 'flex-column', 'justify-center', 'align-center');
screenSec.innerHTML = `<small>Screen</small>`;
movieCard.appendChild(screenSec);


let footerElement = document.createElement("footer");
footerElement.classList.add('flex', 'flex-row', 'gap0', 'align-center');
footerElement.innerHTML = `<div class="dateTime flex flex-column gap5">
<p>Date</p>
<p>Tickets</p>
<p>TOTAL</p>
</div>
<div class="dateTimeInfo flex flex-row justify-between align-center">
<div class=" flex flex-column gap5">
    <p>Jul 11, 19.15</p>
    <p>3</p>
    <p>$31</p>
</div>
<button class="flex flex-row justify-center align-center gap5">
    
    Next
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" style="margin-top:3px">
            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </span>
</button>
</div>`;

movieCard.appendChild(footerElement);
}
addFooterElement();