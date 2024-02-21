import { FacebookProvider, ShareButton } from 'react-facebook';

export default function ShareButtonExample() {
  return (
    <FacebookProvider appId="1398626534156298">
      <ShareButton href="http://www.facebook.com" className="my-classname">
        Share
      </ShareButton>
    </FacebookProvider>
  );
}