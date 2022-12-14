import styled from "@emotion/styled"
import informations from '../assets/informations.png'
import Carousel from "./Carousel"



export default function Apropos() {
    return(
        <Container>

        <img src={informations} alt="informations à propos de moi" />

        <div className="all" style={{display : 'flex', alignItems : 'center', justifyContent : 'center', flexDirection : 'column'}}>
            <div className="dn">
                <h2 style={{color : 'rgb(137,239,204)', fontSize : '2.5em', fontFamily : 'monospace', letterSpacing : '4px', textAlign : 'center'}}>Ma méthode</h2>
                <br/><br/>
                <Carousel />
                <div style={{display : 'flex', justifyContent : 'space-between', width : '100%', marginTop : '1em'}}>
                    <p style={{color : 'grey'}}>Glisse vers la gauche</p>
                    <p style={{color : "grey"}}>Glisse vers la droite</p>
                </div>
            </div>
        </div>
        


        </Container>
    )
}



const Container = styled.div`

display : flex;
align-items : center;
height : 100%;
justify-content : space-evenly;
-webkit-user-select: none;
-webkit-touch-callout: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;


    img{
        z-index : 5;
        height: 90vh;
    }




    @media screen and (max-width : 900px){
     
        text-align : center;
        justify-content : center;
        flex-direction : column;
        font-size : 0.8em;
      
        img{
          width : 45vh;
          height : unset;
         
        }
      
        .dn{
            display : none;
        }
        
      
      }

    
      @media screen and (max-width : 377px){
 
        img{
          width : 55vh;
          height : unset;
         
        }
      
      
      }
      



`