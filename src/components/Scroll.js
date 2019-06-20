import React from 'react';

const Scroll1 = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '1px  black', height: '490px'}}>
            {props.children}
        </div>
    )
}
export default Scroll1;