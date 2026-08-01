import { useLocation } from 'react-router-dom';
import useAnalytics from '../hooks/useAnalytics';

export default function RouteTracker() {
  const location = useLocation();
  useAnalytics(location.pathname);
  return null;
}
