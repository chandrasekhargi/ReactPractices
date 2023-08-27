import {Component} from 'react'
import VisitedCountryImages from '../VisitedCountryImages'

import './index.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class VisitedCountryNames extends Component {
  state = {
    countriesImgList: initialCountriesList,
    countriesNameList: initialCountriesList,
  }

  removeCountry = id => {
    // const getImgList = countriesImgList.filter(each => each.id !== id)

    this.setState(prevState => ({
      countriesImgList: prevState.countriesImgList.map(each => {
        if (each.id === id) {
          return {...each, isVisited: false}
        }
        return each
      }),
      countriesNameList: prevState.countriesNameList.map(each => {
        if (each.id === id) {
          return {...each, isVisited: false}
        }
        return each
      }),
    }))
  }

  clickOnVisitBtn = event => {
    this.setState(prevState => ({
      countriesImgList: prevState.countriesImgList.map(each => {
        if (each.id === event.target.id) {
          return {...each, isVisited: true}
        }
        return each
      }),
      countriesNameList: prevState.countriesNameList.map(each => {
        if (each.id === event.target.id) {
          return {...each, isVisited: true}
        }
        return each
      }),
    }))
  }

  showImgOrNoContentView = () => {
    const {countriesImgList} = this.state
    const filteredImgList = countriesImgList.filter(
      each => each.isVisited === true,
    )

    if (filteredImgList.length === 0) {
      return <p className="no-content-view">No Countries Visited Yet!</p>
    }
    return (
      <ul id="countries-list-of-length" className="image-list-con">
        {filteredImgList.map(each => (
          <VisitedCountryImages
            key={each.id}
            removeCountry={this.removeCountry}
            eachContactsList={each}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {countriesNameList} = this.state

    return (
      <>
        <h1>Countries</h1>
        <ul className="country-name-container">
          {countriesNameList.map(each => (
            <li className="list-of-country-names" key={`country ID:${each.id}`}>
              <p>{each.name}</p>
              <button
                id={each.id}
                onClick={this.clickOnVisitBtn}
                className={`btn-is-${each.isVisited}`}
                type="button"
              >
                {each.isVisited ? 'Visited' : 'Visit'}
              </button>
            </li>
          ))}
        </ul>
        <h1>Visited Countries</h1>
        {this.showImgOrNoContentView()}
      </>
    )
  }
}

export default VisitedCountryNames
