import React, {Component} from 'react';
import backendApi from '../backendApi.json';

class HomeComponent  extends Component{

    constructor(){
        super();
        this.state = {result:{}};
        this.loadData = this.loadData.bind(this);

        const grayTimeStyle={
            color:"gray",
            fontSize:"15px"
        };
        const greenTimeStyle={
            color:"green",
            fontSize:"15px"
        };

    }
    

    componentDidMount(){
        this.loadData();
    }
    componentWillUnmount(){
        console.log("component gone");
    }

    loadData(){

        fetch(backendApi.link+'live',{
            mode:'cors',
            
        })
        .then(res=>res.json(),
                (error)=>console.log(error))
        .then(
             (res)=>{
                 this.setState({result:res}); console.log(this.state);
                 setTimeout(this.loadData, 10000);
                },
                 
             );
        
    }

    render(){
        let l = "<div ><iframe src='https:\/\/www.scorebat.com\/embed\/g\/865805\/?s=2' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' ><\/iframe><\/div>";    
        return (
            <div>
                <div style={{marginTop:"100px",fontSize:"20px"}}>
                {/* <div style={{backgroundColor:"orange"}}>
                    <div className="row">
                        <div className="col-md-6">All</div>
                        <div className="col-md-6">Live*</div>
                    </div>
                </div> */}
               <table style={{borderCollapse:"separate"}}>
        {this.state.result && this.state.result.length>0?(this.state.result.map(res=>
            <tr style={{textAlign:"center",backgroundColor:"white"}} key={res.id}>
            <td style={{color:"black"}}> {res.s1}</td><td style={{padding:"5px",color:"black"}}>{res.sc1} - {res.sc2}
                <div className={res.s=='FT'?'text-secondary':'text-success'}>
                    {(() => {
                            switch ( res.s ) {
                                case "FT": return "Full Time";
                                case "HT": return "Half Time";
                                case "Canc": return "";
                                case "Pst": return "Postponed";
                                default: return res.time+"'"
                            }
                        }
                    )() }               
                </div>
            </td>
            <td style={{display:"table-cell",color:"black"}}>{res.s2}</td>
            </tr>))
            :null
        }
            </table>
               </div>
               {/* <div className="content" dangerouslySetInnerHTML={{__html: l}}></div> */}
            </div>
        )
    }
}

export default HomeComponent;