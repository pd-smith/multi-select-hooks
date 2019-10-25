import React from 'react';
import { SelectionContext } from '../context/SelectionContext';
import {Selection} from './Selection';

export default function(props) {
    const { selections, toggleSelection } = React.useContext(SelectionContext);
    const selectedIds = Object.keys(selections).filter((selectedId) => selections[selectedId]);
    return (
        <SelectedOptions {...{...props, selectedIds, toggleSelection}}/>
    );
}

export function SelectedOptions(props) {
    return props.selectedIds.map((selectedId) => 
        <Selection key={selectedId} name={selectedId} selectedId={selectedId} setSelected={() => props.toggleSelection(selectedId)}/>
    )
}