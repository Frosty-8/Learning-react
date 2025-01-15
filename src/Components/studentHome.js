import { useContext } from "react";
import { studentContext } from "./useContexthook";

export function StudentHome(){
    const datas = useContext(studentContext);
    return (
        <>
            <h2>Student Information</h2>
            <h3>Welcome {datas.firstname} {datas.lastname} and this is your age : {datas.ages}</h3>
        </>
    );
}