import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function Russia() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "Russia",
          subtitle: "Approximately 73.8% of the population lives in urban centers. The largest cities are Moscow (10.523 million), St. Petersburg (4.575 million), Novosibirsk (1.397 million), Yekaterinburg (1.344 million) and Nizhniy Novgorod (1.267 million.) The land border of Russia is 20,241 kilometres long, the second longest of any country. Russia is the largest country in the world – and is approximately 1.8 times the size of the US. The world’s most polluted city, Norilsk in Russia not only has a harsh climate with an average temperature of 15.5°F, but is so heavily polluted by heavy metals that it is economically feasible to mine the surface soil."
        },
        {
          title: '',
          subtitle: "Russia shares a border with 14 countries including Norway, Finland, Estonia, Latvia, Lithuania, Poland, Belarus, China, Ukraine, Georgia, Azerbaijan, Kazakhstan, Mongolia and North Korea. No other country in the world has as many borders. The lowest point in Russia is the Caspian Sea – at 28 metres below sea level. The highest point is Mt. Elbrus at 5,633 metres above sea level. It’s the highest mountain in Europe. A chairlift takes you to the 3000 metre mark so if you’re going to climb the mountain that’s where you start. Russia has 12 active volcanoes. The Klyuchevskaya Sopka volcano in Kamchatka Territory has had 50 major eruptions in the last 270 years."
        },
        {
          title: '',
          subtitle: "Lake Baikal contains about 20% of the world’s fresh water and is the deepest lake in the world. About 1,700 species of plants and animals live in the lake, two thirds of which can be found nowhere else in the world. The Volga is the longest river in Russia at 3,530 kilometres long. It starts in the Valdai Hills to the northwest of Moscow and empties into the Caspian Sea. Over that distance it receives water from 200 tributaries."
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
            markers: false,
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

export default Russia
