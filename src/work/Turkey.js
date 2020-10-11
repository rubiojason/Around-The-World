import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function Turkey() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "Turkey",
          subtitle: "With its long and rich history where civilizations and empires, as well as various ethnicities and religions, all left their marks, Turkey is a country that never ceases to beguile. Whether it’s an ancient site that contradicts historical facts or the world’s second oldest railway, there’s a lot you don’t know about this land. Between 1502 and 1503, Sultan Beyazid II solicited Leonardo da Vinci to design a bridge that would span the Golden Horn. Following the three geometric principles of the pressed-bow, parabolic curve and keystone arch, da Vinci’s design would have been the world’s longest bridge at that time, but the sultan did not approve it. Every year, the Selçuk Efes Camel Wrestling Festival, established by the Turkic tribes more than 2,000 years ago, takes place in Turkey’s southern Aegean coast. The fighting camels, adorned with decorative rugs, bells, and saddles, often come from Iran and Afghanistan."
        },
        {
          title: '',
          subtitle: "Santa Claus, or more precisely Saint Nicolas, a Christian saint and Greek Bishop of Myra, was born in Patara, Lycia or what is now known as Demre in Turkey. Also, the Virgin Mary’s final resting place is thought to be somewhere near Ephesus. Located near the tourist summer hot spot Fethiye, Iztuzu Beach is one of the most important breeding grounds for the loggerhead turtle. Every year, the endangered turtles arrive between May and October to lay their eggs on the protected shore.On January 17, 1875, the Tünel underground funicular began to operate, becoming the world’s second underground railway after the London Underground. Tünel continues to run between Beyoğlu and Karaköy and is one of the oldest surviving rail lines in continental Europe."
        },
        {
          title: '',
          subtitle: "Even though no one knows where tulips are originally from, it’s certain that the Ottomans loved the flower and helped to make it popular all around Europe. The story goes that a Flemish ambassador, who visited Süleyman the Magnificent, introduced the flower to Holland in the 16th century. Turkey may be known for classics such as Turkish Delight or Turkish Coffee, but it is actually the world’s largest producer of hazelnuts. Turkish hazelnuts make up around 72.9% of the world’s supply, and the country’s Eastern Black Sea region produces approximately 60% of that. More than 11,000 years ago, inhabitants of Çatalhöyük, a large Neolithic and Chalcolithic settlement in south-central Turkey, were consuming crops such as wheat and barley, which historians accept as the earliest example of agriculture."
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

export default Turkey
