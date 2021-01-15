import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './About.css';


function AboutView() {

   return (
      <div>
         <Container>
          
            <Row className="privacy-textblock">
               <h3 className="subheading-center">Privacy Policy of TrailHero application</h3>
<p>Kirijaki Oy operates TrailHero application.
This view is used to inform application users regarding our policies with the collection, use,
and disclosure of Personal Information if anyone decided to use our applications.
</p>
<h4 className="h4-style ">Information Collection and Use</h4><br></br>
<p>TrailHero application and Kirijaki company does not collect any user information and data.</p><br></br>

<h4 className="h4-style">Cookies</h4>
<p>TrailHero does not send and collect any cookies information and data.</p>

<h4 className="h4-style">Service Providers</h4>
<p>TrailHero does not employ any third party companies with user information or data.</p>

<h4 className="h4-style">Changes to This Privacy Policy</h4>
<p>We may update our Privacy Policy from time to time. Thus, we advise you to review this view periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this view. These changes are effective immediately, after they are posted on this view.
</p>
<h4 className="h4-style">Contact Us</h4>
<p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
Send emails to our address: TrailHeroCrew@gmail.com and we will answer for you as soon as possible.</p>




            </Row>
         </Container>
        
      </div>
   );
}

export default AboutView;