import { useEffect, useState } from "react"


const UseReadingProgress = () => {
    const [completion, setCompletion] = useState(0)

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            
            if(scrollHeight) {
                setCompletion(
                    Number((currentProgress / scrollHeight).toFixed(5)) * 100
                )
                console.log(completion)
            }
        }

        window.addEventListener('scroll', updateScrollCompletion)

        return () => {
            window.removeEventListener('scroll', updateScrollCompletion);
        }

    }, [])

  return completion;
}

export default UseReadingProgress