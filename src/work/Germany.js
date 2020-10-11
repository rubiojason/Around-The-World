import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function Germany() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "Germany",
          subtitle: "Germany has a population of 81 million people. One-third of Germany is still covered in forests and woodlands. Germany is a member of the European Union. There are over 2100 castles in Germany. Germany is the seventh-largest country in Europe. Covering an area of 137,847 square miles, of which 34,836 square miles is covered by land and 3,011 square miles contains water. Germany shares borders with nine other countries. Denmark, Poland, the Czech Republic, Austria, Switzerland, France, Belgium, Luxembourg and the Netherlands.Germany is one of the world’s largest car producers. Selling 5.9 million cars in 2011. VW’s Golf is one of the best selling cars of all time: in 2012 it year it sold more than 430,000 Golfs around Europe (125,000 ahead of its nearest rival). In 2013, the top-selling car brands in Germany were Volkswagen, Mercedes. Audi and BMW."
        },
        {
          title: '',
          subtitle: "German remains the language with the most native speakers in Europe. Germany, Switzerland, Austria, Luxembourg and Liechtenstein have German as the official language. There are over 1,000 kinds of sausages in Germany. Beer is considered a food in Bavaria officially. Smoking is banned in public places but drinking alcohol is still legal. After the Irish, the Germans are those consume the most beer, making Germany the second largest consumer of Beer. There are more football (soccer for the North Americans) fan clubs in Germany than anywhere else in the world."
        },
        {
          title: '',
          subtitle: "Toilet paper in Germany has the softness and consistency of paper towels. The world’s narrowest street is in Reutlingen. It is called Spreuerhofstrasse and is 31 cm (one foot) wide at its narrowest point. The Chancellor’s office in Berlin is known locally as as the “washing machine”. Germany is a leader in climate and energy policies – it made a decision in 2011 to decommission all nuclear power stations (then producing around 18 percent of electricity consumed) by 2022 and to replace them with renewable energies and new storage for green electricity. In Germany there’s no punishment for a prisoner who tries to escape from jail, because it is a basic human instinct to be free."
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

export default Germany
