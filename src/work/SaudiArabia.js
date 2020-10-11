import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function SaudiArabia() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "Saudi Arabia",
          subtitle: "Located in southwest Asia (at the crossroads of Europe, Asia and Africa), Saudi Arabia extends from the Red Sea in the west to the Arabian Gulf in the east. It is bordered in the north by Jordan, Iraq and Kuwait, by Yemen and Oman in the south and in the east by the United Arab Emirates, Qatar and Bahrain.The capital and largest city in 2011 was Riyadh, with a population of 5.451 million.Saudi Arabia’s population 2017 was 32.94 million people."
        },
        {
          title: '',
          subtitle: "Other large cities include Jeddah, with a population of 3.578 million and Makkah (Mecca), with 1.591 million inhabitants. The Kingdom of Saudi Arabia is almost entirely the creation of King Ibn Saud (1882–1953). He united the four regions into a single state through a series of conquests beginning in 1902 with the capture of Riyadh, the ancestral home of his family, the House of Saud. On 23rd September, 1932, King Abdulaziz announced Saudi Arabia as a kingdom and every anniversary of this date is a national day; in 2020, the country will celebrate its 90th Saudi National Day. "
        },
        {
          title: '',
          subtitle: "There is no flowing water in this country, but there is a manmade lake in the north-western part of the country called Dumat Al-Jandal; although you can’t drink the water as it’s too polluted, you can take a dip and participate in water sports and it’s beneficial for wildlife, plants and agricultural land. Upon its discovery during WW2 in 1936, the commercial production of oil began and the wealth it generated enabled the country to provide free health care and education to its people, without collecting any taxes from them either – brilliant! Saudi Arabia’s 12 months of the Islamic lunar year are: Muharram, Safar, Rabi’ Al-Awal, Rabi’ Al-Akher, Jumada  Al-Awal, Jumada  Al-Akher, Rajab, Sha’ban, Ramadan, Shawwal, Dhu Al-Qadah and Dhu Al-Hajjah. "
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

export default SaudiArabia
