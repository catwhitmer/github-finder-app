import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';

function NotFound() {
  return (
    <div className="hero">
      <div className="max-w-lg">
        <h1 className="text-8xl font-bold mb-8">
          Oops!
        </h1>
        <p className="text-5xl mb-8">
          404 - Page Not Found!
        </p>
        <Link to='/' className="btn btn-primary btn-lg" >
          <HomeIcon className="mr-2" />
          Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound