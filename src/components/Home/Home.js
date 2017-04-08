import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Carousel,PageHeader} from 'react-bootstrap';
import {Image} from 'cloudinary-react';
import './Home.css';
 export default class Home extends Component{
   render(){
       return(
    <div className="Home">
<main className="Home-Main">
  <Carousel  pauseOnHover={false} >
    <Carousel.Item>
         <Image cloudName="dxehb7f11" publicId={"home_1"} alt="cat pic" fetchFormat="auto" quality="auto" dpr="auto" crop="scale"/>
    </Carousel.Item>
    <Carousel.Item>
      <Image cloudName="dxehb7f11" publicId={"home_2"} alt="cat pic" fetchFormat="auto" quality="auto" dpr="auto" crop="scale"/>
    </Carousel.Item>
    <Carousel.Item>
       <Image cloudName="dxehb7f11" publicId={"home_3"} alt="cat pic" fetchFormat="auto" quality="auto" dpr="auto" crop="scale"/>
    </Carousel.Item>
  </Carousel>
  <article className="Home-Article">
    <PageHeader className="Home-Header">Welcome to the Premier Kitty Fanclub!</PageHeader>
    <p>Kittyfanclub is a social media website built especially for showcasing cats. You can share pictures of your cats, create your own cat blog and connect with friends. We have lots of quality cat pictures on this site. Our two stars, Pike (a.k.a. Fatfat) and Nana are two years old and super cute. The two make an inseparable pair and will meow meow if the other is in trouble or accidently locked in a closet. Fatty is the bigger of the two, and he can easily beat up Nana, which he does on a daily basis, but Nana is the smarter of the two and uses her intelligence to hatch devious plans to outwit Fatty and her owners.</p>
    <p>Pike is a shy and dumb kitty, but has tons of love for everyone and is a totally trusting kitty. His favorite activities include sleeping, fatting around and eating. He is considerably fat, hence his name, and at one point he weighted over 14lbs but he has since been put on a strict diet and has been steadily losing weight. Interestingly, he still believes he is a lap kitty despite all evidence to the contrary. Although he is dumb, he did learn how to open doors by throwing his great weight against them until he catches the latch and can force it open. He can open all the doors in the house, except locked doors, so we have to kitty proof the whole apartment now. Pike likes to sit in the sun and go outside at least once a day. He is a needy kitty and gets worried when he is alone for too long. Every day he needs constant love and attention, and he can frequently be found selling himself cheap for pets.</p>
    <p>Nana is nearly the complete opposite of Fatty. She is highly social and independent, confident and has a take-charge personality. She is the leader and the mastermind, often coming up with the most clever and devious plans to annoy and worry her owners. Once she stole a whole raw piece of frozen porkchop from the counter and dragged it from the kitchen to her hiding place underneath the bed where she proceeded to gnaw small pieces off the frozen meat. Unfortunately she left a trail of blood leading directly to the crime scene, and was caught red-handed (pawed?). She will steal food off your plate if you are not standing guard, and will escape from the house if you leave the door open for too long. She once ran out and got lost outside for 4 hours until we eventually found her meowing in a bush across the street.</p>
    <p>Welcome again to the site. I think you will agree that our two kitties are the best little fats you have ever seen, and I hope you take the time to enjoy some pictures and stories about them, as well as post your own pictures and stories.</p>
</article>
</main>
</div>
  )
   }
 }