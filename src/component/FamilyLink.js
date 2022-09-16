import { useEffect, useState } from "react"

const FLINK = [
    { id: 1, name: "현대아산", link: "http://www.hdasan.com/main" },
    { id: 2, name: "현대무벡스", link: "http://www.hdasan.com/main" },
    { id: 3, name: "현대경제연구원", link: "http://www.hdasan.com/main" },
]


const FamilyLink = () => {
    const [flnk, setflnk] = useState();
    useEffect(() => {
        window.open(flnk)
    })
    return (
        <select onChange={(e) => setflnk(e.target.value)}>
            {
                FLINK.map(link => {
                    return <option value={link.link} >{link.name}</option>
                })
            }
        </select>
    )
}

export default FamilyLink;