const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'courses1' }, { id: 2, name: 'courses2' }, { id: 3, name: 'courses3' },
];
app.get('/api/courses/:id', (req, res) => {
    res.send(courses);
});
app.post('/api/courses', (req, res) => {

    /* const schema = {
         name: Joi.string().min(3).required()
     };

     const result = Joi.validate(req.body, schema);
     // console.log(result);
     if (result.error) {
         res.status(400).send(result.error.details[0].message);
         return;
     }*/
    const { error } = validateCourse(req.body); //This is object destructer
    if (error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    /*if (!req.body.name || req.body.name.length < 3) {
        //400 Bad request 
        res.status(400).send('Name is required and you should be minimun 3 changes');
        return;
    }*/
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The courses with given id was not found');

    const result = validateCourse(req.body);
    const { error } = validateCourse(req.body); //This is object destructer


    //validate
    //if invalid return 400 - Bad Sector
    /* const schema = {
         name: Joi.string().min(3).required()
     };
     const result = Joi.validate(req.body, schema);*/
    if (error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    //Upated Course
    course.name = req.body.name;
    //Return the updated course
    res.send(course);

});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The courses with given id was not found');


    //lookup the course 
    //Not exciting,return 404


    //Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    //Return the same code 
    res.send(course);



});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}



/*
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The courses with given id was not found');
    req.send(course);
});

app.get('/', (req, res) => {
    res.send('Hello World Express JS');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3, 4, 5, 6]);
});
//app.get('/api/courses/:id', (req, res) => {
//  res.send(req.params.id);
//});
/*
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
}); */

app.get('/nabeel', (req, res) => {
    res.send('live in Karachi House no A-22B Abdul Isphani Road');
});

///Port(using port number )
const port = process.env.port || 1000;

app.listen(port, () => console.log(`Server on port ${port}`));