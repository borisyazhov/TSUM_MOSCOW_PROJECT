import React, { useState } from 'react'
import BrandsItem from './brands_item'
import FilterPanel from './filter_panel'
import './style.css'

let brands = [
    {
        id: 1,
        name: 'Louis Vuitton',
        description: 'Французский дом моды, специализирующийся на производстве чемоданов и сумок, модной одежды, парфюмерии и аксессуаров класса «люкс» под одноимённой торговой маркой.',
        luxury_level: 'premium', 
    },

    {
        id: 2,
        name: 'Louis Vuitton',
        description: 'Французский дом моды, специализирующийся на производстве чемоданов и сумок, модной одежды, парфюмерии и аксессуаров класса «люкс» под одноимённой торговой маркой.',
        luxury_level: 'premium', 
    },

    {
        id: 3,
        name: 'Louis Vuitton',
        description: 'Французский дом моды, специализирующийся на производстве чемоданов и сумок, модной одежды, парфюмерии и аксессуаров класса «люкс» под одноимённой торговой маркой.',
        luxury_level: 'premium', 
    },

    {
        id: 4,
        name: 'Louis Vuitton',
        description: 'Французский дом моды, специализирующийся на производстве чемоданов и сумок, модной одежды, парфюмерии и аксессуаров класса «люкс» под одноимённой торговой маркой.',
        luxury_level: 'premium', 
    }
]

function BrandsList () {
    
    const [searchInput, setSearchInput] = useState('');
    const [currentBrand, setCurrentBrand] = useState('all')

    let filteredBrands = brands.filter(el => (el.name.toLowerCase().includes(searchInput.toLowerCase()) || searchInput === '') && (el.luxury_level === currentBrand || currentBrand === 'all'))

    return(
        <div className='brands_list__position'>
            <div className='filter_panel'>
                <FilterPanel setSearchInput={setSearchInput} searchInput={searchInput} setCurrentBrand={setCurrentBrand}/>
            </div>
            <ul className='brands_list'>
                {
                    filteredBrands.map(el => (
                        <li key={el.id} className='brands_item'>
                            <BrandsItem el={el}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default BrandsList