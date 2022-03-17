import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const SnowIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg
            width={width || "36"}
            height={height || "36"}
            fill={color || "#000"}
            x="0"
            y="0"
            viewBox="0 0 489 489"
        >
            <Path
                d="M461.95 628.16c-17.2-17.1-40.1-26.6-64.5-26.6-9.2 0-17.6 1.1-25.1 3.2-21.1-39.4-62.3-64.4-107.6-64.4-50.3 0-94.8 30.1-113.2 75.7-9.6-2.4-19.7-3.7-29.9-3.7-67 0-121.5 55-121.5 122.5 0 67.1 54.5 121.7 121.5 121.7h132.7c43.7 0 80.3-30.8 89.3-71.9h53.8c50.4 0 91.4-41.1 91.4-91.5-.1-24.7-9.6-47.8-26.9-65zm-207.7 208.5h-132.6c-56 0-101.5-45.6-101.5-101.7 0-56.5 45.5-102.5 101.5-102.5 40.5 0 77.2 23.9 93.4 60.9 1.1 2.4 3.1 4.4 5.6 5.3 2.5 1 5.3.9 7.7-.2 6.9-3.1 15.9-4.8 26-4.8 39.4 0 71.4 32.1 71.4 71.5-.1 39.4-32.1 71.5-71.5 71.5zm143.1-72h-51.7c-.2-50.3-41.1-91.1-91.4-91.1-9.2 0-17.6 1.1-25.1 3.2-13.1-24.5-34-43.4-58.8-54.2 15.7-37.5 52.6-62.1 94.3-62.1 40.5 0 77.2 23.9 93.4 60.9 1.1 2.4 3.1 4.4 5.6 5.3 2.5 1 5.3.9 7.7-.2 6.9-3.1 15.9-4.8 26-4.8 39.4 0 71.4 32.1 71.4 71.5s-32 71.5-71.4 71.5zM120.05 964.56c-2.5-4.9-8.5-6.9-13.4-4.5l-15.6 7.8v-19.3c0-5.5-4.5-10-10-10s-10 4.5-10 10v19.3l-15.8-7.9c-4.9-2.5-10.9-.5-13.4 4.5-2.5 4.9-.5 10.9 4.5 13.4l12.3 6.1-12.3 6.1c-4.9 2.5-6.9 8.5-4.5 13.4 1.8 3.5 5.3 5.5 8.9 5.5 1.5 0 3-.3 4.5-1.1l15.6-7.8v19.3c0 5.5 4.5 10 10 10s10-4.5 10-10v-19.3l15.6 7.8c1.4.7 3 1.1 4.5 1.1 3.7 0 7.2-2 8.9-5.5 2.6-4.8.6-10.9-4.3-13.3l-12.3-6.1 12.3-6.1c4.9-2.5 6.9-8.5 4.5-13.4zM232.25 923.76c-2.4-5-8.4-7-13.4-4.5l-16.1 8v-19.4c0-5.5-4.5-10-10-10s-10 4.5-10 10v19.4l-16.1-8c-5-2.4-10.9-.4-13.4 4.5-2.4 5-.4 10.9 4.5 13.4l12.4 6.1-12.4 6.1c-5 2.4-7 8.4-4.5 13.4 1.7 3.5 5.3 5.6 9 5.6 1.5 0 3-.3 4.4-1l16.1-8v19.4c0 5.5 4.5 10 10 10s10-4.5 10-10v-19.4l16.1 8c1.4.7 2.9 1 4.4 1 3.7 0 7.2-2 9-5.6 2.5-5 .5-11-4.5-13.4l-12.4-6.1 12.4-6.1c5-2.4 7-8.4 4.5-13.4zM343.85 964.56c-2.5-4.9-8.5-6.9-13.4-4.5l-15.6 7.8v-19.3c0-5.5-4.5-10-10-10s-10 4.5-10 10v19.3l-15.6-7.8c-4.9-2.5-10.9-.5-13.4 4.5-2.5 4.9-.5 10.9 4.5 13.4l12.1 6-12.3 6.1c-4.9 2.5-6.9 8.5-4.5 13.4 1.8 3.5 5.3 5.5 8.9 5.5 1.5 0 3-.3 4.5-1.1l15.6-7.8v19.3c0 5.5 4.5 10 10 10s10-4.5 10-10v-19.3l15.6 7.8c1.4.7 3 1.1 4.5 1.1 3.7 0 7.2-2 8.9-5.5 2.6-4.8.6-10.9-4.3-13.3l-12.3-6.1 12.3-6.1c4.9-2.5 6.9-8.5 4.5-13.4zM456.15 923.76c-2.4-5-8.4-7-13.4-4.5l-16.1 8v-19.4c0-5.5-4.5-10-10-10s-10 4.5-10 10v19.4l-16.1-8c-5-2.4-10.9-.4-13.4 4.5s-.4 10.9 4.5 13.4l12.4 6.1-12.4 6.1c-5 2.4-7 8.4-4.5 13.4 1.7 3.5 5.3 5.6 9 5.6 1.5 0 3-.3 4.4-1l16.1-8v19.4c0 5.5 4.5 10 10 10s10-4.5 10-10v-19.4l16.1 8c1.4.7 2.9 1 4.4 1 3.7 0 7.2-2 9-5.6 2.4-5 .4-11-4.5-13.4l-12.4-6.1 12.4-6.1c5-2.4 7-8.4 4.5-13.4z"
                transform="translate(0 -540.36)"
            />
        </Svg>
    )
};