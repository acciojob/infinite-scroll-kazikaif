const infiList = document.getElementById('infi-list');
let itemCount = 10;

function addItems(count) {
  for (let i = 0; i < count; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${itemCount + 1}`;
    infiList.appendChild(listItem);
    itemCount++;
  }
}

addItems(10);

infiList.addEventListener('scroll', () => {
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    addItems(2);
  }
});
