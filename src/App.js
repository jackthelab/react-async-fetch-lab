import { render } from 'enzyme'
import React from 'react'

export default class App extends React.Component {

    constructor() {
        super()

        this.state = {
            peopleInSpace: []
        }
    }

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map(person => {
                    return <h2>{person.name}</h2>
                })}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    peopleInSpace: data.people
                })
            })
    }
}