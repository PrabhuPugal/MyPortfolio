import React from 'react';
import { MDBFooter} from 'mdb-react-ui-kit';

function Footer() {
  return (
    
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <div className='h-[1px] w-full bg-white'></div>
      <div className='text-center p-4 bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <em>Designed and Developed by  </em>
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          <i><b>Prabhu💫</b></i>
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;