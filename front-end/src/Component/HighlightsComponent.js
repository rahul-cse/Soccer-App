import React, {Component} from 'react';
import backendApi from '../backendApi.json';
import VideoEmbedComponent from './VideoEmbedComponent';

class HighlightsComponent extends Component{

    constructor(){
        super();
        this.state = {highlights:{},embed:"",embedComponent:false};

  
    }

    

    componentDidMount(){
        fetch(backendApi.link+'highlights',{
            mode:'cors',
        })
        .then(res=>res.json(),
        (error)=>console.log(error))
        .then(res=>{
            console.log(res);this.setState({highlights:res})
        });
    }

    getVideoClip(embed){
        console.log(embed);
        this.setState({embed:embed,embedComponent:true});
    }

    render(){
        const pStyle = {
            backgroundColor:"#6699ff",
            padding:"10px"
        };
        return(
            <div>
                {!this.state.embedComponent?<div style={{marginTop:"100px",fontSize:"20px"}}>
                    {this.state.highlights && this.state.highlights.length > 0 ?
                        this.state.highlights.map(highlights => <p key={highlights.title} style={pStyle}>{highlights.title}
                            <span style={{float:"right",cursor:"pointer"}} onClick={()=>this.getVideoClip(highlights.embed)} > <i className="fa fa-play-circle" aria-hidden="true"></i></span>
                                
                            
                            </p>)

                        : null}
                </div>:null}
                {/* {this.state.embedComponent?<VideoEmbedComponent embed={this.state.embed}/>:null} */}
                {this.state.embedComponent?<div style={{weight:"100%"}}><iframe  src={this.state.embed} allowFullScreen allow='autoplay; fullscreen' style={{width:'100%',height:'100%',position:'absolute',left:'0px',top:'0px',overflow:'hidden'}}></iframe></div>:null}
            </div>
        );
    }
}

export default HighlightsComponent