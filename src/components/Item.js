import React, { Component } from "react"
import PropTypes from "prop-types";


export class Item extends Component {
    //Below, this is for showing and hiding the to do tasks based on whether the completed value in the object is true or false. 
    // completedStyle = () => {
    //     if (this.props.item.completed) {
    //         return {
    //             //here, say that it needs to be deleted but kept in local storage, I think. Needs to not display.
    //         }
    //     }
    //         else {
    //             return {
    //                 //here, need to say that it should be displayed.
    //             }
    //         }
    //     }
    // }
//putting style inside of a function, because you want the style to change depending on if the item is completed or not. 
    getStyle = () => {
        if (this.props.item.completed) {
            return {
                textDecoration: "line-through"
            }
            } else {
                return {
                    textDecoration: "none"
                }
            }

        }
    //this function takes in an event parameter (e)
     markComplete(e) {
         console.log(this.props)

     }
    
    render() {
        return (
            //double curly braces are for inline styling
            <div style={this.getStyle()}>
                <p> 
                {/*the " " after the input adds a space between the box and the first word.*/}
                <input type="checkbox" onChange={this.props.markComplete} name="" id=""/> {" "}
                {this.props.item.title} </p>
            </div>
        )
    }
}

//Prop Types. Here, it's .object becasue each item is a single object.
Item.propTypes = {
    item: PropTypes.object.isRequired
}

export default Item
