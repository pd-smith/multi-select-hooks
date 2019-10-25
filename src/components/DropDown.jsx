import React from 'react';

export default function (props) {
    const [open, setOpen] = React.useState(false);
    return (<>
        <div className="drop-down" onClick={() => setOpen(!open)}>{props.name}</div>
        {open && <div className="drop-down-indent">{props.children}</div>}
    </>
    )
}