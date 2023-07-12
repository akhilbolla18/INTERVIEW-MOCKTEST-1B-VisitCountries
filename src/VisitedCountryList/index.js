import './index.css'

const VisitedCountryList = ({countries, onRemove}) => (
  <ul className="VisitedCountryList">
    {countries.map(country => (
      <li key={country.id} className="">
        <div className="VisitedCountry">
          <img src={country.imageUrl} alt="thumbnail" className="image" />
          <div className="label">
            <p className="name">{country.name}</p>
            <button
              type="button"
              className="remove-btn"
              onClick={() => onRemove(country.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </li>
    ))}
  </ul>
)

export default VisitedCountryList
