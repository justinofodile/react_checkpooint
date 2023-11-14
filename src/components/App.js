import React from 'react'
import TextControlsExample from './form/Form'
import CardComponent from './card/CardComponent'
import ContainerOutsideExample from './navbar/NavBar'
import Heading from './heading/Heading'
import ImageAndTextExample from './footer/Footer'
// import CollapsibleExample from './navbar/NavBar'
// import Navbar from './navbar/NavBar'

const App = () => {
    return (
        <React.Fragment>
            <div className='App'>
                <ContainerOutsideExample />
                <Heading />
                <CardComponent />
                <TextControlsExample />
                <ImageAndTextExample />
            </div>
        </React.Fragment>
    )
}

export default App


