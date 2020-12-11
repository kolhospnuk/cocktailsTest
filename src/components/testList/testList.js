
import React, {Component} from "react";
import TestListItem from "../testListItem/testListItem";
import CocktailService from "../../service/service";

export default class TestList extends Component {

    state = {
        cocktailName: null,
        mainIngredient: null,
        choice1: null,
        choice2: null,
        choice3: null
    }

    componentDidMount() {
        this.nextTest();
    }

    nextTest = () => {
        const service = new CocktailService();
        service.getCocktailInfo('random.php')
            .then(res => {
                this.setState({
                    cocktailName: res.drinks[0].strDrink,
                    mainIngredient: res.drinks[0].strIngredient1
                })
            })

        service.getCocktailInfo('random.php')
            .then(res => {
                this.setState( {
                    choice1: res.drinks[0].strIngredient1
                })
            })

        service.getCocktailInfo('random.php')
            .then(res => {
                this.setState( {
                    choice2: res.drinks[0].strIngredient1
                })
            })

        service.getCocktailInfo('random.php')
            .then(res => {
                this.setState( {
                    choice3: res.drinks[0].strIngredient1
                })
            })
    }

    render() {
        const {cocktailName, mainIngredient} = this.state;

        return (
            <div className="question">
                <h2>{cocktailName}</h2>
                <ul className="question-list">
                    <li className="question-answer-item">
                        {mainIngredient}
                    </li>
                    <li className="question-answer-item">
                        {this.state.choice1}
                    </li>
                    <li className="question-answer-item">
                        {this.state.choice2}
                    </li>
                    <li className="question-answer-item">
                        {this.state.choice3}
                    </li>
                </ul>
                <button type="submit"
                        className="question-btn"
                        onClick={this.nextTest}>
                    Next cocktail
                </button>
            </div>
        )
    }
}




//
// state = {
//     questionNumber: 10,
//     cocktailName: null,
//     mainIngredient: null
// }
//
// componentDidMount() {
//     this.service();
// }
//
// service() {
//     const service = new CocktailService();
//     service.getCocktailInfo('lookup.php?i=11007')
//         .then(res => {
//             this.setState({
//                 cocktailName: res.drinks[0].strDrink,
//                 mainIngredient: res.drinks[0].strIngredient1
//             })
//         })
// }
//
// render() {
//     const {cocktailName, mainIngredient} = this.state;
//
//     return (
//         <div className="question">
//             <h2>{cocktailName}</h2>
//             <ul className="question-list">
//                 <TestListItem mainIngredient={mainIngredient}/>
//             </ul>
//             {/*<button type="submit"*/}
//             {/*        className="question-btn"*/}
//             {/*        onClick={}>*/}
//             {/*</button>*/}
//         </div>
//     )
// }