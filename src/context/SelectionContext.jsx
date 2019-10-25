import React from 'react';

export const SelectionContext = React.createContext({ selections: {}, setSelection: () => {}});

export function SelectionContextProvider(props) {
    const [selections, setSelections] = React.useState(props.selections || {});
    function toggleSelection(selectionId) {
        setSelections({
            ...selections,
            [selectionId]: !Boolean(selections[selectionId])
        })
    }
    return <SelectionContext.Provider value={{selections, toggleSelection}}>{props.children}</SelectionContext.Provider>
}