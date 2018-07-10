import React,{Component} from 'react';
import { Header } from './components/common';
import {View} from 'react-native';
class App extends Component{
	render(){
		return(
			<View style={{flex:1}}>
	      		<Header headerText={'Device Tracker'}/>
	      		
	      		</View>
		);
	}
};
export default App;