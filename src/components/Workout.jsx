import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExcerciseCard from './ExerciseCard'

export default function Workout(props) {
  const { workout }=props
  return (
    <SectionWrapper id={'formulate'} header={"Welcome to"} title={['The','Grind','Zone' ]}>
      <div className='flex flex-col gap-4'>
        {workout.map((exercise,i) => {
          return(
            <ExcerciseCard exercise={exercise} i={i}  />
          )
        })}
      </div>

    </SectionWrapper>
  )
}
