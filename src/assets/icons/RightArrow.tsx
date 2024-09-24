import { memo } from "react";

import { SVGIconProps } from "./icon";

export const RightArrow = memo((props: SVGIconProps) => {
    return (
        <svg width={25} height={20} viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M23.8325 10.7075L14.8325 19.7075C14.6449 19.8951 14.3904 20.0006 14.125 20.0006C13.8596 20.0006 13.6051 19.8951 13.4175 19.7075C13.2299 19.5199 13.1244 19.2654 13.1244 19C13.1244 18.7346 13.2299 18.4801 13.4175 18.2925L20.7113 11H1.125C0.859784 11 0.60543 10.8947 0.417893 10.7071C0.230357 10.5196 0.125 10.2652 0.125 10C0.125 9.73479 0.230357 9.48044 0.417893 9.2929C0.60543 9.10536 0.859784 9.00001 1.125 9.00001H20.7113L13.4175 1.70751C13.2299 1.51987 13.1244 1.26537 13.1244 1.00001C13.1244 0.734643 13.2299 0.480147 13.4175 0.292507C13.6051 0.104866 13.8596 -0.000549316 14.125 -0.000549316C14.3904 -0.000549316 14.6449 0.104866 14.8325 0.292507L23.8325 9.29251C23.9255 9.38538 23.9992 9.49567 24.0496 9.61707C24.0999 9.73846 24.1258 9.86859 24.1258 10C24.1258 10.1314 24.0999 10.2615 24.0496 10.3829C23.9992 10.5043 23.9255 10.6146 23.8325 10.7075Z"
                fill={props.color}
            />
        </svg>
    );
});
