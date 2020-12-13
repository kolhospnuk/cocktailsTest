import React, {Component} from "react";
import CocktailService from "../../service/service";

export default class TestListItem extends Component {

    render() {

        return (
            <>
                <li className="question-answer-item">
                    {this.props.mainIngredient}
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