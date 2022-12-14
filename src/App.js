import logo from './assets/logo.png';
import './App.css';
import styled from '@emotion/styled'
import { useRef, useState } from 'react';
import Apropos from './components/Apropos';
import desktop from '../src/assets/desktop.png'
import Competences from './components/Competences';


function App() {



  let curseurRef = useRef();


  const [isHamburger, setHamburger] = useState(false);

  const mousePos = e => {
    curseurRef.current.setAttribute('style',  `top : ${e.pageY - 10}px ; left : ${e.pageX-10}px`)
  }


  return (
    <div className="App" onMouseMove={mousePos}>

      <div ref={curseurRef} className="curseur-perso"></div>

      <section className='one'>
        <Menu>
        <div className="header">  
          <div className='bg'></div> 
                <img src={logo} alt="logo" width={50} />
                <nav>
                    <ul>
                        <a href="#two"><li>À propos de moi</li></a>    
                        <a href="#three"><li>Expériences</li></a>    
                        <a href="#four"><li>Projets</li></a>    
                        <a href="#five"><li>Me contacter</li></a>    
                    </ul>
                </nav>
                <button onClick={()=> setHamburger(true)} style={{ color : 'white', fontSize :'2em', marginRight : '1em'}}>☰</button>
            </div>
        </Menu>
        
        <Hamburger>
          {isHamburger && (
            <div style={{height : '100vh', width : '100%', backgroundColor : '#0a192f', position : 'fixed', zIndex : '10'}}>
              <button onClick={()=> setHamburger(false)} style={{ color : 'white', fontSize :'2.5em', position : 'absolute', right :' 35px', top : '15px', backgroundColor : 'unset', border : 'none'}}>&times;</button>

              <nav style={{display : 'flex', alignItems : 'center', justifyContent : 'center', height : '100%'}}>
                      <ul>
                          <a href="#two" onClick={()=> setHamburger(false)}><li>À propos de moi</li></a>    
                          <a href="#three" onClick={()=> setHamburger(false)}><li>Expériences</li></a>    
                          <a href="#four" onClick={()=> setHamburger(false)}><li>Projets</li></a>    
                          <a href="#five" onClick={()=> setHamburger(false)}><li>Me contacter</li></a>    
                      </ul>
                  </nav>
            </div>
          )}
        </Hamburger>
        

        <FlexTop>
        <div className='desktop' style={{zIndex : '0'}}>  
            <img src={desktop} alt="desktop" width={600}/>
          </div>

          <div className="nom">
            <h1>Bienvenue, je <br/> suis William.</h1>
            <br/>
            <h2>Développeur web</h2>
            <br/>
            <br/>
            
            <div> 
            <a href="mailto:quesnot.william@hotmail.com" style={{backgroundColor : 'yellow', padding : '1em', color : 'black', fontFamily : 'monospace', fontWeight : 'bold', fontSize :'1.2em', borderRadius : '50px' }}>JE VOUS VEUX DANS MON ÉQUIPE !</a>
            </div>

          </div>
          
        
       
        </FlexTop>
   
      </section>
      <section id='two' name="two">
        <Apropos />
      </section>
      <section id='three'>
      </section>
      <section id='four'>
        <p>Fourth Page</p>
      </section>
      <section id='five'>
        
      </section>
   
    </div>
  );
}

export default App;

const FlexTop = styled.div`

-webkit-user-select: none;
-webkit-touch-callout: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;

height : 100%;
display : flex;
align-items : center;
justify-content : space-evenly;


.nom{
  h1{
    color : white;
    font-size : 3.5em;
    letter-spacing : 2px;
    color : #49F2CA;
  }

  h2{
    color : white;
    font-size : 2em;
    letter-spacing : 2px;
  
  }



}




.desktop {

display : flex;
align-items : center;
justify-content : center;



  animation : moveimg 3.5s infinite;

@keyframes moveimg{
  0%{ position : relative; bottom : 30px}
  50%{ position : relative; bottom : 0px}
  100%{ position : relative; bottom : 30px}
}


}


@media screen and (max-width : 900px){
  text-align : center;
  justify-content : center;
  flex-direction : column;
  font-size : 0.8em;

  img{
    width : 300px;
  }

  

}


`




const Hamburger = styled.div`

  
  li{
    list-style-type : none;
    margin : 2em;
    font-size : 1.5em;
  }



`



const Menu = styled.div`


.bg{
  height : 100%;
  width : 100%;
  background-color : #0a192f;
  position : absolute;
  opacity : 0.9;
  z-index : -2;
}


img{
  padding : 0.5em 1.5em;
}

position : fixed;
width : 100%;
    
.header{
    display : flex;
    align-items : center;
    justify-content : space-between;
}

    nav{
      
        ul{
          display : flex;
          margin : 0 1em;
          

            li{
                list-style-type : none;
                margin : 1em;
             
            }
        }
    }

    button{
      display : none;
      background-color : unset;
      border : none;
    }



  
    @media screen and (max-width : 900px){

      
      nav{
        display : none;
      }

      button{
        display : block;
      }

    

    }

    


  
`
