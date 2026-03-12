import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function AssetsFilesRedirect() {
  const location = useLocation();

  useEffect(() => {
    const filename = location.pathname.split('/').pop();
    window.location.replace(`https://pdf.hydroflow-usa.com/${filename}`);
  }, [location]);

  return null;
}