import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 353,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddintLeft: 20,
    }
})

//Flatlist is a react native that takes a prop call data, and inside data we can pass props.people.
// To maps it to people, then renders the items, and this will show as many items.
// Shows all the people and all items for the people.
class PeopleList extends Component {
    render() {
        return (
            <View styles.container>
                <FlatList
                    data={this.props.people}
                    renderItem={({item}) => <PeopleItem people={item}/>}
                    />
            </View>
        )
    }
}
const mapStateToProps = state => {
    return { people: state.people }
}

export default connect(mapStateToProps)(PeopleList);

//This above function uses connect to mapStateToProps and running the function to People List