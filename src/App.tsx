import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import DataFetcher from './components/DataFetcher/DataFetcher'
import SearchBar from './components/SearchBar/SearchBar'
import Counter from './components/Counter/Counter'
import About from './components/About/About'
import ThankYou from './components/ThankYou/ThankYou'

const AppContainer = styled.div`
    background-color: #f8f9fa;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Main = styled.main`
    padding: 20px;
    max-width: 800px;
    width: 100%;
`

const App: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = (query: string) => {
        setSearchQuery(query)
    }

    return (
        <AppContainer>
            <Header />
            <Main>
                <About />
                <SearchBar onSearch={handleSearch} />
                <DataFetcher searchQuery={searchQuery} />
                <Counter />
                <ThankYou />
            </Main>
            <Footer />
        </AppContainer>
    )
}

export default App
