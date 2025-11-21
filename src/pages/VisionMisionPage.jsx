import React from 'react'
import VisionMission from '../components/VisionMission'
import Breadcrumb from '../components/Breadcrumb'

function VisionMisionPage() {
  return (
    <div>
         <Breadcrumb
                title="Our Mission And Vision"
                items={[
            { name: "Mission-Vision", path: "/about/vision-mission" },]}
              />
        <VisionMission/></div>
  )
}

export default VisionMisionPage