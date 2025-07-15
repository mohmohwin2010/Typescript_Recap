export {}

type Employee ={
    name: string,
    position: string,
    salary: {
        amount: number,
        currency: string,
        bonus?: 10 | 20 | 30
    }
    isAdmin: boolean,
    employedAt: string,
    likesMeeting?: boolean,
    team?: string
}

type RequiredEmployee = Required<Employee>
type OptionalEmployee = Partial<Employee>
type ReadOnlyEmployee = Readonly<Employee>

//Pick
type SalaryPick = Pick<Employee, 'salary'>
type salary = Employee['salary']

//Omit
type SanitizedEmployee = Omit<Employee, 'employeeAt'> & {
    employeeAt: Date
}

function getSalaryHistory(id: string){
    return{
        formerEmployee: 'Google',
        formerPosition: 'CEO',
        formerSalary: 100000000,
        oldDuties: ['invent search engine', 'create Gmail']
    }
}

type oldPosition = ReturnType<typeof getSalaryHistory>