import React, { FC } from "react";
import Svg, { Path, G } from "react-native-svg";

export const SunIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg
            width={width || "36"}
            height={height || "36"}
            fill={color || "#000"}
            x="0"
            y="0"
            viewBox="0 0 64 64"
        >
            <G>
                <Path d="M17 31.973c0 8.295 6.716 15.02 15 15.02s15-6.725 15-15.02c0-8.296-6.716-15.02-15-15.02s-15 6.724-15 15.02zm28 0c0 7.178-5.832 13.018-13 13.018s-13-5.84-13-13.018c0-7.178 5.832-13.018 13-13.018s13 5.84 13 13.018zM32.742 11.77a1 1 0 001-1.001V1a1 1 0 10-2 0v9.768a1 1 0 001 1.001zM48.645 4.659a.995.995 0 00-1.367.365l-4.883 8.457a1.001 1.001 0 001.73 1.004l4.884-8.458a1.001 1.001 0 00-.364-1.368zM50.762 23.029c.169 0 .34-.043.499-.134l8.458-4.884c.477-.276.642-.889.366-1.368a1 1 0 00-1.366-.367L50.26 21.16a1.003 1.003 0 00.5 1.869zM11.768 32.742a1 1 0 00-1-1.001H1a1 1 0 00-1 1.001 1 1 0 001 1.002h9.768a1 1 0 001-1.002zM4.282 18.011l8.458 4.884a1 1 0 001.366-.367 1.003 1.003 0 00-.366-1.368l-8.458-4.884a.998.998 0 00-1.366.367 1.003 1.003 0 00.366 1.368zM20.741 14.984a1.002 1.002 0 00.865-1.502l-4.882-8.458a.998.998 0 00-1.367-.366c-.478.278-.642.89-.366 1.368l4.883 8.458c.186.322.522.5.867.5zM32.742 52.232a1 1 0 00-1 1.001V63a1 1 0 102 0v-9.766a1 1 0 00-1-1.001zM22.527 49.894a.995.995 0 00-1.366.364l-4.884 8.458a1.001 1.001 0 00.865 1.503.997.997 0 00.866-.5l4.884-8.457a1.001 1.001 0 00-.365-1.368zM13.482 42.392l-8.458 4.884a1.003 1.003 0 00.501 1.869 1 1 0 00.5-.134l8.457-4.884c.478-.276.643-.889.367-1.368a.998.998 0 00-1.367-.367zM63 31.74h-9.766a1 1 0 00-1 1.002 1 1 0 001 1.002H63a1 1 0 001-1.002 1 1 0 00-1-1.001zM58.976 47.276l-8.458-4.884a1 1 0 00-1.367.367 1.003 1.003 0 00.367 1.368l8.458 4.884a.997.997 0 001.366-.367 1.003 1.003 0 00-.366-1.368zM42.838 50.258a.996.996 0 00-1.366-.364 1.001 1.001 0 00-.365 1.368l4.884 8.458a.997.997 0 001.366.364c.478-.276.642-.888.365-1.368l-4.884-8.458z" />
            </G>
        </Svg>
    )
};
