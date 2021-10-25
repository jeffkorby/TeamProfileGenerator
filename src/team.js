const html = [];

const createTeam = team => {

    const createManager = manager => {
        return `
        <div class="card">
            <div class="card-header">
                <h1 class="card-title" id="name">${manager.getName()}</h1>
                <h2 class="card-title" id="role">${manager.getRole()}</h2>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:"${manager.getEmail()}>${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>`;
    };

    const createEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header">
                <h1 class="card-title">${engineer.getName()}</h1>
                <h2 class="card-title">${engineer.getRole()}</h2>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:"${engineer.getEmail()}>${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: ${engineer.getGithub()} </li>
                </ul>
            </div>
        </div>`;
    };

    const createIntern = intern => {
        return `
        <div class="card">
            <div class="card-header">
                <h1 class="card-title">${intern.getName()}</h1>
                <h2 class="card-title">${intern.getRole()}</h2>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:"${intern.getEmail()}>${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>`;
    };

    html.push(team
        .filter(employee=> employee.getRole() === "Manager")
        .map(manager => createManager(manager))
    );

    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );

    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("");
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>The Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron">
                    <h1 class="text-center">The Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 justify-content-center d-flex">
                    ${createTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>`;
    };