import './index.css'

const CountryList = props => {
  const {countries, onVisit} = props

  return (
    <ul className="Countries-list">
      {countries.map(country => {
        const {isVisited} = country

        return (
          <li key={country.id} className="Country">
            <p className="name">{country.name}</p>(
            {!isVisited ? (
              <button
                type="button"
                className="visited-button"
                onClick={() => onVisit(country.id)}
              >
                Visit
              </button>
            ) : (
              <p className="name">Visited</p>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default CountryList
