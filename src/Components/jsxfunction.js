export function JSXfunction(){
    const user = {first_name : 'Seema' , last_name: 'Shah'};
    function Formatuser(user){
        return (user.first_name + " " + user.last_name + "!!");

    }
    return (
        <h2> Hello {Formatuser(user)}</h2>
    );
}
