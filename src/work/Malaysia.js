import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function Malaysia() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "Malaysia",
          subtitle: "One of Malaysia’s oldest names, Aurea Chersonesus, means “peninsula of gold.” It was given by Greco-Roman geographer Ptolemy in his book Geographia, written about A.D. 150. Malaysia is actually more famous as the world’s second largest producer of refined tin.The name Malaysia may derive from the word Melayu, or Malay, that could come from the Sungai Melayu (Melayu River) in Sumatra. Borneo is the third largest island in the world, after Greenland and New Guinea. Three countries share the island: the Independent Sultanate of Brunei, Indonesia, and Malaysia."
        },
        {
          title: '',
          subtitle: "Malaysia’s Kuala Kangsar district office is the home of the last surviving rubber tree from the original batch brought by Englishman H.N. Ridley from London’s Kew Gardens in 1877. Local time has been adjusted in peninsular Malaysia a total of eight times. The last adjustment happened on January 1, 1982, when Tun Dr. Mahathir Mohamad, then prime minister, decided that the entire country would follow the time in Sabah and Sarawak. Before that, both islands were 30 minutes ahead of peninsular Malaysia. Malaysia has 40,934 miles (65,877 km) of highway. This is more than Earth’s circumference of 24,901 miles (40,075 km)."
        },
        {
          title: '',
          subtitle: "The biggest roundabout in the world is located at Putrajaya in Malaysia. It is 2.2 miles (3.5 km) in diameter. The largest undivided leaf in the world, Alocasia macrorrhiza, comes from the Malaysian state of Sabah. A specimen found in 1966 measured 9.9 feet (3.02 m) long by 6.3 (1.92 m) wide. The Japanese invaded Malaysia on December 6, 1941, the same day they bombed Pearl Harbor. They landed at Khota Baru and stole bicycles in every town they took on their way to Singapore, making the trip in 45 days."
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

export default Malaysia
