document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const deleteAll = document.createElement('button');
deleteAll.innerHTML = "Delete All"
deleteAll.id = 'deleteAll';
document.body.appendChild(deleteAll);

const deleteButton = document.querySelector('#deleteAll')
deleteButton.addEventListener('click', handleDeleteClick);

  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit)
})


const handleNewItemFormSubmit = function(event) {
event.preventDefault();
console.log("The form has been submitted");

const playerItem = createPlayerItem(event.target);

const playersList = document.querySelector('#players');
playersList.appendChild(playerItem)


}




const createPlayerItem = function(form){

const playerItem = document.createElement('li');
playerItem.classList.add('player-item');

const player = document.createElement('h2');
player.textContent = form.player.value;
playerItem.appendChild(player);

const character = document.createElement('h3');
character.textContent = form.character.value;
playerItem.appendChild(character);

const game = document.createElement('p');
game.textContent = form.game.value;
playerItem.appendChild(game);


return playerItem;
}

const handleDeleteClick = function(){
  console.log('clicked');
const list = document.getElementById("players");
  list.innerHTML = '';
};

//
// grpc conference
// cubecon in august
