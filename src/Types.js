//Type aliases: define the shape of an object
var myColleague = {
    name: 'John',
    age: 30,
    position: "Programmer"
};
var myOtherColleague = {
    name: 'Bill',
    age: 30,
    position: "Programmer",
    greetBack: function () {
        console.log("Hello");
    }
};
function greetColleague(colleague) {
    console.log('Hi ' + colleague.name);
    if (colleague.greetBack) {
        colleague.greetBack();
    }
}
greetColleague(myColleague);
greetColleague(myOtherColleague);
