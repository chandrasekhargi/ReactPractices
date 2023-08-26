import './index.css'

const VisitedCountryImages = props => {
  const {eachContactsList, removeCountry} = props
  const {imageUrl, id, name, isVisited} = eachContactsList
  const clickOnRemove = () => {
    removeCountry(id)
  }

  const showFalseCountries = () => (
    <li className="img-li">
      <img alt="thumbnail" src={imageUrl} />
      <div className="country-img-container">
        <p>{name}</p>
        <button
          className="remove-btn"
          id={id}
          onClick={clickOnRemove}
          type="button"
        >
          Remove
        </button>
      </div>
    </li>
  )

  return isVisited ? showFalseCountries() : ''
}

export default VisitedCountryImages
