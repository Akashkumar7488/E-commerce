// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//       <footer className='bg-slate-200'>
//         <div className='container mx-auto p-4'>
//         </div>
//         <p className='text-center font-bold' title="youtube channel">Dynamic coding with Akash</p>
//       </footer>
//     </div>
//   )
// }

// export default Footer;









import React from 'react';
import { IonIcon } from '@ionic/react';
import { 
  logoFacebook,
  logoGoogle, 
  logoTwitter, 
  logoInstagram, 
  logoLinkedin, 
  logoYoutube, 
  logoWhatsapp, 
  qrCodeOutline, 
  text
} from 'ionicons/icons';

const Footer = () => {
  return (
    <div>
      <footer className='bg-slate-200'>
        <div className='container mx-auto p-2'>
          <div className="content">
            <div className="top flex justify-between items-center mb-2">
              <div className="logo-details flex items-center">
                <IonIcon icon={qrCodeOutline} size="large" />
                <span className="logo_name ml-2">CodingLab</span>
              </div>
              <div className="media-icons flex space-x-4">
                <a href="#"><IonIcon icon={logoFacebook} style={{ color: '#3b5998', fontSize: '20px' }} /></a>
                <a href="#"><IonIcon icon={logoGoogle} style={{ color: '#4285F4', fontSize: '20px' }} /></a>
                <a href="#"><IonIcon icon={logoTwitter} style={{ color: '#1da1f2', fontSize: '20px' }} /></a>
                <a href="#"><IonIcon icon={logoInstagram} style={{ color: '#e4405f', fontSize: '20px' }} /></a>
                <a href="#"><IonIcon icon={logoLinkedin} style={{ color: '#0077b5', fontSize: '20px' }} /></a>
                <a href="#"><IonIcon icon={logoYoutube} style={{ color: '#ff0000', fontSize: '20px' }} /></a>
                <a href="#"><IonIcon icon={logoWhatsapp} style={{ color: '#25d366', fontSize: '20px' }} /></a>
              </div>
            </div>
           
          </div>
          <div>
            <div className=" flex items-center justify-center">
              <span className="copyright_text  cursor-pointer hover:text-red-400" style={{ marginTop: '-9px' }}>Copyright &#169; 2024 <a href="#">Akash Kumar</a>. All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

