export{}

type CEO = 'jeff'

type Founder = 'Bil'

type CeoAndFounder = CEO & Founder

type willNeverHappen = string & number

function neverReturns(): never {
    while(true){

    }
}

function doStuff(arg: string | number){
    if(typeof arg === 'string'){
        console.log(arg)
        return
    }

    if(typeof arg === 'number'){
        console.log(arg)
        return
    }
    console.log(arg); //will never happen
}

//enums: a group of constants
enum Position{
    Programmer = 'Programmer',
    HR = 'HR',
    Manager = 'Manager',
    /*
    * Must receive at least 2000% yearly bonus
    */
    CEO = 'CEO'
}

type Employee = {
    name: string,
    salary: number,
    position: Position
}

function payBonus(empl: Employee){
    //Pay CEO bonus:
    if(empl.position === Position.CEO){
        //surprize bonus
    }
}

/**
 * CEO bonus: ...
 * Programmer bonus: ...
 */
type PositionType = 
    | 'Programmer'
    | 'HR'
    | 'CEO'

function payAnnualBonus(empl: Employee){
    let bonusPercent: number = 0;
    const position = empl.position;
    switch(empl.position){
        case Position.Programmer:
            bonusPercent = 0.2
            break;
        case Position.HR:
            bonusPercent = 0.8
            break;
        case Position.CEO:
            bonusPercent = 200
            break;
        default:
            //exhaustive enum:
            const remainingValues: never = position;
            break;
    }
    console.log(`Paying ${empl.salary * bonusPercent} as bonus to ${empl.name}`)
}