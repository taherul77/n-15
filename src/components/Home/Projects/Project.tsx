import { FocusCards } from '@/components/ui/focus-cards'
import { projectProps } from '@/types'
import React from 'react'

const Project = ({cards}:projectProps) => {

  return (
    <div>
       <FocusCards cards={cards} />;
    </div>
  )
}

export default Project
