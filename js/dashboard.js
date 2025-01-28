function addProject() {
    let totalProjects = document.getElementById('total-projects');
    let runningProjects = document.getElementById('running-projects');

    let total = parseInt(totalProjects.textContent);
    let running = parseInt(runningProjects.textContent);

    totalProjects.textContent = total + 1;
    runningProjects.textContent = running + 1;

    alert('New project added!');
}

function importData() {
    alert('Importing data...');
}