// import React, { Component } from "react";
// import Item from "./Item";
// import PropTypes from "prop-types";

// class List extends React.Component {
//     //need to have constructor and super here 
//     constructor(props) {
//     super(props)


//     // markComplete = () =>
//     render() {
//         console.log(this.props.listdata)
//         {/*looping through the list array and outputting jsx using ma. Then saying 
//         for each item that is mapped through list it as a todo item*/}
//         return this.props.listdata.map((item) => (
//             /* item is being passed into Item as a prop. We're choosing the id for the key because it's simple and useful.*/
//             <Item key={item.id} item={item} markComplete={this.markComplete} />
//         ));
//     }
// }

// //Prop Types. Here, it's .array because the list is an array of many objects (items)
// List.propTypes = {
//     list: PropTypes.array.isRequired
// }
// }

// export default List