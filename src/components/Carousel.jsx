import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import styled from '@emotion/styled'

const Carousel = () => {

    const Proceed = [
        { title : "1 ▸ Définir tes besoins", desc : 'Nous définissons tes besoins, la nature de ton site, quel type de site, l\'objectif du site ?'},
        { title : "2 ▸ SEO", desc : "Le référencement de votre site est un enjeu important pour augmenter sa visibilité auprès des internautes. Il sera important pour moi d'établir des stratégies de référencement, afin de les appliquer et de vous placer en haut du classement."},
        { title : "3 ▸ La conception", desc : "Après notre discussion sur votre projet, je passerai à la conception de votre site internet avec un suivi régulier en appliquant en parallèle des stratégies de référencement."},
        { title : "4 ▸ Test", desc : "La réalisation de la phase de test garantira que tous les éléments fonctionnent parfaitement. Il s'agit d'une étape finale importante pour éviter tous les types d'erreurs."},
        { title : "5 ▸ Livraison", desc : "Nous sommes arrivés à la réalisation de votre commande. Le site vous est livré, ainsi que la possibilité de rester en contact avec moi pour me solliciter pour d'autres projets !"}
    ]


    let settings = {
        dot : true,
        infinite : true,
        speed :300,
        slidesToShow : 2,
        slidestoScroll : 1,
        cssEase : "linear"
    }
    

    return(
        
    <Container>
          
        <div className='allpage'>
            <div className='page'>
                <Slider {...settings}>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <h2>{Proceed[0].title}</h2>
                            <p>{Proceed[0].desc}</p>
                        </div>     
                    </div>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <h2>{Proceed[1].title}</h2>
                            <p>{Proceed[1].desc}</p>
                        </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <h2>{Proceed[2].title}</h2>
                            <p>{Proceed[2].desc}</p>
                        </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <h2>{Proceed[3].title}</h2>
                            <p>{Proceed[3].desc}</p>
                        </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <h2>{Proceed[4].title}</h2>
                            <p>{Proceed[4].desc}</p>
                        </div>
                    </div>
                </Slider>
           </div>          
        
        </div>
    </Container>
)
}

export default Carousel

const Container = styled.div`



@media screen and (max-width : 900px){
    display : none;
}



.allpage{
  display : flex; 
  justify-content : center;
  width : 600px;
  
}
  .page{
      width : 80%; 
      border-radius : 10px;
    
  }  
  .card-wrapper{
      border : 5px solid black;
      width : 90%;
      height : 100%;
      background-color : #0A192F;
    border : none;
    border-radius : 10px;
  }
  .card{
      display : flex;
      flex-direction : column;
      justify-content : space-evenly;
      margin : 0.5em;
      color : lightgrey;
      border : 2px solid #49F2CA;
      border-radius : 20px;
   
      
      h2{
        font-family : monospace;
        margin-top : 1em;
        font-size : 1.2em;
        text-align : center;
      }
      p{  
          
          font-style : arial;
          margin : 1em;
          font-size : 0.8em;
          text-align : flex-start;
          margin-bottom : 2em;
         
      }


       




  }
  
`