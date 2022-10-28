import PropTypes from "prop-types"
import LinkIcon from '@mui/icons-material/Link'
import VisibilityIcon from '@mui/icons-material/Visibility'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500'
import InfoIcon from '@mui/icons-material/Info'
import RestaurantIcon from '@mui/icons-material/Restaurant'

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazerz_count
  } = repo

  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url}>
            {<LinkIcon className="inline mr-1"/>}
            {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="mr-2 badge-info badge-lg">
            {<VisibilityIcon className="mr-2" />}
            {watchers_count}
          </div>
          <div className="mr-2 badge-success badge-lg">
            {<StarBorderPurple500Icon className="mr-2" />}
            {stargazerz_count}
          </div>
          <div className="mr-2 badge-error badge-lg">
            {<InfoIcon className="mr-2" />}
            {open_issues}
          </div>
          <div className="mr-2 badge-warning badge-lg">
            {<RestaurantIcon className="mr-2" />}
            {forks}
          </div>
        </div>
      </div>
    </div>
  )
}

RepoItem.propTypes = {
  repos: PropTypes.array.isRequired
}

export default RepoItem