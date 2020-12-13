import React, {Component} from "react";
import CocktailService from "../../service/service";
import "./testList.css";

export default class TestList extends Component {

    state = {
        ingredientsArr: [],
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
                this.setState({
                    choice1: res.drinks[0].strIngredient1
                })
            })

        service.getCocktailInfo('random.php')
            .then(res => {
                this.setState({
                    choice2: res.drinks[0].strIngredient1
                })
            })

        service.getCocktailInfo('random.php')
            .then(res => {
                this.setState({
                    choice3: res.drinks[0].strIngredient1
                })
            })
    }

    getAndChange = () => {
        this.nextTest();
    }

    render() {
        const {
            cocktailName, mainIngredient, choice1, choice2,
            choice3
        } = this.state;

        return (
            <div className="question">
                <p>{cocktailName}</p>
                <form className="question-form">
                    <div className="question-form-input">
                        <label>{mainIngredient}
                            <input type="radio" name="answer"/>
                        </label>
                        <label>{choice1}
                            <input type="radio" name="answer"/>
                        </label>
                        <label>{choice2}
                            <input type="radio" name="answer"/>
                        </label>
                        <label>{choice3}
                            <input type="radio" name="answer"/>
                        </label><br/>
                    </div>
                    <button type="submit"
                            onSubmit={this.getAndChange}>
                        Next cocktail
                    </button>
                </form>
            </div>
        )
    }
}


// createArr() {
//     const service = new CocktailService();
//     let arr = [];
//     service.getCocktailInfo('random.php')
//         .then(res => {
//             arr = [...this.state.ingredientsArr, res.drinks[0].strIngredient1];
//             this.setState( {
//                 ingredientsArr: arr
//             })
//         })
// }


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