import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function Italy() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "Italy",
          subtitle: "Rome was founded in 753 BC. The Roman Empire, named after the city where it began started in 27 BC, and ruled over much of Europe and parts of North Africa until 395 AD. After this Italy was divided into many separate states. Italy has only been a country since 1861 when the separate nation-states unified together as the Kingdom of Italy. Italy had a royal family until 1946 when citizens voted to abolish the idea of a ruling monarchy in favour of a republic in the wake of the Second World War. King Umberto II ruled from 9 May 1946 to 12 June 1946."
        },
        {
          title: '',
          subtitle: "The fascist dictator Benito Mussolini ruled over Italy from 1925 until 1945. Before assuming control of the country he served as prime minister for three years, from 1922. Known as Il Duce (which means the leader), Mussolini started out as a radical socialist but aligned himself with Adolf Hitler in the lead up to World War II. He was killed in 1945 by partisan troops.The founding of the republic is celebrated every year on the 2nd of June. The colours of the Italian flag represent hope (green), faith (white) and charity (red). Another interesting fact: the flag was inspired by the French flag of similar design."
        },
        {
          title: '',
          subtitle: "Not all people in Italy speak proper Italian, but one of its many Italian dialects. Some of the older people can neither speak Italian, but only the local dialect or will speak only German when living in the Northern Region of Alto Adige, or French dialect in the Valle d’Aosta. In the Alps you will very likely see the marmots, which make a very high pitched calling sound. Sheep are held mainly in Southern Italy and the donkeys still help farmers in remote villages to carry heavy loads over steep terrain. In the South of Italy you will find Italy’s three active volcanoes: Vesuvius near Naples, Etna on Sicily and Stromboli off the Coast of Italy."
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

export default Italy
