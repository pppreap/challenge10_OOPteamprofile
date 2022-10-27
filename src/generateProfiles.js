const managerHTML = manager => {
    return ` 
    <div class="card employee-card">
    <div>
        <h2 class="employee-title">  ${manager.name}</li> </h2>
        <h3 class="employee-title"><i class="fas fa-glasses mr-2"></i> Manager </h3>
    </div>
    <div>
        <ul>
            <li class="card-item">Employee ID: ${manager.id}</li>
            <li class="card-item">Email:<a href="mailto:${manager.email}">${manager.email}</li>
            <li class="card-item">Office Number:${manager.officeNumber}</li>
        </ul>
    </div>
</div>
    `
}
const internHTML = intern => {
    return ` 
    <div class="card employee-card">
    <div>
        <h2 class="employee-title">  ${intern.name}</li> </h2>
        <h3 class="employee-title"><i class="fas fa-glasses mr-2"></i> Intern </h3>
    </div>
    <div>
        <ul>
            <li class="card-item">Employee ID: ${intern.id}</li>
            <li class="card-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="card-item">School Name:${intern.school}</li>
        </ul>
    </div>
</div>
    `
}
const engineerHTML = engineer => {
    return ` 
    <div class="card employee-card">
    <div>
        <h2 class="employee-title">  ${engineer.name}</li> </h2>
        <h3 class="employee-title"><i class="fas fa-glasses mr-2"></i> Engineer </h3>
    </div>
    <div>
        <ul>
            <li class="card-item">Employee ID: ${engineer.id}</li>
            <li class="card-item">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="card-item">Github:<a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
    </div>
</div>
    `
}
const generateProfiles = teamArray => {
    startList = [];
    for (let i=0; teamArray.length>i; i++){
        const role = teamArray[i].getRole();

        if ( role === 'Manager') {
            startList.push(managerHTML(teamArray[i]));
        }
        if ( role === 'Engineer') {
            startList.push(engineerHTML(teamArray[i]));
        }
        if ( role === 'Intern') {
                startList.push(internHTML(teamArray[i]));
        }
    }
    const joinTeam = startList.join('');
    return HTMLPage(joinTeam);
}

const HTMLPage = joinTeam => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css" />
    <title>My Team</title>
</head>
<header>
    <h1>My Team</h1>
</header>
<body>

    <main>
    ${joinTeam}
    </main>
    
</body>
</html>
    `
}

module.exports = generateProfiles;