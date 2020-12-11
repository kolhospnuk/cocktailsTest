import React, {Component} from "react";
import CocktailService from "../../service/service";

export default class TestListItem extends Component {

    state = {
        choice1: null,
        choice2: null,
        choice3: null,
    }

    componentDidMount() {
        this.service();
    }

    // service() {
    //     const service = new CocktailService();
    //
    //     service.getCocktailInfo('random.php')
    //         .then(res => {
    //             this.setState( {
    //                 choice1: res.drinks[0].strIngredient1
    //             })
    //         })
    //
    //     service.getCocktailInfo('random.php')
    //         .then(res => {
    //             this.setState( {
    //                 choice2: res.drinks[0].strIngredient1
    //             })
    //         })
    //
    //     service.getCocktailInfo('random.php')
    //         .then(res => {
    //             this.setState( {
    //                 choice3: res.drinks[0].strIngredient1
    //             })
    //         })
    // }


    render() {


        return (
            <>
                <li className="question-answer-item">
                    {this.props.mainIngredient}
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
            </>
        )
    }
}


// componentDidUpdate(prevState) {
//     if (this.state.v < 4) {
//         if (this.state.choice1 !== prevState.choice1) {
//             this.updateQuestion('1');
//         }
//         if (this.state.choice2 !== prevState.choice2) {
//             this.updateQuestion('2');
//         }
//         if (this.state.choice3 !== prevState.choice3) {
//             this.updateQuestion('3');
//         }
//     }
// }
//
// updateQuestion(num) {
//     this.setState((state) => {
//         return {
//             v: this.state.v + 1
//         }
//     })
//     this.service(num);
// }