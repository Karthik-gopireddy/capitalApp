import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {ActiveCapital: countryAndCapitalsList[0].id}

  updateCapital = e => {
    this.setState({ActiveCapital: e.target.value})
  }

  updatedCapital = () => {
    const {ActiveCapital} = this.state
    console.log(ActiveCapital)
    const newcapital = countryAndCapitalsList.find(
      each => each.id === ActiveCapital,
    )
    console.log(newcapital)
    return newcapital.country
  }

  render() {
    const {ActiveCapital} = this.state
    const country = this.updatedCapital(ActiveCapital)
    return (
      <div className="background-container">
        <div className="inner-container">
          <h1>Countries And Capitals</h1>
          <div className="select-container">
            <select className="select" onChange={this.updateCapital}>
              {countryAndCapitalsList.map(eachItem => (
                <option
                  onChange={this.updateCapital}
                  key={eachItem.id}
                  value={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p className="p1">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
