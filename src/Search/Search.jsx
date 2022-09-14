import './search.css'
import SearchIcon from '@mui/icons-material/Search';
function Search() {
  return (
    <div className='Searchbox' >
      <input className='Search' placeholder='Search'></input>
      
   <SearchIcon className='searchicon'/>
 
    </div>
  )
}

export default Search