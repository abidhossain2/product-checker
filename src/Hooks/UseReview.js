import { useEffect, useState } from "react"

const UseReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('reviewer.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return [reviews]
}
export default UseReview;