import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import cities from '../data/data.json';

const byCity = (a, b) => a.city.localeCompare(b.city)
const byCountry = (a, b) => a.country.localeCompare(b.country)
const byAllBuildings = (a, b) => a.allbuildings - b.allbuildings
const by100m = (a, b) => a.onehundred - b.onehundred
const by150m = (a, b) => a.onehundredfifty - b.onehundredfifty
const by200m = (a, b) => a.twohundred - b.twohundred
const by300m = (a, b) => a.threehundred - b.threehundred
const byTelecomTowers = (a, b) => a.telecomtowers - b.telecomtowers
const byAllStructures = (a, b) => a.allstructures - b.allstructures


class Table extends Component {

    state = {
        cities: cities,
        url: ''
      }

    componentDidMount = () => {
        const url = this.props.location.pathname.slice(1)
        this.setState({ url })
    }

    sortCities = cities => {
        const { url } = this.state
        const citiesCopy = [...cities]
    
        if (url === 'city') citiesCopy.sort(byCity)
        if (url === 'country') citiesCopy.sort(byCountry)
        if (url === 'allbuildings') citiesCopy.sort(byAllBuildings)
        if (url === 'onehundred') citiesCopy.sort(by100m)
        if (url === 'onehundredfifty') citiesCopy.sort(by150m)
        if (url === 'twohundred') citiesCopy.sort(by200m)
        if (url === 'threehundred') citiesCopy.sort(by300m)
        if (url === 'telecomtowers') citiesCopy.sort(byTelecomTowers)
        if (url === 'allstructures') citiesCopy.sort(byAllStructures)
    
        return citiesCopy;
      }
    
      
    

  render() {
    const sortedCities = this.sortCities(this.state.cities)

    return (
        <div>
            <table>
                <tr>
                    <th><Link to='/city'>City</Link></th>
                    <th><Link to='/country'>Country</Link></th>
                    <th><Link to='/allbuildings'>All buildings</Link></th>
                    <th><Link to='/onehundred'>100m+</Link></th>
                    <th><Link to='/onehundredfifty'>150m+</Link></th>
                    <th><Link to='/twohundred'>200m+</Link></th>
                    <th><Link to='/threehundred'>300m+</Link></th>
                    <th><Link to='/telecomtowers'>Telecom towers</Link></th>
                    <th><Link to='/allstructures'>All structures</Link></th>
                </tr>
                {
                    sortedCities.map(city => {
                        return(
                            <tr>
                                <td>{city.city}</td>
                                <td>{city.country}</td>
                                <td>{city.allbuildings}</td>
                                <td>{city.onehundred}</td>
                                <td>{city.onehundredfifty}</td>
                                <td>{city.twohundred}</td>
                                <td>{city.threehundred}</td>
                                <td>{city.telecomtowers}</td>
                                <td>{city.allstructures}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
        
    )
  }
}

export default Table;