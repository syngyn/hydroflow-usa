import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function ProductQuiz() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate(createPageUrl('ProductSelectionTool'), { replace: true });
  }, [navigate]);
  
  return null;
}