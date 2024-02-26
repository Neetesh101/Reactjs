import React from 'react'

const About = () => {
  return (
    <div className='list'>
      <h1 > Some important information about project </h1>
            <br />
            <ul >
                <li >
                    😎 Key Features
                </li>
                <li>📌 Shimmer UI for Better UserExperience</li>
                <li>📌 Search Feature </li>
                <li>📌 Cart Feature</li>
                <li>📌 Checking network connection</li>
                <li>📌 forms to contact</li>
                <li>📌 Single page application</li>
                <li>📌 Implemented Lazy Loading or OnDemand Loading on This Router</li>
            </ul>
            <ul >
                <li >
                    ⚙️ Tech Stack used
                </li>
                <li>➡️ React JS for UI </li>
                <li>➡️ Parcel for Bundling </li>
                <li>➡️ Redux for state management</li>
                <li>➡️ Tailwind CSS for Styling</li>
            </ul>
    </div>
  )
}

export default About;