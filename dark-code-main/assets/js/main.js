const goLinkPage ='./goto-link/index.html'

const projects = [
    {'name':'sport', 'id': '1wKR7'},
    {'name':'joun card', 'id': '1wKoC'},
    {'name':'eyes', 'id': '1wKqm'},
    {'name':'card yellow', 'id': '1wKtn'},
    {'name':'card rad', 'id': '1wKvr'},
    {'name':'pordect card', 'id': '1wL0F'},
    {'name':'clock', 'id': '1wL80'},
    {'name':'su', 'id': '1wLCn'},
]


// Add the cards
const container = document.querySelector('#container1-cards')
var temp = ' '
for(var i = 0; i < projects.length; i++){
    temp += 
    '<div class="card" style=" background: url(./assets/img/projects/' + projects[i].name.replace(' ', '%20') + '.png);">' + 
    '<div class="content">' +
            '<h2>' + projects[i].name + '</h2>' + 
       ' <a href="' + './goto-link/index.html?id=' + projects[i].id + '" class="ho5">to watch</a>' +
       ' <a class="ho2" href="' + './goto-link/index.html?id=' + projects[i].id + '">Code request </a>' +
   ' </div>' +
' </div>'
console.log(temp)
}
container.innerHTML = temp