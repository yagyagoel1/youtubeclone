import { VideoCard } from "./VideoCard"

const VIDEO= [
{title: "How to learn coding in 30 days|30 days plan|code with me ",
image: "/photo.jpg",
thumbimage: "/photo.jpg",
author: "Yagya Goel",
views: "45M",
timestamp: "2 days ago"},
{title: "How to learn coding in 30 days|30 days plan|code with me ",
image: "/photo.jpg",
thumbimage: "/photo.jpg",
author: "Yagya Goel",
views: "45M",
timestamp: "2 days ago"},
{title: "How to learn coding in 30 days|30 days plan|code with me ",
image: "/photo.jpg",
thumbimage: "/photo.jpg",
author: "Yagya Goel",
views: "45M",
timestamp: "2 days ago"}]
export function VideoGrid (props : any)
{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
            VIDEO.map(video=>
                <div><VideoCard 
                title = {video.title}
                image = {video.image}
                thumbimage = {video.thumbimage}
                author = {video.author}
                views = {video.views}
                timestamp = {video.timestamp}></VideoCard>
            </div>)
}
    </div>
}