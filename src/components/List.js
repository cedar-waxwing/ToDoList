import React, { Component } from "react";
import Item from "./Item";
import PropTypes from "prop-types";

class List extends Component {
    // markComplete = () =>
    render() {
        console.log(this.props.list)
        {/*looping through the list array and outputting jsx using ma. Then saying 
        for each item that is mapped through list it as a todo item*/}
        return this.props.list.map((item) => (
            /* item is being passed into Item as a prop. We're choosing the id for the key because it's simple and useful.*/
            <Item key={item.id} item={item} markComplete={this.markComplete} />
        ));
    }
}

//Prop Types. Here, it's .array because the list is an array of many objects (items)
List.propTypes = {
    list: PropTypes.array.isRequired
}

export default List