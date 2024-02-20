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
    <div>
  <FacebookProvider appId="1398626534156298">
      <LoginButton
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