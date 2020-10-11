import React, { useState, useReducer, useEffect, useRef } from 'react'
import SVG from '../SearchIcon.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

    const initialState = '';
    const reducer = (state, action) => {
        switch(action) {
            case 'France':
                return 'France'
            case 'United States':
                return 'United States'
            case 'China':
                return 'China'
            case 'Spain':
                return 'Spain'
            case 'Italy':
                return 'Italy'
            case 'Turkey':
                return 'Turkey'
            case 'United Kingdom':
                return 'United Kingdom'
            case 'Germany':
                return 'Germany'
            case 'Russia':
                return 'Russia'
            case 'Malaysia':
                return 'Malaysia'
            case 'Mexico':
                return 'Mexico'
            case 'Austria':
                return 'Austria'
            case 'Hong Kong':
                return 'Hong Kong'
            case 'Ukraine':
                return 'Ukraine'
            case 'Thailand':
                return 'Thailand'
            case 'Saudi Arabia':
                return 'Saudi Arabia'
            case 'Greece':
                return 'Greece'
            case 'Canada':
                return 'Canada'
            case 'Poland':
                return 'Poland'
            default:
                return state
        }
    }

function MainPage(props) {

    const [options, setOptions] = useState([]);

   const [pic, setPic] = useState('url(https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?cs=srgb&dl=pexels-tobi-620337.jpg&fm=jpg')

    const [country, dispatch] = useReducer(reducer, initialState);

    const onInputChange = (e) => {
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        
        switch(country) {
            case 'France':
                setPic('url(https://images.pexels.com/photos/358561/pexels-photo-358561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return
            case 'United States':
                setPic('url(https://images.pexels.com/photos/4039921/pexels-photo-4039921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return
            case 'China':
                setPic('url(https://images.pexels.com/photos/19885/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'Spain':
                setPic('url(https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'Italy':
                setPic('url(https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'Turkey':
                setPic('url(https://images.pexels.com/photos/2048865/pexels-photo-2048865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'United Kingdom':
                setPic('url(https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'Germany':
                setPic('url(https://images.pexels.com/photos/4213372/pexels-photo-4213372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'Russia':
                setPic('url(https://images.pexels.com/photos/92412/pexels-photo-92412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'Malaysia':
                setPic('url(https://images.pexels.com/photos/22804/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'Mexico':
                setPic('url(https://images.pexels.com/photos/763429/pexels-photo-763429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'Austria':
                setPic('url(https://images.pexels.com/photos/2032332/pexels-photo-2032332.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'Hong Kong':
                setPic('url(https://images.pexels.com/photos/2300342/pexels-photo-2300342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'Ukraine':
                setPic('url(https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'Thailand':
                setPic('url(https://images.pexels.com/photos/130158/pexels-photo-130158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'Saudi Arabia':
                setPic('url(https://images.pexels.com/photos/2830460/pexels-photo-2830460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'Greece':
                setPic('url(https://images.pexels.com/photos/161275/santorini-travel-holidays-vacation-161275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'Canada':
                setPic('url(https://images.pexels.com/photos/6998/city-cityscape-amarpreet-kaur.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            case 'Poland':
                setPic('url(https://images.pexels.com/photos/14621/Warsaw-at-night-free-license-CC0.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                return 
            default: 
                return ''
        }
    }

    const handleChange = (e) => {

        setOptions(
            defaultOptions.filter((option) => option.includes(e.target.value))
          );

        switch(e.target.value) {
            case 'France':
                return dispatch('France')
            case 'United States':
                return dispatch('United States')
            case 'China':
                return dispatch('China')
            case 'Spain':
                return dispatch('Spain')
            case 'Italy':
                return dispatch('Italy')
            case 'Turkey':
                return dispatch('Turkey')
            case 'United Kingdom':
                return dispatch('United Kingdom')
            case 'Germany':
                return dispatch('Germany')
            case 'Russia':
                return dispatch('Russia')
            case 'Malaysia':
                return dispatch('Malaysia')
            case 'Mexico':
                return dispatch('Mexico')
            case 'Austria':
                return dispatch('Austria')
            case 'Hong Kong':
                return dispatch('Hong Kong')
            case 'Ukraine':
                return dispatch('Ukraine')
            case 'Thailand':
                return dispatch('Thailand')
            case 'Saudi Arabia':
                return dispatch('Saudi Arabia')
            case 'Greece':
                return dispatch('Greece')
            case 'Canada':
                return dispatch('Canada')
            case 'Poland':
                return dispatch('Poland')
            default: 
                return ''
        }
    }

    return (
        <div>

            <div className="picture-container" style={{backgroundImage: pic}}>

                <div className="search-container">

                    <form onSubmit={handleSubmit} onChange={handleChange}>
                    
                        <SearchbarDropdown options={options} onInputChange={onInputChange} />

                        <button type="submit" className="search-button">
                            <img alt="" src={SVG}/>
                        </button>

                        
                    
                    </form>
                </div>  
            </div>

            

            <div>
                <div>{props.cntry}</div>
            </div>
                
        </div>
        
    )
}

export default MainPage


const defaultOptions = [];
defaultOptions.push('France');
defaultOptions.push('United States');
defaultOptions.push('China');
defaultOptions.push('Spain');
defaultOptions.push('Italy');
defaultOptions.push('Turkey');
defaultOptions.push('United Kingdom');
defaultOptions.push('Germany');
defaultOptions.push('Russia');
defaultOptions.push('Malaysia');
defaultOptions.push('Mexico');
defaultOptions.push('Austria');
defaultOptions.push('Hong Kong');
defaultOptions.push('Ukraine');
defaultOptions.push('Thailand');
defaultOptions.push('Saudi Arabia');
defaultOptions.push('Greece');
defaultOptions.push('Canada');
defaultOptions.push('Poland');


const SearchbarDropdown = (props) => {
    const { options, /*onInputChange*/ } = props;
    const ulRef = useRef();
    const inputRef = useRef();

    const [countryChosen, setCountryChosen] = useState('')
    const [checking, setChecking] = useState(false)

    useEffect(() => {

      inputRef.current.addEventListener('click', (event) => {
        event.stopPropagation();
        ulRef.current.style.display = 'flex';
        //onInputChange(event);
      });

      document.addEventListener('click', (event) => {
        ulRef.current.style.display = 'none';
        setChecking(true)
      });
    }, []);

    if (countryChosen !== '' && checking === true) {
        console.log("Fuck oof")
        return <MainPage cntry={countryChosen}/>
    }

    return (
      <div className="search-bar-dropdown">
        <input
          id="search-bar"
          type="text"
          className="form-input"
          placeholder="Search"
          ref={inputRef}
          //onChange={onInputChange}
        />

        <ul className="list-format" ref={ulRef}>
          {options.map((option, index) => {
            return (
              <button
                type="button"
                key={index}
                value={option}
                onClick={(e) => {
                  inputRef.current.value = option;
                  setCountryChosen(option)
                }}
                className="list-group-item list-group-item-action"
              >
                {option}
              </button>
            );
          })}
        </ul>
      </div>
    );
  };
