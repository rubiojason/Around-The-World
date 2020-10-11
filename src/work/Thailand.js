import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function Thailand() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "Thailand",
          subtitle: "The name Thailand in the Thai language is Prathet Thai, which directly translates to ‘Land of the Free’. It seems pretty apt then that this country is the sole country in the whole of South-East Asia to never have been colonised by any European nation. Considering that only very very few countries in the world have managed to escape European rule, this in itself is a huge accomplishment. Chang and Eng Bunker, the first known conjoined twins, were born on the 11th of May 1811, in a province near Bangkok in the Kingdom of Siam, today’s Thailand. The twins married two different women, who were also sisters, and each couple were parents to more than ten children each. Innitially they lived together and shared a bed big enough for four but after a number of years the two sisters began quarrelling and so two separate households were established. The Siamese brothers then ended up spending three consecutive nights at each home until their death in 1874."
        },
        {
          title: '',
          subtitle: "As mentioned above, Thailand used to be known as the Kingdom of Siam and is the country where Siamese cats originated from. The Thai people seem fascinated by these cats and a 14th- century poetry book describes how there used to be 23 different types of Siamese cats, although nowadays there are only six. It is also considered a gesture of good luck to present a bride with a pair of Siamese cats on her wedding day. The sea-salt briny flavour of swiftlet nests are made from the strands of saliva from the male cave-dwelling swiftlet bird; and are one of the most expensive, coveted and sought after delicacies on the planet. "
        },
        {
          title: '',
          subtitle: "Perhaps not for everyone, these nests are collected from Thai caves and are charged at more than USD 900 per pound. These nests are dangerous to harvest, painstaking to prepare and according to traditional Chinese medicine, have a long and extensive list of health benefits for those who can afford the salty dish.Yet another one of Thailand’s funny things - In the month of November there is an annual Lopburi Monkey Banquet that is hosted in front of Pra Prang Sam Yot temple in the province of Lopburi. The locals invite over 600 monkeys to feast on a buffet of over two tonnes of scrumptious food that has all been lovingly prepared by the locals. "
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

export default Thailand
