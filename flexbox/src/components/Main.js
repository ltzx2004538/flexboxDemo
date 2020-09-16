import React from 'react';
import KFC from './KFC';




class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    render(){
       
        return(
            <div className='container'>
                <KFC/>
            </div>
        )
    }
}

export default Main;