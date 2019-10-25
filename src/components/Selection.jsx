import React from 'react';
import { SelectionContext } from '../context/SelectionContext';

export default function(props) {
    const { selections, toggleSelection } = React.useContext(SelectionContext);
    const selected = Boolean(selections[props.selectionId]);
    function setSelected() {
        toggleSelection(props.selectionId);
    }
    return (
        <Selection {...{...props, selected, setSelected}}/>
    );
}

export function Selection(props) {
    return (
        <label className="selection" >
            <input type="checkbox" checked={props.selected} onChange={props.setSelected}/>
            {props.name}
        </label>
    );
}