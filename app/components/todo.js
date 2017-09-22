/**
 * Created by ahsan.zaman on 08/09/2017.
 */
import React from 'react';
import TodoActions from '../actions/AppActions';


export default class Todo extends React.Component {

    render() {

        return (
            <li id={this.props.id} class={this.props.completed ? 'completed' : ''}>
                <div>
                    <div class="col-md-5 title">{this.props.text}</div>
                    <div class="col-md-3">
                        <input type="checkbox" class='form-control'
                               onClick={() => TodoActions.ChangeStatusTodo(this.props.id)}/>
                    </div>
                    <div class="col-md-4">
                        <a href="javascript:void(0)"
                           onClick={() => TodoActions.deleteTodo(this.props.id)}> <img
                            src='/assets/images/remove.png' alt=""/>
                        </a>
                    </div>
                    <div class="clearfix"></div>
                </div>


            </li>
        );
    }
}
