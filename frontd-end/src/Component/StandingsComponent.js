import React, {Component} from 'react';
import LeagueNames from './LeagueNames';
import backendApi from '../backendApi.json';


class StandingsComponent extends Component{

    constructor(){
        super();
        this.state = {fetchError:false,leagueName:"",standings:{}};
        this.getData = this.getData.bind(this);
    }

    componentDidMount(){
        this.getData();
    }

 

    getData(){
        let param= this.props.match.params.leagueId;
        let leagueName = LeagueNames.leagueNameMap.get(param);
        fetch(backendApi.link+'standings/'+leagueName,{
            mode:'cors'
        })
        .then(res=>res.json(),
        (error)=>{console.log(error);
                    this.setState({fetchError:true})
                 }
                 ).then(res=>this.setState({standings:res}));
    }



    componentDidUpdate(){
        this.getData();
    }

    render(){

        const noDataError={
            backgroundColor:"red",
            padding:"10px"
        }
        
        let teamLogo = "";

        return(
                <div style={{width:"80%"}}>
                    {this.state.standings != null && this.state.standings.length > 0?
                    <div style={{backgroundColor:"white"}}>
                    <table style={{marginTop:"8%",fontSize:"smaller",border:"1px solid",padding:"20px",color:"gray",width:"100%"}}>
                        
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Game</th>
                                <th>Win</th>
                                <th>Draw</th>
                                <th>Lost</th>
                                <th>Points</th>
                            </tr>
                            
                        </thead>  
                   
                    <tbody>
                        {this.state.standings != null && this.state.standings.length > 0
                            ? this.state.standings.map(standing => 
                            <tr key={standing.row} style={{border:"1px solid",fontSize:"smaller"}}>
                                <td>{standing.row}<span style={{display:"none"}}>{teamLogo="https://s3.amazonaws.com/bookmkrs/img/logos/mini/"+ standing.teamScId+".png"}</span></td>
                                <td><img src=   {teamLogo} style={{float:"left",width:"20px",height:"20px"}}></img>{standing.team}</td>
                                <td>{standing.p}</td>
                                <td>{standing.w}</td>
                                <td>{standing.d}</td>
                                <td>{standing.l}</td>
                                <td>{standing.pnt}</td>
                            </tr>)
                            : null}
                    </tbody>
                    </table>
                    </div>:null}
                    {this.state.fetchError? <p style={noDataError}>No Data Found</p>:null}
                </div>
            )
        
    }
}

export default StandingsComponent;