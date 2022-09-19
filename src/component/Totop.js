import styled from "styled-components";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const Btn = styled.div`
position: fixed;
color: #f00;
bottom: 100px;
right: 100px;
color: #fff;
background: #008850;
font-size: 30px;
padding: 10px;
border-radius: 50%;
opacity:0;
visibility: hidden;
cursor:pointer;
&:hover{
    color:#f00;
}
georaehaja999
&.on{
    background: #ff0;
}
${props => {
        if (props.on) {
            return `
           opacity:1;
           background: #000;
           visibility:visible;
            `
        }
    }}

`

const Totop = () => {
    const [scrollY, setScrollY] = useState(0);
    const totopHandler = () => {
        gsap.to(window, { duration: 0.5, scrollTo: setSct });
    }

    const scrllEvent = () => {
        let scy = window.scrollY;
        setScrollY(scy)
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', scrllEvent);
        return () => {
            window.removeEventListener('scroll', scrllEvent);
        }
    }, [])
    return (
        <Btn onClick={totopHandler} className={scrollY > 400 ? scrollY : null}>
            <i className="xi-arrow-top"></i>
        </Btn >
    )
}

export default Totop;