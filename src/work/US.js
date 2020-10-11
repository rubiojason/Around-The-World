import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function US() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "United States",
          subtitle: "America is home to many natural wonders of the world. In fact, the United Nations Education, Scientific, and Cultural Organization (UNESCO) has recognized many heritage sites in America. According to UNESCO, a world heritage site is a place of special cultural or physical significance. Some examples of the UNESCO world heritage sites in America are the Grand Canyon National Park, the Great Smoky Mountains National Park, Yellowstone National Park, and a few others. Check out the full list of Natural UNESCO World Heritage Sites of the USA. The Missouri River is the longest river in North America. The river derives from Montana, located at the base of the Rocky Mountains and flows for approximately 2, 341 miles (3, 767 kilometers) before it empties into the Mississippi River just north of St. Louis, Missouri."
        },
        {
          title: '',
          subtitle: "The Missouri River and the Mississippi River combine to create the 4th longest river system in the world. For thousands of years, many people have depended on the Missouri River. From drinking water to transportation, irrigation, flood control and now even for the generation of hydroelectric power. As you can see this long body of water has played an important role over the years. The United States has maintained its position of being the world’s largest economy since 1871. The economy is so large that the US is often noted as an economic superpower and this is due to the fact that it makes up almost a quarter of the global economy. The US economy is connected to the country’s enormous population, technological innovation, high consumer spending, high average incomes, as well as a moderate unemployment rate."
        },
        {
          title: '',
          subtitle: "The first American flag only displayed 13 stripes as well as 13 stars that were arranged in a circle. The stars and stripes represented the 13 colonies that declared independence from Great Britain. While the origins of the first American Flag are unknown, some do believe that is was designed by a New Jersy Congressman, Francis Hopkinson and sewn by a Philadelphia seamstress, Betsy Ross.Since the founding of the United State, there have been 27 versions of the American flag. Each new flag represented the addition of new states. Today, the American flag displays 50 stars that represent the 50 states that make up the US. Not only is America a huge country, but their musical impression has made a big impact on the world too. America dominates the music industry as there are so many talented musicians that call America home."
        },
      ]

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
            markers: false
            }
          })
        })
      }, [])

      const addToRefs = (e) => {
        if (e && !revealRefs.current.includes(e)) {
          revealRefs.current.push(e)
        }
      }

    return (
        <div>
        {
            sections.map(({title, subtitle}) => {
              return (
                <div key={subtitle} ref={addToRefs} id="deeznuts" className="paragraph">
                  <h1>{title}</h1>
                  <p>{subtitle}</p>
                </div>
              )
            })
          }
          <div style={{margin: '200px'}}></div>
        </div>
    )
}

export default US