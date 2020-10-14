import { useState, useEffect } from 'react';

// Setup state to track x and y position (useState)
    
// Setup event to listen for mouse movement
    
// Remove event listener if unmounted (useEffect)
    
// However this code is not reusable

const useMousePosition = () => {
    const [position, setPosition] = useState({ x:0, y:0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.pageX,
                y: e.pageY
            })   
        }

        console.log('Setting up event')
            document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return position
}

export  { useMousePosition as default }