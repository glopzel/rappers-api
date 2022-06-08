const express = require('express');
const app = express();
const PORT = 8000;


const rappers = {
    '21 savage': {
        'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England',
    'age': 29,
    },
    'chance the rapper': {
        'birthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illinois, U.S.A.',
        'age': 29,
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
    
}
// network request mawma, when it hears it, it fires a function
app.get('/', (request, response) => {
    // server knows to look in the current directory for the file!
    response.sendFile(__dirname + '/index.html');
});

// after the api/ a colon and a parameter that stands for the query parameter
app.get('/api/:name', (request, response) => {
    // you grab whatever goes after /api/, you grab what was entered console.log(request.params.name)
    const rapperName = request.params.name.toLocaleLowerCase()
    // see if name entered exists on our object, if rapperName exists within the object rappers
    if (rappers[rapperName]) {
        // i want to respond with json
        response.json(rappers[rapperName]);
    } else {
        response.json(rappers['unknown']);
    }
})

// to avoid the error Web process failed to bind to $PORT you use process.env.PORT
app.listen( process.env.PORT || PORT,() => {
    console.log(`the server now is running on port ${PORT}, better go catch it!`);
});