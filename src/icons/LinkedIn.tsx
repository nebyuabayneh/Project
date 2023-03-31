import type { SvgIconProps } from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import * as React from 'react';

const LinkedInIcon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon viewBox="0 0 17 15" {...props}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66519 1.73137C4.64354 0.748562 3.94073 0 2.79948 0C1.65822 0 0.912109 0.748562 0.912109 1.73137C0.912109 2.69381 1.63617 3.46393 2.75617 3.46393H2.77749C3.94073 3.46393 4.66519 2.69381 4.66519 1.73137ZM4.43949 4.83288H1.1034V14.8564H4.43949V4.83288ZM12.6343 4.59376C14.8296 4.59376 16.4753 6.02669 16.4753 9.10549L16.4752 14.8527H13.1393V9.49009C13.1393 8.14312 12.6565 7.22398 11.4488 7.22398C10.5272 7.22398 9.97818 7.84361 9.73707 8.44209C9.64887 8.65657 9.62721 8.95541 9.62721 9.25498V14.853H6.29072C6.29072 14.853 6.3347 5.76996 6.29072 4.8294H9.62721V6.24916C10.07 5.56666 10.863 4.59376 12.6343 4.59376Z"/>
        </SvgIcon>
    )
}

export default LinkedInIcon;