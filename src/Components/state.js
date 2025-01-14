import { Component } from "react";

export class Statempx extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }
    render(){
        return(
            <>
                <p>This is the example</p>
                <p>You clicked the button {this.state.count} times </p>
                <button onClick={()=> this.setState({count:this.state.count + 1})}>
                    Incrementing
                </button>

                <input onKeyDown={(e)=>
                    {
                        if(e.key === 'Enter'){
                            this.setState({
                                count:this.state.count + 1
                            });
                    }else if(e.key === 'Backspace'){
                        this.setState({
                            count:this.state.count - 1
                        });
                    }
                }
            }/>
            </>
        );
    }
}

