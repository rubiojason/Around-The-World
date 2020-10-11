import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

function Canada() {

    const revealRefs = useRef([])
    revealRefs.current = []

    const sections = [
        {
          title: "Canada",
          subtitle: "Canada has more lakes than the rest of the world combined. At last count, there may be as many as two million, with 563 of them larger than 100 square kilometres. At 243,000 km along the shores of 52,455 islands, Canada boasts of the longest coastline in the world. If you want to have an idea of how long this is, it is estimated that at a pace of about 20 km a day, it would take a person 33 years to finish strolling Canada’s shorelines. Among its largest lakes are Lake Huron in Ontario, Great Bear Lake in the Northwestern Territories and Lake Superior also in Ontario. There are large lakes in Manitoba as well. You will find Lake Winnipegosis, Lake Manitoba and Lake Winnipeg here. Lake Winnipeg is Canada’s fifth and the world’s 11th largest lake."
        },
        {
          title: '',
          subtitle: "The Canadian Shield forms a U-shape extending from Lake Superior in the south to the Arctic islands in the north and from the western part of Canada eastward to Greenland. It is where some of the oldest rocks on earth can be found. Among them, a 4.28 billion-year-old rock that was discovered by geologists in 2001. It was found in an area of exposed bedrock on the eastern shore of the Hudson Bay in northern Quebec. he Dead Sea in the Middle East is known the world over for water so buoyant you can’t sink. This is attributed to its high salt content making it denser than fresh water. You don’t have to travel that far to experience this phenomenon. Canada has Little Manitou Lake in Saskatchewan. Fed by underground springs, the 13.3 square km lake has mineral salt concentrations of 180,000 mg per litre making it extremely buoyant."
        },
        {
          title: '',
          subtitle: "Regina, the capital of the prairie province of Saskatchewan, is the closest to the center of the continent at a latitude of 50°27’ N and a longitude of 104°37’ W. These Canadian cities are Toronto, Montreal, Vancouver, Calgary, Edmonton and Ottawa. According to Statistics Canada, Toronto tops the list, followed by Montreal and Vancouver. Canada continues to be among the top countries with the lowest population density currently estimated at 3.9 people per square kilometre. The country has a total population of more than 37 million as of 2019."
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

export default Canada
