import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function HongKong() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "Hong Kong",
          subtitle: "Hong Kong is famous for towering skyscrapers. Did you know 40 percent of the territory is made up of country park and nature reserves? Hiking the green trails is a favourite weekend pastime. You probably know that Hong Kong means “fragrant harbour” in Chinese. What about Kowloon? Every time you utter the word “Kowloon” you are saying “nine dragons”. Folklore tells us that a young emperor noticed the area’s eight hills, and named the land “eight dragons”. Later, a servant reminded the emperor he too is a dragon. This made nine. Kow sounds like “gau” or nine in Cantonese, and Loon is like “lung” or dragon.Hong Kong boasts the world’s longest covered escalator. The Mid-Levels Escalator runs for a half-mile. Hong Kong’s beloved Star Ferry began running in 1880. At that time the service from Victoria Harbour to Tsim Sha Tsui took up to one hour. Thanks to the city’s reclamation, the same journey today takes just 10 minutes."
        },
        {
          title: '',
          subtitle: "Hong Kong’s current Chief Executive is Carrie Lam Cheng Yuet-ngor. The 60-year-old took office in July 2017.Hong Kongers have a long-established entrepreneurial spirit and desire to make money.  In a 2018 global billionaires list, Hong Kong ranked sixth. 67 residents hold personal fortunes of US$1 billion or over.Hong Kong Island steals the limelight, but there are actually 263 islands in Hong Kong. Some of them, like Lantau, Cheung Chau and Lamma, are accessible by ferry while others are totally uninhabited and virtually unreachable. Dim sum originated here in southern China and means “touch the heart”. These tiny bites of goodness were created as snack food for travellers and today are an essential part of local culture. "
        },
        {
          title: '',
          subtitle: "Don’t worry if you find your apartment building is without a fourth floor. Here’s two numerical fun facts! Omitting the number four is common because four sounds like the word “death” in Chinese. This makes four unlucky. Conversely, lucky number eight represents wealth. The mystical art of feng shui remains common practice in Hong Kong. The rooftop of Central’s HSBC Hong Kong building includes two rods to deflect bad energy. They face the Bank of China building, built with sharp edges believed to cut and dilute good energy. Foodie fun facts about egg tarts and pineapple buns. The latter is named not because they contain the fruit but for their pineapple-like crust and are must-try local specials at the bakery, as are egg tarts."
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

export default HongKong
