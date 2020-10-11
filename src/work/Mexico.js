import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function Mexico() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "Mexico",
          subtitle: "The city is slowly sinking to the depths of the oceans like Atlantis! Well, not really. But Mexico City is sinking at a rate of about 10 inches a year as the city pumps draw water from the lake that supports it.  In fact, it has sunk so much that it lost its title as the 7th highest capital city in the world to Yemen and now sits at #8. Long before phones and the internet became commonplace, Mexico was the place to find your literature in North America. In 1539, Mexico City was the first place in all of North America to use the printing press. You can even visit the house it was used in!"
        },
        {
          title: '',
          subtitle: "Children in Mexico receive their Christmas presents on January 6th, not December 25th. Rather than celebrating the birth of Jesus, Mexicans instead celebrate the day the Three Wise Men arrived to give gifts to Jesus. Everyone gets presents when Jesus gets presents! Americans are known for having huge portions when it comes to food, but even they would have a tough time finishing a 3-foot long, 150 pound tamale that takes a village to make! The 'el zacahuil' is often enjoyed at special celebrations or Xantolo, the Feast of All Saints, and can feed around 70 people. This monstrosity is stuffed with pork or turkey, piled high over chile and a mouthwatering blend of spices, and served up on grilled banana leaves with pickled jalapenos."
        },
        {
          title: '',
          subtitle: "Many believe the oldest city in North America is St. Augustine, but Mexico City was actually founded a little over 40 years before it in 1521. The city was built by the Spaniards on the ancient ruins of the Aztec city of Tenochtitlán. A socially controversial idea that has become popular in some cities around the world is segregated transportation. Mexico City is one of those cities with subway cars where it is illegal for men to enter, creating a space that's completely safe for women. Like any large city, Mexico City has its standard crime rate, and this is to try and help combat public groping, assault, and even kidnapping. To compare cities, Mexico City is still about as safe as New York City. It even has the reputation as one of the safer places to go!"
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

export default Mexico
