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
        </div>`;

    container.classList.remove('hidden');
}




const compareBtn = document.getElementById('highlight');

compareBtn.addEventListener('change', () => {
    const criteria = document.getElementById('highlight').value;
    const cardA = document.getElementById('card-a');
    const cardB = document.getElementById('card-b');

    
    cardA.classList.remove('highlight-winner');
    cardB.classList.remove('highlight-winner');

    const roomA = staterooms.find(r => r.id === document.getElementById('select-a').value);
    const roomB = staterooms.find(r => r.id === document.getElementById('select-b').value);

    if (!roomA || !roomB || !criteria) return;
    
    if (criteria === "price") {
        if (roomA.price < roomB.price) cardA.classList.add('highlight-winner');
        else if (roomB.price < roomA.price) cardB.classList.add('highlight-winner');
    } 
    else if (criteria === "capacity") {
        if (roomA.capacity > roomB.capacity) cardA.classList.add('highlight-winner');
        else if (roomB.capacity > roomA.capacity) cardB.classList.add('highlight-winner');
    } 
    else if (criteria === "size") {
        if (roomA.size > roomB.size) cardA.classList.add('highlight-winner');
        else if (roomB.size > roomA.size) cardB.classList.add('highlight-winner');
    }
});