let character = {
    name: 'Snortleblat',
    class: 'Swamp Beast',
    level: 5,
    health: 100
};

function takeDamage(amount) {
    character.health -= amount;

    if (character.health <= 0) {
        character.health = 0;}

    if (character.health === 0 ){    

        alert(character.name + " has died. You lost!");

        document.querySelector('#attack-btn').disabled = true;
        document.querySelector('#levelUp-btn').disabled = true;
    }

    updateDisplay();
}

function levelUp(){
    character.level += 5;

    updateDisplay();
}

function updateDisplay(){

    const healthEl = document.querySelector(' .health');
    const levelEl = document.querySelector(' .level');

    healthEl.textContent = character.health;
    levelEl.textContent = character.level;
    className.textContent = character.class;

}

document.querySelector('#attack-btn').addEventListener('click', () => {

    const randomDamage = Math.floor(Math.random() * 20) + 1;

    takeDamage(randomDamage);
});

document.querySelector('#levelUp-btn').addEventListener('click', () => {
    levelUp();
});