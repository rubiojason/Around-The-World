import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function UK() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "United Kingdom",
          subtitle: "Tea is by far the most popular drink among Brits. It is estimated that they drink on average 165 million cups of tea every day. The fun thing here is that in US the tea’s consume is 20 times lower. As for the cuisine, the typical food of UK is the roast beef and Yorkshire beef, but the Brits have voted the Chicken Takka as their national dish. The Chicken Takka is actually an Indian recipe. The UK is linked with the European continental land through the Channel Tunnel.  At a distance of 21 miles, this road is the second longest underground tunnel. It connects the city of Dover (England) and Calais (France)."
        },
        {
          title: '',
          subtitle: "On August 1896 the United Kingdom and the Zanzibar Sultanate fought for around 40 minutes being this way the shortest war ever happened in history.  Only one British sailor was injured while casualties in the other party reached 500 people. The author of the Harry Potter series of books, J.K. Rowling was the writer to ever become a billionaire from her writing. In 2014, her total net worth reached $1 billion. Topping at 1,107 feet or 350 meters, the London’s Shard building was completed in 2012 making it the tallest object in the continent of Europe."
        },
        {
          title: '',
          subtitle: "An ancient decree in UK stated that at the moment when there are at least than six ravens at the ground of London Tower, the monarchy must fall. The rule was set by King Charles II. In ancient times it was not allowed for a random citizen to die in a run-state facility. Some believe that such rule is applied at England’s Parliament, but that’s not true. Indian restaurants in UK are a random thing. It is estimated that there more Indian restaurants in London than in Indian biggest urban centers like Mumbai or New Delhi."
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

export default UK
