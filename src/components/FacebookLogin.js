'use client'
import { FacebookProvider, LoginButton } from 'react-facebook';

export default function FacebookLogin() {
  function handleSuccess(response) {
    console.log(response.status);
  }

  function handleError(error) {
    console.log(error);
  }

  return (
    <div className='bg-white px-10 py-4 w-96 h-32 flex flex-col items-center justify-around rounded-xl'>
        <h2>Connect to Facebook</h2>
  <FacebookProvider appId="1398626534156298">
      <LoginButton
      className='bg-blue-500 px-5 py-2 rounded-full'
      
        scope="email"
        onError={handleError}
        onSuccess={handleSuccess}
      >
        
        Login via Facebook
        
       
      </LoginButton>
    </FacebookProvider>

    </div>
  
  );
}