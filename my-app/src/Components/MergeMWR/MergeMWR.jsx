import React, { useState } from 'react';
import './MergeMWR.css';
import GridTable from '../TabsView';

const MergeMWR = () => {
    const [showFilters, setShowFilters] = useState(true)
    const filterNames = ["Project Number", "Inventory Org", "MWR Number", "Package", "Status", "ISO", "Spool"]
    const [filterValue, setFilterValue] = useState([{
        filters: ""
    }])
    const handleHide = () => {
        setShowFilters(false)
    }

    const handleMain = () => {
        setShowFilters(true)
    }

    const handleClear = () => {
        setFilterValue({
            filters: ""
        })
        console.log(filterValue,"after clear")
    }
    const getFilterValue = (event) => {
        console.log(filterValue)
        console.log(event.target.value)
        const selectedValue = event.target.value
        const name = event.target.name
        setFilterValue((prev) => (
          {  ...prev, [name]: selectedValue}
        ))
    }


    return (
        <>
            <div>
                <h1 className='Merge-heading'>Merge MWR(Lines)</h1>
            </div>
            <button className='create-mwr-button'>Create MWR</button>

            <div className='mwr-container'>

                {showFilters ?
                    <div className='filter-section'>
                        <div className='filter-top-section'>
                            <p>Filter</p>
                            <div className='button-bar'>
                                <button className='button prev' onClick={handleHide}>Hide</button>
                            </div>

                        </div>
                        <hr />
                        {filterNames.map(ele => (
                            <>
                                <div className='filter-bottom-section'>
                                    <p>{ele}</p>
                                    <div className='input-items'>
                                        <select name='filters' onClick={getFilterValue} className='select-item'>
                                            <option value="value1">{filterValue.filters}</option>
                                        </select>
                                        <input type='text' />
                                    </div>

                                </div>
                            </>

                        ))}
                        <div className='filter-bottom-buttons'>
                            <button className='clear-all-button' onClick={handleClear}>Clear all</button>
                            <button className='go-button'>Go</button>
                        </div>

                    </div>
                    :
                    <button className='main-button' onClick={handleMain}>Main</button>
                }

                <div>
                    <div>
                        <button>Header</button>
                        <button>Lines</button>
                    </div>
                    <div className='table'>
                        <GridTable />
                    </div>

                </div>
            </div>
        </>

    )
}

export default MergeMWR;
