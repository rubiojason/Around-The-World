import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function Poland() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "Poland",
          subtitle: " Poland is the 9th largest country in Europe (8th not Including Russia) Poland isn’t a small country, it’s actually one of the largest ones. Poland is bigger than Italy and the UK. It originates from the name of the tribe Polanie, which means people living in open fields. If you’re a fan of Game of Thrones, you might start reading Polish Medieval History. You’ll get confused many times (try reading something on the period from 1138 to 1320).Later times also haven’t been easy for Poland. The country has been invaded or has fought for freedom in insurrections over 40 times. Poland even disappeared from world maps between 1772 and 1795. "
        },
        {
          title: '',
          subtitle: "Poland adopted its first written constitution in the spring of 1791, which was the 2nd in the world valid legal document of the kind. However, it was only in effect for only 14 months and 3 weeks before Poland was in partitions for over 100 years. In 1853, Ignacy Lukasiewicz introduced the first modern street lamp from in Europe. His lamp inventions were, however, first used in Lviv in Ukraine. There is still a street in Warsaw that uses the same street lamps until today. The Old Town that you can see in Warsaw isn’t the actual Old Town from before the war. The original has been completely bombed at in the 40s and Poles rebuilt it after the war using Bernardo Bellotto’s detailed paintings. That’s why now looks as it did in the 14th century, rather than the 20th."
        },
        {
          title: '',
          subtitle: "Marie Curie, the woman who discovered Polon and Rad, wasn’t French, but Polish. Her name was Marie Sklodowska before she married a Frenchman named Pierre Curie. She was the first woman to win a Nobel Prize, the first person and only woman to win twice, the only person to win a Nobel Prize in two different sciences. Joseph Conrad was actually Polish too. His real name was Teodor Józef Konrad Nałęcz-Korzeniowski. You’re welcome.Poland has a very diverse nature. Almost 800 km of the seashore and a few mountain chains (Tatra, Carpathian, Sudet Bieszczady and Świętokrzyskie). Poland also has the only Central-European desert, Pustynia Błędowska."
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

export default Poland
