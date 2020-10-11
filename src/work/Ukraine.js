import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function Ukraine() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "Ukraine",
          subtitle: "Ukraine is the largest state in Europe (slightly smaller than Texas). It has an area of 603,628 sq km and borders the Black Sea. Ukrainian is the official language of Ukraine. Russian is spoken in eastern and southern parts of the country. Kiev is the capital city of Ukraine with a population of 2,797,553 and covering an area of 323.9 square miles, it is the largest city of Ukraine. Kiev is the industrial, scientific, educational and cultural center of Eastern Europe. There are many high-tech industries, colleges and universities, and world-famous historical landmarks in Kiev. "
        },
        {
          title: '',
          subtitle: " Ukraine was the land for Trypillian Civilization, one of the world’s most ancient civilizations. Neolithic archeological culture which existed between 5500 BC and 2750 BC on the territory of modern Ukraine. More than half the population of Ukraine is constituted by ethnic Ukrainians. The other ethnic groups in the country include Russians, Belarusians, Moldovans, Crimean Tatars, Bulgarians, Hungarians, Romanians, Jews, Armenians, Poles, Greeks and Tatars. Arsenalnaya Metro Station located in Kiev is the deepest in the world (105 meters/344.488 feet). The station was built in1960 and is close to the House of Parliament. It is said that the tunnels near Arsenalnaya have secret shelters built for the political elite."
        },
        {
          title: '',
          subtitle: "The National University of Ostroh Academy, founded in 1576 by the Prince Vasyl-Kostiantyn of Ostroh, is the first university in Eastern Europe. It is the successor of Ostroh Slavic, Greek and Latin Academy, the first higher educational establishment of the Eastern Slavs.Ukraine is the 4th educated nation in the world. 99.4% literacy in Ukrainians aged 15 and over. 70% of adult Ukrainians have secondary or higher education. The country has about 150 colleges and universities and 80 research institutes.Orthodox Christianity is the dominant religion in Ukraine. The other Christian denominations include Roman Catholicism and Protestantism. "
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

export default Ukraine
