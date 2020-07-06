import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender:"",
            location: "",
            diet: {
                isVegan: false,
                isVeg: false,
                isNonVeg: false,
            },
        }
        this.handleEvents = this.handleEvents.bind(this)
    }

    handleEvents(event){
        const {name, value, checked, type} = event.target
        type === 'checkbox' ?
            this.setState(prevState => {
                return{
                    diet:{
                        ...prevState.diet,
                        [name]:checked
                    }
                }
            })
            :
            this.setState({[name]: value})
    }

    render() {
        return (
            <main>
                <form>
                    <input placeholder='First Name' name = 'firstName' type='text' value = {this.state.firstName} onChange={this.handleEvents} /><br />
                    <input placeholder='Last Name' name = 'lastName' type='text' value = {this.state.lastName} onChange={this.handleEvents} /><br />
                    <input placeholder='Age' name = 'age' type='text' value = {this.state.age} onChange={this.handleEvents} /><br />

                    <br />
                    <label>
                        <input name="gender" value='male' checked={this.state.gender === 'male'} onChange={this.handleEvents} type="radio"/>Male
                        <input name="gender" value='female' checked={this.state.gender === 'female'}  onChange={this.handleEvents} type="radio"/>Female

                    </label>

                    <br />
                    <label>Destination
                        <select name="location" value={this.state.location} onChange={this.handleEvents}>
                            <option value="">---Please select an option----</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="London">London</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Tokyo">Tokyo</option>
                        </select>
                    </label>
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    <label>
                        <input name='isVeg' checked={this.state.diet.isVeg} onChange={this.handleEvents} type="checkbox"/>Vegetarian
                        <input name='isNonVeg' checked={this.state.diet.isNonVeg} onChange={this.handleEvents} type="checkbox"/>Non Vegetarian
                        <input name='isVegan' checked={this.state.diet.isVegan} onChange={this.handleEvents} type="checkbox"/>Vegan
                    </label>

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName + " " + this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions:
                    {this.state.diet.isVeg === true? "Veg": ""}
                    {this.state.diet.isVegan === true? "Vegan": ""}
                    {this.state.diet.isNonVeg === true? "Non Veg": ""}
                </p>
            </main>
        )
    }
}

export default App
