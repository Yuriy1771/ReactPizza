import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f2f2f2"
        foregroundColor="#dcdbdb"
    >
        <circle cx="137" cy="121" r="119" />
        <rect x="0" y="312" rx="5" ry="5" width="277" height="87" />
        <rect x="1" y="424" rx="5" ry="5" width="89" height="31" />
        <rect x="132" y="418" rx="15" ry="15" width="144" height="45" />
        <rect x="27" y="256" rx="5" ry="5" width="222" height="35" />
    </ContentLoader>
)

export default Skeleton
