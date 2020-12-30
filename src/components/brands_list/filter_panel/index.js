import { Button, ButtonGroup, TextField } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import './style.css'

const FilterPanel = (props) => {
    const {searchInput, setSearchInput, setCurrentBrand} = props
    return(
        <div className='filter_panel__position'>
            <div className='search_input'>
                <TextField label={'Найти бренд...'} value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                <div style={{marginTop: '20px'}}>
                    <Search/>
                </div>
            </div>
            <div className='luxury_level'>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button onClick={() => setCurrentBrand('economical')}>economical</Button>
                    <Button onClick={() => setCurrentBrand('medium')}>medium</Button>
                    <Button onClick={() => setCurrentBrand('premium')}>premium</Button>
                    <Button onClick={() => setCurrentBrand('all')}>all</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}
export default FilterPanel