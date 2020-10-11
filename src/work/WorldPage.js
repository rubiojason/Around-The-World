import React, { useState, useReducer, useEffect, useRef } from 'react'
import SVG from '../SearchIcon.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, animateScroll as scroll} from 'react-scroll'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import France from './France'
import US from './US'
import China from './China'
import Spain from './Spain'
import Italy from './Italy'
import Turkey from './Turkey'
import UK from './UK'
import Germany from './Germany'
import Russia from './Russia'
import Malaysia from './Malaysia'
import Mexico from './Mexico'
import Austria from './Austria'
import HongKong from './HongKong'
import Ukraine from './Ukraine'
import Thailand from './Thailand'
import SaudiArabia from './SaudiArabia'
import Greece from './Greece'
import Canada from './Canada'
import Poland from './Poland'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();


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


function WorldPage() {

  //useReducer
    const [country, dispatch] = useReducer(reducer, initialState);
  //useReducer

  //state 
    const [options, setOptions] = useState([]);

    const [pic, setPic] = useState('url(https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?cs=srgb&dl=pexels-tobi-620337.jpg&fm=jpg')

    const [previewBoxTitle, setPreviewBoxTitle] = useState('Fun Facts')

    const [previewBoxData, setPreviewBoxData] = useState('Mother Earth has a generous waistline: At the equator, the circumference of the globe is 24,901 miles (40,075 kilometers). Bonus fact: At the equator, you would weigh less than if standing at one of the poles.')
  
    const [countryId, setCountryId] = useState('fun-facts-id')
    //state 

  //useRef 
    const ulRef = useRef();
    const inputRef = useRef();

    //gsap refs 
    const pictureRef = useRef(null)
    const titleRef = useRef(null)
    const paragraphRef = useRef(null)
    const buttonRef = useRef(null)
    const revealRefs = useRef([])
    revealRefs.current = []
    //gsap refs
  //useRef

    //paragraph data
    const sections = [
      {
        title: 'Fun Facts',
        subtitle: "It may come as no surprise that the coldest place on Earth can be found in Antarctica, but the chill factor is somewhat unbelievable. Winter temperatures there can drop below minus 100 degrees F (minus 73 degrees C).The lowest temperature ever recorded on Earth came from Russia's Vostok Station, where records show the air plunged to a bone-chilling minus 128.6 degrees F (minus 89.2 degrees C) on July 21,1983, according to the USGS."
      },
      {
        title: '',
        subtitle: "The southern continent is a place of extremes, with the Antarctic ice cap containing some 70 percent of Earth's fresh water and about 90 percent of its ice, even though it is only the fifth largest continent. Spelunkers ahoy! The largest confirmed stalagmite in the world can be found in Cuba in the Cuevo San Martin Infierno. This behemoth rises 220 feet (67.2 meters) tall. (Shown here, a photo of a stalagmite in a northwest Yucatan peninsula cave.)"
      },
      {
        title: '',
        subtitle: "Because our globe isn't a perfect sphere, its mass is distributed unevenly. And uneven mass means slightly uneven gravity.One mysterious gravitational anomaly is in the Hudson Bay of Canada (shown above). This area has lower gravity than other regions, and a 2007 study finds that now-melted glaciers are to blame.The ice that once cloaked the area during the last ice age has long since melted, but the Earth hasn't entirely snapped back from the burden. Since gravity over an area is proportional to the mass atop that region, and the glacier's imprint pushed aside some of the Earth's mass, gravity is a bit less strong in the ice sheet's imprint. The slight deformation of the crust explains 25 percent to 45 percent of the unusually low gravity; the rest may be explained by a downward drag caused the motion of magma in Earth's mantle (the layer just beneath the crust), researchers reported in the journal Science."
      },
    ]
    //paragraph data 

  //useEffect
    //form handling useEffect
    useEffect(() => {

        inputRef.current.addEventListener('click', (event) => {
          event.stopPropagation();
          ulRef.current.style.display = 'flex';
          onInputChange(event);
        });

        document.addEventListener('click', (event) => {
          ulRef.current.style.display = 'none';
        });
      }, []);
      //from handling useEffect

      //gsap useEffect 
      useEffect(() => {
        revealRefs.current.forEach((e, idx) => {
          gsap.fromTo(e, {autoAlpha: 0}, {
            duration: 1, 
            autoAlpha: 1, 
            ease: 'none',
            paddingLeft: '30px',
            scrollTrigger: {
            id: 'deeznuts',
            trigger: e, 
            start: 'top center+=300',
            toggleAction: 'play none none reverse',
            scaleY: 1, 
            paused: true,
            markers: false,
            }
          })
        })
      }, [])

      useEffect(() => {
        gsap.from(titleRef.current, {
          duration: 0.5,
          autoAlpha: 0, 
          ease: 'none',
          delay: 1,
          paddingTop: '15px',
        })

        gsap.from(paragraphRef.current, {
          duration: 0.75, 
          autoAlpha: 0,
          ease: 'none',
          delay: 1.25,
          marginLeft: '20px'
        })

        gsap.from(buttonRef.current, {
          duration: 1, 
          autoAlpha: 0,
          ease: 'none',
          delay: 1.5,
        })

        gsap.from(pictureRef.current, {
          duration: 0.25, 
          autoAlpha: 0,
          ease: 'none',
          delay: 0.15,
        })
      }, [])
    //gsap useEffect

    const redoTitle = () => {
      gsap.from(titleRef.current, {
        duration: 0.5,
        autoAlpha: 0, 
        ease: 'none',
        delay: 0.75,
        paddingTop: '15px',
      })

      gsap.from(paragraphRef.current, {
        duration: 0.75, 
        autoAlpha: 0,
        ease: 'none',
        delay: 1.25,
        marginLeft: '20px'
      })

      gsap.from(buttonRef.current, {
        duration: 1, 
        autoAlpha: 0,
        ease: 'none',
        delay: 1.5,
      })

      gsap.from(pictureRef.current, {
        duration: 0.25, 
        autoAlpha: 0,
        ease: 'none',
        delay: 0.15,
      })
    }

  //useEffect

  //functions 

    //gsap function 
    const addToRefs = (e) => {
      if (e && !revealRefs.current.includes(e)) {
        revealRefs.current.push(e)
      }
    }

    //gsap function 

      //handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(country)
        switch(country) {
            case 'France':
                setPic('url(https://images.pexels.com/photos/358561/pexels-photo-358561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("Whether you’re living in France or just visiting, learning some facts about the country will help you get to know it better; not to mention impress your friends at your next trivia night.")
                setCountryId('France-id')
                return
            case 'United States':
                setPic('url(https://images.pexels.com/photos/4039921/pexels-photo-4039921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("America is home to many natural wonders of the world. In fact, the United Nations Education, Scientific, and Cultural Organization (UNESCO) has recognized many heritage sites in America.")
                setCountryId('US-id')
                return
            case 'China':
                setPic('url(https://images.pexels.com/photos/19885/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("Something that you have to avoid in most countries on the world is totally acceptable in China. Just like in Vietnam, spitting, yawning, grunting and burping are normal behaviours when you eat in China. ")
                setCountryId('China-id')
                return 
            case 'Spain':
                setPic('url(https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("Spain – or the Kingdom of Spain, to give the country it’s official title – is the second-largest country in the European Union after France. It measures up at around 506,000 square kilometers. ")
                setCountryId('Spain-id')
                return 
            case 'Italy':
                setPic('url(https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("Italy had a royal family until 1946 when citizens voted to abolish the idea of a ruling monarchy in favour of a republic in the wake of the Second World War. King Umberto II ruled from 9 May 1946 to 12 June 1946.")
                setCountryId('Italy-id')
                return 
            case 'Turkey':
                setPic('url(https://images.pexels.com/photos/2048865/pexels-photo-2048865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("With its long and rich history where civilizations and empires, as well as various ethnicities and religions, all left their marks, Turkey is a country that never ceases to beguile. ")
                setCountryId('Turkey-id')
                return 
            case 'United Kingdom':
                setPic('url(https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("Tea is by far the most popular drink among Brits. It is estimated that they drink on average 165 million cups of tea every day.")
                setCountryId('UK-id')
                return 
            case 'Germany':
                setPic('url(https://images.pexels.com/photos/4213372/pexels-photo-4213372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("Germany is composed of sixteen states. The states have their own constitution and are largely autonomous in regard to their internal organization.")
                setCountryId('Germany-id')
                return 
            case 'Russia':
                setPic('url(https://images.pexels.com/photos/92412/pexels-photo-92412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("Approximately 73.8% of the population lives in urban centers. The largest cities are Moscow (10.523 million), St. Petersburg (4.575 million), Novosibirsk (1.397 million), Yekaterinburg (1.344 million) and Nizhniy Novgorod (1.267 million.)")
                setCountryId('Russia-id')
                return 
            case 'Malaysia':
                setPic('url(https://images.pexels.com/photos/22804/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("The biggest roundabout in the world is located at Putrajaya in Malaysia. It is 2.2 miles (3.5 km) in diameter.")
                setCountryId('Malaysia-id')
                return 
            case 'Mexico':
                setPic('url(https://images.pexels.com/photos/763429/pexels-photo-763429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("The city is slowly sinking to the depths of the oceans like Atlantis! Well, not really. But Mexico City is sinking at a rate of about 10 inches a year as the city pumps draw water from the lake that supports it.")
                setCountryId('Mexico-id')
                return 
            case 'Austria':
                setPic('url(https://images.pexels.com/photos/2032332/pexels-photo-2032332.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("Austria is one of the world’s most eco-friendly countries – about 63% of waste is recycled and most of the electricity comes through the use of renewable energy sources. ")
                setCountryId('Austria-id')
                return 
            case 'Hong Kong':
                setPic('url(https://images.pexels.com/photos/2300342/pexels-photo-2300342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("Hong Kong is famous for towering skyscrapers. Did you know 40 percent of the territory is made up of country park and nature reserves? Hiking the green trails is a favourite weekend pastime.")
                setCountryId('Hong-Kong-id')
                return 
            case 'Ukraine':
                setPic('url(https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("Ukraine is the largest state in Europe (slightly smaller than Texas). It has an area of 603,628 sq km and borders the Black Sea.")
                setCountryId('Ukraine-id')
                return 
            case 'Thailand':
                setPic('url(https://images.pexels.com/photos/130158/pexels-photo-130158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("The name Thailand in the Thai language is Prathet Thai, which directly translates to ‘Land of the Free’. ")
                setCountryId('Thailand-id')
                return 
            case 'Saudi Arabia':
                setPic('url(https://images.pexels.com/photos/2830460/pexels-photo-2830460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("Located in southwest Asia (at the crossroads of Europe, Asia and Africa), Saudi Arabia extends from the Red Sea in the west to the Arabian Gulf in the east.")
                setCountryId('Saudi-Arabia-id')
                return 
            case 'Greece':
                setPic('url(https://images.pexels.com/photos/161275/santorini-travel-holidays-vacation-161275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("Greece has about 300 sunny days each year! That’s about 3,000 hours of sunshine! Bring that sunscreen… you’re going to need it!")
                setCountryId('Greece-id')
                return 
            case 'Canada':
                setPic('url(https://images.pexels.com/photos/6998/city-cityscape-amarpreet-kaur.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData("Canada has more lakes than the rest of the world combined. At last count, there may be as many as two million, with 563 of them larger than 100 square kilometres.")
                setCountryId('Canada-id')
                return 
            case 'Poland':
                setPic('url(https://images.pexels.com/photos/14621/Warsaw-at-night-free-license-CC0.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')
                setPreviewBoxTitle(country)
                setPreviewBoxData(" Poland is the 9th largest country in Europe (8th not Including Russia) Poland isn’t a small country, it’s actually one of the largest ones. Poland is bigger than Italy and the UK.")
                setCountryId('Poland-id')
                return 
            default: 
                return ''
        }
    }
      //handleSubmit

      //handles each input change
    const onInputChange = (e) => {
      setOptions(
        defaultOptions.filter((option) => option.includes(e.target.value))
      );
    switch(e.target.value) {
      case 'France':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('France')

      case 'United States':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('United States')

      case 'China':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('China')

      case 'Spain':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('Spain')

      case 'Italy':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('Italy')

      case 'Turkey':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('Turkey')

      case 'United Kingdom':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('United Kingdom')

      case 'Germany':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('Germany')

      case 'Russia':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('Russia')

      case 'Malaysia':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('Malaysia')

      case 'Mexico':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('Mexico')

      case 'Austria':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('Austria')

      case 'Hong Kong':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('Hong Kong')

      case 'Ukraine':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('Ukraine')

      case 'Thailand':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('Thailand')

      case 'Saudi Arabia':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('Saudi Arabia')

      case 'Greece':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('Greece')

      case 'Canada':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('Canada')

      case 'Poland':
        setOptions(
          defaultOptions.filter((option) => option.includes(e.target.value))
        );
          return dispatch('Poland')
      default: 
          return ''
      }
  };
      //handles each input change

      //handles bigger input change
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

    const displayedData = () => {
      if (previewBoxTitle === 'Fun Facts') {
        //set data state to fun facts 
        //smooth scroll 
      }
    }
      //handles bigger input change
  //functions 


    return (
        <div>

            <div className="picture-container" style={{backgroundImage: pic}} ref={pictureRef}>

                <div className="search-container">

                {/* Form handling  */}
                    <form onSubmit={handleSubmit} onChange={onInputChange} autoComplete="off">

                      <div className="search-bar-dropdown">
                        <input
                          id="search-bar"
                          type="text"
                          className="form-input"
                          placeholder="Search Destination"
                          ref={inputRef}
                          onChange={handleChange}
                          autoComplete="off"
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
                                  dispatch(e.target.value)
                                }}
                                className="list-group-item list-group-item-action test-test"
                              >
                                {option}
                              </button>
                            );
                          })}
                        </ul>
                      </div>

                      <button type="submit" className="search-button" onClick={redoTitle}>
                        <img alt="" src={SVG}/>
                      </button>

                    </form>
                {/* Form handling  */}
                </div>  

                {/* preview-box */}
                <div className="preview-info-container">
                  <div className="inside-preview">
                          
                    <div className="inside-preview-title" >
                          <div ref={titleRef}>{previewBoxTitle}</div>
                    </div>
                    <div className="inside-preview-paragraph" ref={paragraphRef}>
                      <p >
                        {previewBoxData}
                      </p>
                    </div>
                    <div className="inside-preview-title-button-container" ref={buttonRef}>
                          <Link activeClass="active" className="inh"
                            to={countryId}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                            >
                            <button onClick={displayedData} >Learn More</button>
                          </Link>
                        
                      
                    </div>
                          
                  </div>
                </div>
                {/* preview-box */}
            </div>
            <div>
              {
                sections.map(({title, subtitle}) => {
                  return (
                    <div key={subtitle} ref={addToRefs} id="fun-facts-id" className="paragraph">
                      <h1 >{title}</h1>
                      <p>{subtitle}</p>
                    </div>
                    
                  )
                })
              }
            </div>

            <div>
              <div id="France-id">
                <France/>
              </div>     
              
              <div id="US-id">
                <US/>
              </div>

              <div id="China-id">
                <China/>
              </div>

              <div id="Spain-id">
                <Spain/>
              </div>

              <div id="Italy-id">
                <Italy/>
              </div>

              <div id="Turkey-id">
                <Turkey/>
              </div>

              <div id="UK-id">
                <UK/>
              </div>

              <div id="Germany-id">
                <Germany/>
              </div>

              <div id="Russia-id">
                <Russia/>
              </div>

              <div id="Malaysia-id">
                <Malaysia/>
              </div>

              <div id="Mexico-id">
                <Mexico/>
              </div>

              <div id="Austria-id">
                <Austria/>
              </div>

              <div id="Hong-Kong-id">
                <HongKong/>
              </div>

              <div id="Ukraine-id">
                <Ukraine/>
              </div>

              <div id="Thailand-id">
                <Thailand/>
              </div>

              <div id="Saudi-Arabia-id">
                <SaudiArabia/>
              </div>

              <div id="Greece-id">
                <Greece/>
              </div>

              <div id="Canada-id">
                <Canada/>
              </div>

              <div id="Poland-id">
                <Poland/>
              </div>
            </div>
            
        </div>
        
    )
}
                      
export default WorldPage

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
