import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function Austria() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "Austria",
          subtitle: "Austria is one of the world’s most eco-friendly countries – about 63% of waste is recycled and most of the electricity comes through the use of renewable energy sources. Approximately one-third of the country’s forested lands is protected area. Austria has 13 peaks with a height of 3,000 meters and 34 peaks that exceed 2,000 meters. The Tyrolian city Innsbruck has hosted the Winter Olympics twice. Once in 1964 and again in 1976. In the 19th century, Austria was one of the most powerful countries in the world. Back then, the total area was almost 700,000 square kilometers.The best-preserved Stone Age man in the world was found in the Oetz Valley in Tyrol. His name is “Oetzi” and he died around 5,300 years ago."
        },
        {
          title: '',
          subtitle: "Austrian Bertha von Suttner was the first woman ever to win the Nobel Peace Prize in 1905. The Tiergarten Schönbrunn in Vienna was founded in 1752 and is the oldest zoological garden in the world. In Austria, it’s considered bad luck if you share a toast and don’t maintain eye contact with the other person. The Austrian National Library in Vienna is home to more than 2 million books and one of the world’s major libraries. Half of the Austrian men are overweight whereas only 20% of Austrian women are overweight – the lowest rate of all EU countries."
        },
        {
          title: '',
          subtitle: "Austria is always among the countries with the highest standard of living in the world.  In 1818, the Austrian Joseph Madersperger invented the sewing machine. Freedom of religion is important in Austria and every child over the age of 14 can decide the religion on their own. Around one-fourth of Austria’s population lives in the capital city Vienna. "
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
          <div style={{margin: '100px'}}></div>
        </div>
    )
}

export default Austria
