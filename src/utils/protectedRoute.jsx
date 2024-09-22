import { useAuth } from '../utils/authProvider';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div>
        <span className='loading loading-spinner text-primary'></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default ProtectedRoute;
