
const PeopleView = ({name, people})=>{
    return (<>
        <h1>PeopleView</h1>

        {people.map((person, index)=>{
            return <p key={index}>{person.name} is {person.age} years old</p>
        })
        }
    </>)
}
export default PeopleView