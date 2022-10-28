import { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import GithubContext from '../context/github/GithubContext'

function User() {
  const {getUser, user, loading} = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    getUser(params.login)
  }, [])

  const {
    name,
    type,
    avatar_url,
    loaction,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  return (
    <>
      {!loading ? 
        <div className='w-full mx-auto lg:w-10/12'>
         <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back to Search
          </Link>
         </div>
         <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-4 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card'>
              <figure>
                <img src={avatar_url} alt='Profile picture'/>
              </figure>
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0'>
                  {name}
                </h2>
                <p>{login}</p>
              </div>
            </div>

          </div>
         </div>
        </div>
        : <h3 className=''>
            {<CircularProgress />}
          </h3>}
    </>
   )  
}

export default User