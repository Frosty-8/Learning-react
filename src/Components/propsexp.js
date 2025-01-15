// properties that we pass from parent to child

export function Props(props){
    return(
        <>
            <h1>Hello {props.dataattr.fname} {props.dataattr.lname} </h1>
            <h2>Age is  {props.dataattr.age} and I am from {props.dataattr.city}</h2>
        </>
    );
}