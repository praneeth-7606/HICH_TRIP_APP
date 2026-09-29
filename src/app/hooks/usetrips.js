'use client'
import { useState, useEffect } from 'react'

export const useTrips = () => {
  const [trips, setTrips] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load trips from localStorage or API
    const savedTrips = localStorage.getItem('trips')
    if (savedTrips) {
      setTrips(JSON.parse(savedTrips))
    }
    setLoading(false)
  }, [])

  const saveTrips = (newTrips) => {
    setTrips(newTrips)
    localStorage.setItem('trips', JSON.stringify(newTrips))
  }

  const addTrip = (trip) => {
    const newTrips = [...trips, { ...trip, id: Date.now() }]
    saveTrips(newTrips)
  }

  const updateTrip = (id, updates) => {
    const newTrips = trips.map(trip => 
      trip.id === id ? { ...trip, ...updates } : trip
    )
    saveTrips(newTrips)
  }

  const deleteTrip = (id) => {
    const newTrips = trips.filter(trip => trip.id !== id)
    saveTrips(newTrips)
  }

  return {
    trips,
    loading,
    addTrip,
    updateTrip,
    deleteTrip
  }
}