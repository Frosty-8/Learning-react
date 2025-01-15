// to initialize the class we Component class and extend it so that it extend the properties defined in it

import {Component} from 'react';
import {Onemore} from './onemore';
export class Welcome extends Component {
    render(){
        return(
            <>
            <Onemore />
            <h2>Welcome students</h2>
            </>
        )
    }
}
