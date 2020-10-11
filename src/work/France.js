import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function France() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "France",
          subtitle: "Whether you’re living in France or just visiting, learning some facts about the country will help you get to know it better; not to mention impress your friends at your next trivia night. So prepare to put your French knowledge to the test as we share 30 facts about France that might just surprise you. France is the largest country in the European Union, covering a total area of 551,695 square kilometers. However, it is only the third-largest country in Europe, behind Ukraine and the European portion of Russia. Around a third (31%) of France is forest and it is the fourth most forested country in the EU, after Sweden, Finland, and Spain. The country is also sometimes referred to as ‘l’hexagone’ due to its six-sided shape."
        },
        {
          title: '',
          subtitle: "It might be time to brush up on your French language skills, because France is the place to be, according to the latest tourism figures. A whopping 89.3 million people visited the country in 2018, making it the most visited destination in the world. The country’s capital, Paris, is also the third most visited city in the world, behind Bangkok and London. It’s hard to imagine that French was the official language of England between 1066 and 1362. But after William the Conqueror led the Norman conquest and subsequent occupation of England in 1066, he introduced Anglo-Norman French to the nation. This was spoken by royalty, aristocrats, and high-powered officials, some of whom couldn’t speak any English! In 1362, however, parliament passed the Pleading in English Act, making English the official language of government. "
        },
        {
          title: '',
          subtitle: "Yes, you read the right. The French king only enjoyed 20 minutes of royal fame after his father Charles X abdicated, leaving him to ascend the French throne in July 1830. After this brief period, Louis-Antoine also abdicated in favor of his nephew, the Duke of Bordeaux. This makes him the joint shortest reigning monarch in history. He shares the astonishing record with Crown Prince Luís Filipe, who technically became king of Portugal after his father was assassinated. But he also died from a wound 20 minutes later.The famous motto first appeared around the time of the Revolution (1789–1799) and was written into the constitutions of 1946 and 1958. Nowadays, you’ll still see it on coins, postage stamps, and government logos; often alongside ‘Marianne’ who symbolizes the triumph of the Republic. The legal system in France is still largely based on the principles set down in Napoleon Bonaparte’s Code Civil after the revolution, in the 1800s."
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
            markers: false
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

export default France
