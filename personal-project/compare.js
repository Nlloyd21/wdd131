const staterooms = [
    {
        id: "interior",
        name: "Interior Stateroom",
        price: 450,
        size: 185,
        capacity: 2,
        perks: ["Affordable", "Great for Sleeping", "Close to Elevators"],
        image: "images/inside.Webp"
    },
    {
        id: "ocean-view",
        name: "Ocean View Stateroom",
        price: 600,
        size: 220,
        capacity: 2,
        perks: ["Large Picture Window", "Natural Light", "Extra Storage Space"],
        image: "images/oceanview.Webp"
    },
    {
        id: "balcony",
        name: "Balcony Stateroom",
        price: 850,
        size: 220,
        capacity: 3,
        perks: ["Ocean Breeze", "Floor-to-ceiling Window","Private Vernada"],
        image: "images/balcony.Webp"
    },
    {
        id: "suite",
        name: "Suite Stateroom",
        price: 1200,
        size: 345,
        capacity: 4,
        perks: ["Priority Boarding", "Large Balcony", "Walk-in Closet", "VIP lounge access"],
        image: "images/suite.Webp"
    }
];

const selectA = document.getElementById('select-a');
const selectB = document.getElementById('select-b');

selectA.addEventListener('change', (e) => {
    const selectedID = e.target.value;
    const roomMatch = staterooms.find(room => room.id === selectedID);

    if (roomMatch) {
        renderStateroom(roomMatch, 'details-a');
    }
});

selectB.addEventListener('change', (e) => {
    const selectedId = e.target.value;
    const roomMatch = staterooms.find(room => room.id === selectedId);
    
    if (roomMatch) {
        renderStateroom(roomMatch, 'details-b');
    }
});

function renderStateroom(room, containerId) {
    const container = document.getElementById(containerId);

    container.innerHTML = `
        <div class="stateroom-info">
            <img src="${room.image}" alt="${room.name}" style="width:100%; border-radius:8px;">
            <h3>${room.name}</h3>
            <p class="price"><strong>$${room.price}</strong> avg/pp</p>
            <p><strong>Capacity:</strong> Sleeps ${room.capacity}</p>
            <p><strong>Size:</strong> ${room.size} sq ft</p>
            <ul class="perks">
                ${room.perks.map(perk => `<li>${perk}</li>`).join('')}
            </ul>
        </div>
    `;

    container.classList.remove('hidden');
}


let roomA = null;
let roomB = null;

const compareBtn = document.getElementById('compare-btn');
const criteriaSelect = document.getElementById('highlight-select');

compareBtn.addEventListener('click', () => {
    const criteria = criteriaSelect.value;
    const cardA = document.getElementById('card-a');
    const cardB = document.getElementById('card-b');

    // Remove existing highlights first
    cardA.classList.remove('winner');
    cardB.classList.remove('winner');

    if (!roomA || !roomB || !criteria) {
        alert("Please select two rooms and a criteria first!");
        return;
    }

    if (criteria === "price") {
        // For price, lower is better
        if (roomA.price < roomB.price) {
            cardA.classList.add('winner');
        } else if (roomB.price < roomA.price) {
            cardB.classList.add('winner');
        }
    } 
    else if (criteria === "capacity") {
        // For capacity, higher is better
        if (roomA.capacity > roomB.capacity) {
            cardA.classList.add('winner');
        } else if (roomB.capacity > roomA.capacity) {
            cardB.classList.add('winner');
        }
    }
    else if (criteria === "size") {
        // Since size is a string "185 sq ft", we need to turn it into a number
        const sizeA = parseInt(roomA.size);
        const sizeB = parseInt(roomB.size);
        
        if (sizeA > sizeB) {
            cardA.classList.add('winner');
        } else {
            cardB.classList.add('winner');
        }
    }
});
