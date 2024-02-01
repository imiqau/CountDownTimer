import inquirer from 'inquirer';
let date_ob = new Date();
let user = await inquirer.prompt({
    type: 'input',
    name: 'cntr',
    message: 'Enter Count down in seconds: '
});
/*setTimeout(function(){
    console.log("Executed after 1 second");
}, 1000);*/
var wait = (ms) => {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
        now = Date.now();
    }
};
for (let index = user.cntr; index >= 0; index--) {
    console.log(index);
    wait(1000);
    console.clear();
}
