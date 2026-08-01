import { useEffect } from 'react';
import { postPageView } from '../services/api';

export default function useAnalytics(path: string) {
  useEffect(() => {
    postPageView(path);
  }, [path]);
}
