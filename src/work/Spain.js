import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function Spain() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "Spain",
          subtitle: "Spain – or the Kingdom of Spain, to give the country it’s official title – is the second-largest country in the European Union after France. It measures up at around 506,000 square kilometers if you include the Canary Islands and the Spanish territories along the North African coastline. Like many other European countries, what we know as modern-day Spain was once a collection of individual kingdoms. That changed in the 15th century when Fernando of Aragon and Isabel of Castile married and united their respective kingdoms. And if you thought learning one new language was hard enough, most of these kingdoms had their own language, too!"
        },
        {
          title: '',
          subtitle: "There are an estimated 440 million native Spanish speakers around the world, second only to Mandarin. But while Spanish is the official language of Spain, the regional languages of Catalan, Basque (Euskara) and Galician (Galego) all have official status in their respective regions. Spain is home to 47 million people, and while you might think that sounds crowded, in reality, three-quarters of the population live in urban areas. Around 6.5 million, for instance, live in the greater Madrid area, while 5.5 million reside in the greater Barcelona area. This means both cities have larger populations than New Zealand. According to stats, Spain has the second-highest life expectancy of all the OECD countries at an impressive 83 years. Only the Japanese have a higher life expectancy. Figures show that Spanish women are outliving their male counterparts: 85 years compared to 79 years for men."
        },
        {
          title: '',
          subtitle: "By 2050, the United Nations projects that Spain will have one of the oldest populations in the world. It estimates that in just thirty years, over 30% of the population will be aged 60 and above. Despite the importance of religion in Spanish culture, apparently only 13.6% of Spain’s population actually goes to church every Sunday. That said, some 70% of the locals still identify as Roman Catholic according to a 2012 study by the Center for Sociological Studies in Spain. Following the death of the right-wing dictator, General Franco, back in 1975, King Juan Carlos I returned to the throne. Once one of Europe’s most popular monarchs, Juan Carlos fell from grace following a string of scandals. He abdicated in favor of his son, Felipe VI, in 2014. "
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

export default Spain