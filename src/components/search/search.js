import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export const Search = ({}) => {

  return (
    <div>
      <div class="icon-input">
        <i> <FontAwesomeIcon icon={faSearch} /></i>
        <input placeholder="Search for a country..."></input>
      </div>
    </div>
  )
}

export default Search;