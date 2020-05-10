import React, { Component } from 'react'

// Import Component
import Header from 'parts/Header/'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'


// Import Data dari JSON
import landingPage from 'json/landingPage.json'

export default class LandingPage extends Component {

    // Constructor akan jalan pertama saat running class
    constructor(props) {  //ContructorMostpicked
        super(props)
        this.refMostPicked = React.createRef()
    }

    render(){
        return <>
        <Header {...this.props}>        </Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
        <Categories data={landingPage.categories} />
        </>
    }
}