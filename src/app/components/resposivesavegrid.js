'use client'

import React, { useState, useEffect } from 'react'

const ResponsiveSavesGrid = ({ children }) => {
  const [columns, setColumns] = useState(1)

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth
      if (width >= 1200) setColumns(3)
      else if (width >= 768) setColumns(2)
      else setColumns(1)
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: columns > 1 ? '24px' : '16px',
        padding: '0 16px'
      }}
    >
      {children}
    </div>
  )
}