document.getElementById('generateBtn').addEventListener('click', function () {
    var gender = document.getElementById('gender').value;
    var startingLetter = document.getElementById('startingLetter').value.toUpperCase();
    generateNames(gender, startingLetter);
});

function generateNames(gender, startingLetter) {
    var boyNames = ['Benjamin', 'Daniel', 'Ethan', 'James', 'Michael', 'Noah'];
    var girlNames = ['Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia'];

    var filteredNames = (gender === 'boy') ? boyNames : girlNames;
    filteredNames = filteredNames.filter(name => name.startsWith(startingLetter));

    var nameList = document.getElementById('nameList');
    nameList.innerHTML = '';

    if (filteredNames.length === 0) {
        nameList.textContent = 'No names found.';
    } else {
        for (var i = 0; i < Math.min(filteredNames.length, 5); i++) {
            var listItem = document.createElement('div');
            listItem.textContent = filteredNames[i];
            nameList.appendChild(listItem);
        }
    }
}
