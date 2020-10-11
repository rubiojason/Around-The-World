import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function China() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "China",
          subtitle: "Something that you have to avoid in most countries on the world is totally acceptable in China. Just like in Vietnam, spitting, yawning, grunting and burping are normal behaviours when you eat in China.For us, it was extremely disgusting and we couldn’t get used to it. Maybe if we stay in this country a little bit longer, it would be easier for us to tolerate it This is really weird! Diapers are not popular in China. Most children wear special pants with big hole bottoms. When they feel they need to make a poo or pee, they just squat and do it wherever they want. And this is what you call an eco life! Contrary to most people think, China is not the biggest country in the world. It’s 4th after Russia, Canada and United States. Russia is almost 2 times bigger than China!"
        },
        {
          title: '',
          subtitle: "Chinese army has the biggest number of soldiers in the world (more than 2 million people). Just to compare — it’s the same as the population of Paris. China is the owner of all pandas. Literally, all of them! Every single panda that lives on this world belongs to China.If you see a panda in other countries, it means it is lent from PRC (People’s Republic of China). What’s interesting is that when a baby panda is born, it is sent to China (always by FedEx) to help expand the gene pool. Restoring virginity is possible and quite popular in China. This plastic surgery even has a medical name — hymenorrhaphy. Chinese women pay a lot of money for reconstructing their hymens before the wedding night. They just don’t want their future husbands to find out that they are not virgins anymore… China is the most populated country in the world. No wonder they have huge traffic jam problems. What to do when you are late on your meeting and you are stuck in a traffic jam? "
        },
        {
          title: '',
          subtitle: "It is unbelievable but 35 million of Chinese people still live in caves! They don’t have enough money for building a house, so they are using caves as their shelters. China is a huge country with only one time zone! That’s why in some places the sun rises even at 10:00 AM. In the past China has 5 different time zones. But in 1949 the Communist Party leaders decided to set one time for the whole country. Since then, everybody is using an official Beijing time. New Year is the biggest holiday in China. It is celebrated on January or February, and it’s the real holiday for everybody. Almost nobody is working, every one is going back home to celebrate this happy time with their families. Chinese New Year celebration lasts for 15 days! Nothing can be compared to this. It’s really unusual that the whole country is having a holiday for such a long time.What’s interesting, Chinese New Year is celebrated in many other countries in the world. "
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

export default China