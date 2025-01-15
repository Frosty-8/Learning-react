import { studentContext } from "./useContexthook";

export function StudentContextComponent(props){
    const firstname = "Deepak";
    const lastname = "Kulkarni";
    const ages = "11";

    return(
        <studentContext.Provider  value={{firstname,lastname,ages}}>
            {props.children}
        </studentContext.Provider>
    );
}