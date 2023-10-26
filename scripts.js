let items = JSON.parse(localStorage.getItem('items')) || [];

document.addEventListener('DOMContentLoaded', () => {
    displayItems();
});

function addItem() {
    const itemValue = document.getElementById("itemInput").value;
    if (itemValue) {
        items.push(itemValue);
        document.getElementById("itemInput").value = "";
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
    }
}

function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}

function editItem(index) {
    const updatedValue = prompt("Edit item:", items[index]);
    if (updatedValue) {
        items[index] = updatedValue;
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
    }
}

function displayItems() {
    const itemsList = document.getElementById("itemsList");
    itemsList.innerHTML = "";

    items.forEach((item, index) => {
        itemsList.innerHTML += `
            <div class="item">
                <span>${item}</span>
                <div>
                    <button onclick="editItem(${index})">Editar</button>
                    <button onclick="deleteItem(${index})">Borrar</button>
                </div>
            </div>
        `;
    });
}
