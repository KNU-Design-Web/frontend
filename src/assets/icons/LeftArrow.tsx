import { memo } from "react";

import { SVGIconProps } from "./icon";

export const Left = memo((props: SVGIconProps) => {
    return (
        <svg width={25} height={20} viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M24.1251 10.0001C24.1251 10.2653 24.0197 10.5196 23.8322 10.7072C23.6446 10.8947 23.3903 11.0001 23.1251 11.0001H3.5388L10.8326 18.2926C10.9255 18.3855 10.9992 18.4958 11.0494 18.6172C11.0997 18.7386 11.1256 18.8687 11.1256 19.0001C11.1256 19.1315 11.0997 19.2616 11.0494 19.383C10.9992 19.5044 10.9255 19.6147 10.8326 19.7076C10.7396 19.8005 10.6293 19.8742 10.508 19.9245C10.3866 19.9747 10.2564 20.0006 10.1251 20.0006C9.99366 20.0006 9.86355 19.9747 9.74216 19.9245C9.62076 19.8742 9.51046 19.8005 9.41755 19.7076L0.417554 10.7076C0.324578 10.6147 0.250819 10.5044 0.200495 10.383C0.15017 10.2616 0.124268 10.1315 0.124268 10.0001C0.124268 9.86865 0.15017 9.73853 0.200495 9.61713C0.250819 9.49573 0.324578 9.38544 0.417554 9.29257L9.41755 0.292568C9.60519 0.104927 9.85969 -0.000488283 10.1251 -0.000488281C10.3904 -0.000488279 10.6449 0.104927 10.8326 0.292568C11.0202 0.480208 11.1256 0.734704 11.1256 1.00007C11.1256 1.26543 11.0202 1.51993 10.8326 1.70757L3.5388 9.00007H23.1251C23.3903 9.00007 23.6446 9.10542 23.8322 9.29296C24.0197 9.4805 24.1251 9.73485 24.1251 10.0001Z"
                fill={props.color}
            />
        </svg>
    );
});
