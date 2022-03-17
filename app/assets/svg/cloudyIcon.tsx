import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const CloudyIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg
            width={width || "36"}
            height={height || "36"}
            fill={color || "#000"}
            x="0"
            y="0"
            viewBox="0 0 406.245 406.245"
        >
            <Path d="M345.102 249.537c-.236-16.72-6.655-31.964-17.054-43.573a84.804 84.804 0 004.189-26.394c0-46.93-38.176-85.11-85.101-85.11-6.834 0-13.637.813-20.219 2.418a7.5 7.5 0 103.552 14.573 70.453 70.453 0 0116.666-1.991c38.653 0 70.101 31.451 70.101 70.11 0 5.255-.585 10.424-1.719 15.464a66.442 66.442 0 00-37.237-11.365 66.899 66.899 0 00-24.063 4.488c-5.886-17.846-16.906-33.862-31.646-45.778-17.405-14.072-39.34-21.822-61.764-21.822-52.788 0-95.993 41.821-98.224 94.069-16.798 4.977-31.923 15.035-43.06 28.741C6.934 258.862 0 278.412 0 298.414c0 48.173 39.192 87.365 87.365 87.365H315.23c39.365 0 71.392-32.026 71.392-71.392 0-27.876-16.478-53.285-41.52-64.85zM315.23 370.779H87.365C47.463 370.779 15 338.316 15 298.414c0-16.567 5.741-32.758 16.166-45.589 10.281-12.654 24.654-21.553 40.47-25.058a7.5 7.5 0 005.876-7.455l-.003-.191c-.008-.417-.016-.833-.016-1.251 0-45.94 37.375-83.314 83.314-83.314 19.278 0 37.375 6.393 52.334 18.486 14.536 11.752 24.806 28.201 28.914 46.315a7.5 7.5 0 0010.978 4.885 51.8 51.8 0 0125.247-6.576c28.578 0 51.828 23.25 51.828 51.828 0 1.028-.042 2.134-.132 3.481a7.502 7.502 0 004.873 7.531c21.994 8.165 36.771 29.416 36.771 52.88.002 31.096-25.295 56.393-56.39 56.393z" />
            <Path d="M199.075 116.621c.088.208.053.124.01.021 1.795 4.212 7.027 5.877 10.924 3.436 4.044-2.533 4.573-8.262 1.296-11.638-2.589-2.517-6.645-2.91-9.621-.824-2.839 1.991-3.927 5.788-2.614 8.99a.931.931 0 00.005.015zM247.141 79.065a7.5 7.5 0 007.5-7.5V27.966c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v43.599a7.5 7.5 0 007.5 7.5zM323.511 110.699a7.474 7.474 0 005.303-2.197l30.83-30.829a7.5 7.5 0 10-10.605-10.606l-30.83 30.829a7.498 7.498 0 00-.001 10.606 7.472 7.472 0 005.303 2.197zM398.745 172.068h-43.6a7.5 7.5 0 00-7.5 7.5 7.5 7.5 0 007.5 7.5h43.6a7.5 7.5 0 000-15zM165.468 108.501c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197a7.5 7.5 0 000-10.606l-30.83-30.829a7.5 7.5 0 00-10.606 0 7.5 7.5 0 000 10.606l30.83 30.829z" />
        </Svg>
    )
};