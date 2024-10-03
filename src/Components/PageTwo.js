import React from 'react'
import Navbar from './Navbar'

export default function PageTwo() {
  return (
    <div>
      <Navbar />
      <div className="bg">
        <div class="container">
          <h3>History:</h3>
          <p>BMW is one of the largest and most recognizable luxury car brands in the world. With millions of BMW vehicles on the road today, it’s almost impossible to drive around town without seeing a decent amount of their cars. As arguably one of the best-known German car manufacturers in the world, you may think you know everything about the luxury car company.

            In this article, we’ll share seven interesting facts about BMW that you may not have known so you can have a deeper appreciation for the long history of impressive engineering that has led BMW to become one of the premier luxury car brands to ever exist</p>
        </div>
        <div class="container">
          <h3>Facts:</h3>
          <ul>
            <li>BMW Originally Built Plane Engines</li>
            <li>BMW stands for Bayerische Motoren Werke</li>
            <li>BMW was ahead of the times with the production of Electric Cars</li>
            <li>BMW is a logo tribute to its Bavarian Roots</li>
          </ul>

        </div>
        <div class="container">
          <h3>Logo:</h3>
          <p>The circular blue and white BMW logo or roundel evolved from the circular Rapp Motorenwerke company logo, which featured a black ring bearing the company name surrounding the company logo, on a plinth a horse's head couped.</p>
        </div>
      </div>
    </div>
  )
}
