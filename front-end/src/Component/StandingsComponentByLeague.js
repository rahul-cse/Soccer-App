import React, {Component} from 'react';

class StandingsComponentByLeague extends Component{

    constructor(){
        super();
        this.state = {fetchError:false};
    }

    render(){
        return(
            <div>
                {this.state.fetchError? <p style={noDataError}>No Data Found</p>:null}
            </div>
        )
           
        
    };
}