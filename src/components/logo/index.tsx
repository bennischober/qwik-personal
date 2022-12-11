import { $, component$ } from "@builder.io/qwik";
import { logoClass, StyledDiv } from "./styles.css";
import colors from "tailwindcss/colors";

interface LogoProps {
    fill?: string;
}

// change to component

export default component$(({ fill }: LogoProps) => {
    let f = fill ?? colors.orange[500];

    const scrollToTop = $(() => {
        // scroll smoothly to top
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    return (
        <StyledDiv onClick$={() => scrollToTop()}>
            <svg
                class={logoClass}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                preserveAspectRatio="none"
                viewBox="0 0 1080 1080"
                id="header-logo"
            >
                <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="transparent"
                ></rect>
                <g
                    transform="matrix(1 0 0 1 540 540)"
                    id="09c5bc4f-63a3-486e-b3cd-bedece2b2298"
                >
                    <rect
                        style={{
                            stroke: "none",
                            strokeWidth: 1,
                            strokeDasharray: "none",
                            strokeLinecap: "butt",
                            strokeDashoffset: 0,
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 4,
                            fill: f,
                            fillRule: "nonzero",
                            opacity: 1,
                            visibility: "hidden",
                        }}
                        vectorEffect="non-scaling-stroke"
                        x="-540"
                        y="-540"
                        rx="0"
                        ry="0"
                        width="1080"
                        height="1080"
                    />
                </g>
                <g
                    transform="matrix(11.8 -6.73 6.73 11.8 540 540)"
                    id="9426d618-39a1-4ba0-85f6-77e0765c9597"
                >
                    <polygon
                        id="logo-poly"
                        style={{
                            stroke: f,
                            strokeWidth: 1,
                            strokeDasharray: "none",
                            strokeLinecap: "butt",
                            strokeDashoffset: 0,
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 4,
                            fill: "transparent",
                            fillOpacity: 0,
                            fillRule: "nonzero",
                            opacity: 1,
                        }}
                        vectorEffect="non-scaling-stroke"
                        points="-18.54,32.11 -37.08,0 -18.54,-32.11 18.54,-32.11 37.08,0 18.54,32.11 "
                    />
                </g>
                <g
                    transform="matrix(2.34 0 0 2.34 540 540)"
                    id="42488908-90d2-4c52-a9a8-0044a7a971e2"
                    style={{
                        font: "normal normal normal 200px/1px Roboto",
                    }}
                >
                    <text
                        fontFamily="Lato"
                        fontSize="200"
                        fontStyle="normal"
                        fontWeight="400"
                        style={{
                            stroke: "none",
                            strokeWidth: 1,
                            strokeDasharray: "none",
                            strokeLinecap: "butt",
                            strokeDashoffset: 0,
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 4,
                            fill: f,
                            fillRule: "nonzero",
                            opacity: 1,
                            whiteSpace: "pre",
                        }}
                    >
                        <tspan x="-64.65" y="62.83">
                            B
                        </tspan>
                    </text>
                </g>
            </svg>
        </StyledDiv>
    );
});
