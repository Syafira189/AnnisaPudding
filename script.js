const names = ["Queena", "Rona", "Fira", "Mira"];


names.forEach(name => {
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${name}`;
    listElement.appendChild(listItem);
});