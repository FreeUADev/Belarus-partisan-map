const fs = require('fs');

const date = new Date();
const months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
const month = months[date.getMonth()]
const datestr = 'Оновлено ' + date.getDate().toString() + '.' + ('0' + date.getMonth().toString()).slice(-2) + ' о ' + date.getHours().toString() + ':' + date.getMinutes().toString()

fs.writeFile("./update.txt", datestr.toString(), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(datestr.toString());
}); 

// Or
//fs.writeFileSync('/update.txt', new Date);