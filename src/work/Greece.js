import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function Greece() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "Greece",
          subtitle: "Greece has about 300 sunny days each year! That’s about 3,000 hours of sunshine! Bring that sunscreen… you’re going to need it! While only 227 of them are inhabited, each island has a unique culture and landscape, ensuring that every destination will bring a brand new adventure! 16 of these sites are based on cultural criteria such as the Temple of Apollo, the Acropolis of Athens, and the Medieval City of Rhodes. The last 2 (Mount Athos and Meteora), are considered to be heritage sites for their cultural and natural significance!"
        },
        {
          title: '',
          subtitle: "When you picture Greece, you might think of the whitewashed buildings and blue domed churches of the cities on the Mediterranean, but the majority of Greece is actually mountains. According to the Official Greece Tourism Site, Greece is one of the most mountainous countries in Europe! That’s 9,942 miles of pristine blue coastline! 4,660 of those miles are found around the thousands of islands of the Greek archipelago! No matter which island you visit, there is sure to be a captivating view of the mediterranean! Santorini is home to black, white and red beaches. The black beaches are thanks to Santorini’s impressive volcanic past. The beaches are comprised of black sand and pebbles that become very slippery in the water! Be careful–if you wade in too far, you might end up going for a swim! "
        },
        {
          title: '',
          subtitle: "Athena is not only the Patron of Athens, but also the Goddess of warfare, strategy and wisdom. As the myth goes, Athena was chosen to be the Patron of Athens after she won the people over with the gift of an olive tree. Poseidon offered the city water, but they deemed Athena’s gift to be of higher value. Speaking of olive trees, Greece produces 2.2 million metric tons of olives each year. The only countries to beat Greece are Spain and Italy! According to True Voyagers, a travel blog, Greece has more varieties of olives than any other country in the world! One of the most well-known museums is the Acropolis Museum located in Athens. Check out Discover Greece’s page on the 12 most popular archaeological museums to learn about more of them!"
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

export default Greece
