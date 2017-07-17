// 1.基础第三方框架引入
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Geolocation from 'Geolocation';
// 2.第三方组件引入
import { Actions } from 'react-native-router-flux';
import Toast, { DURATION } from 'react-native-easy-toast';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import Slider from 'react-native-slider';
import DatePicker from 'react-native-datepicker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
// 3.项目组件引入
import { Header, TestDatePicker } from '../components/';
// 4.项目Action引入 || 配置文件引入 || 公用方法引入
import * as PersonalAction from '../actions/personalAction';
import DYcommon from '../common/dyCommon';

// 页面类
class Personal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false,
			isDisabled: false,
			swipeToClose: true,
			sliderValue: 0.3,
			date: '2016-05-14',
		}
	}
	openModal1(id) {
		this.refs.modal1.open();
	}
	openModal2(id) {
		this.refs.modal2.open();
	}
	openModal3(id) {
		this.refs.modal3.open();
	}
	openModal4(id) {
		this.refs.modal4.open();
	}
	openModal5(id) {
		this.setState({ isOpen: true });
	}
	closeModal5(id) {
		this.setState({ isOpen: false });
	}
	openModal6(id) {
		this.refs.modal6.open();
	}
	toggleDisable() {
		this.setState({ isDisabled: !this.state.isDisabled });
	}
	toggleSwipeToClose() {
		this.setState({ swipeToClose: !this.state.swipeToClose });
	}
	onClose() {
		console.log('Modal just closed');
	}
	onOpen() {
		console.log('Modal just openned');
	}
	onClosingState(state) {
		console.log('the open/close of the swipeToClose just changed');
	}
	renderList() {
		var list = [];
		for (var i = 0; i < 50; i++) {
			list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
		}
		return list;
	}
	personalTest(data) {
		this.props.personalTest(data)
	}
	vibration(){
        Geolocation.getCurrentPosition((data)=>{
            alert(JSON.stringify(data));
        },()=>{
            alert('获取失败')
        })
    }
	render() {
		let BContent = <Button onPress={this.closeModal5.bind(this)} style={[styles.btn, styles.btnModal]}>X</Button>;
		return (
			<View style={{ flex: 1 }}>
				<Header
					leftType="qrcode"
					rightType="notice"
					middleValue="请输入搜索内容"
					middleCallback={Actions.search}
					transparent={this.state.headerTransparent}
					/>
				<View style={{ marginTop: 60 }}>
					<TestDatePicker
						style={{ width: 200 }}
						date={this.state.date}
						mode="date"
						placeholder="select date"
						format="YYYY-MM-DD"
						confirmBtnText="确定"
						cancelBtnText="取消"
						showIcon={true}
						customStyles={{
							dateIcon: {
								position: 'absolute',
								left: 0,
								top: 4,
								marginLeft: 0
							},
							dateInput: {
								marginLeft: 36
							}
						}}
						onDateChange={(data) => { this.setState({ date: data }) } }
						/>


					<Button onPress={this.vibration} style={styles.btn}>获取位置</Button>

					<Button onPress={() => {
						this.refs.toast.show('hello world tips demo!', DURATION.LENGTH_SHORT);
					} } style={styles.btn}>触发tips</Button>

					<Button onPress={this.openModal1.bind(this)} style={styles.btn}>基本modal + 登录input</Button>
					<Button onPress={this.openModal2.bind(this)} style={styles.btn}>定位到顶部</Button>
					<Button onPress={this.openModal3.bind(this)} style={styles.btn}>定位到中间 + 遮罩 + disable</Button>
					<Button onPress={this.openModal4.bind(this)} style={styles.btn}>定位到底部 + 遮罩 + slider</Button>
					<Button onPress={this.openModal5.bind(this)} style={styles.btn}>遮罩 + 居中内容</Button>
					<Button onPress={this.openModal6.bind(this)} style={styles.btn}>定位到底部 + ScrollView</Button>


					<TouchableOpacity onPress={() => { this.personalTest('传入一个数据流到personal') } }>
						<Text>Personal页面 Test reducer</Text>
					</TouchableOpacity>
					<Text>{this.props.test}</Text>

					<Toast
						ref="toast"
						style={{ backgroundColor: '#000' }}
						fadeInDuration={750}
						fadeOutDuration={1000}
						position="center"
						opacity={0.8}
						textStyle={{ color: '#fff' }}
						/>

					<Modal style={[styles.modal, styles.modal1]} ref={"modal1"} swipeToClose={this.state.swipeToClose} onClosed={this.onClose} onOpened={this.onOpen} onClosingState={this.onClosingState}>
						<ScrollView style={[{flex:1,width:DYcommon.window.width, padding: 16 }, { backgroundColor: '#8781bd' }]}>
							<Text style={{
								paddingBottom: 16,
								textAlign: 'center',
								color: '#000',
								fontSize: 20,
								fontWeight: 'bold',
								opacity: 0.8,
							}}>登陆test + 登录input</Text>
							<Sae
								label={'账号'}
								style={[{marginTop: 4}]}
								iconClass={FontAwesomeIcon}
								iconName={'pencil'}
								iconColor={'white'}
								labelStyle={{color:'#000'}}
								/>
							<Sae
								style={[{marginTop: 4}]}
								label={'密码'}
								iconClass={FontAwesomeIcon}
								labelStyle={{color:'#000'}}
								/>
						</ScrollView>
						<Button onPress={this.toggleSwipeToClose.bind(this)} style={styles.btn}>是否开启下滑关闭({this.state.swipeToClose ? "true" : "false"})</Button>
					</Modal>

					<Modal style={[styles.modal, styles.modal2]} backdrop={false} position={"top"} ref={"modal2"}>
						<Text style={[styles.text, { color: "white" }]}>Modal on top</Text>
					</Modal>

					<Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
						<Text style={styles.text}>Modal centered</Text>
						<Button onPress={this.toggleDisable.bind(this)} style={styles.btn}>Disable ({this.state.isDisabled ? "true" : "false"})</Button>
					</Modal>

					<Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal4"}>
						<Text style={styles.text}>Modal on bottom with backdrop</Text>
						<Slider style={{ width: 200 }} value={this.state.sliderValue} onValueChange={(value) => this.setState({ sliderValue: value })} />
					</Modal>

					<Modal isOpen={this.state.isOpen} onClosed={this.closeModal5.bind(this)} style={[styles.modal, styles.modal4]} position={"center"} backdropContent={BContent}>
						<Text style={styles.text}>Modal with backdrop content</Text>
					</Modal>

					<Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal6"} swipeArea={20}>
						<ScrollView>
							<View style={{ width: DYcommon.window.width, paddingLeft: 10 }}>
								{this.renderList()}
							</View>
						</ScrollView>
					</Modal>
				</View>
			</View>
		)
	}
}
let styles = StyleSheet.create({

	wrapper: {
		paddingTop: 50,
		flex: 1
	},

	modal: {
		justifyContent: 'center',
		alignItems: 'center'
	},

	modal2: {
		height: 230,
		backgroundColor: "#3B5998"
	},

	modal3: {
		height: 300,
		width: 300
	},

	modal4: {
		height: 300
	},

	btn: {
		margin: 10,
		backgroundColor: "#3B5998",
		color: "white",
		padding: 10
	},

	btnModal: {
		position: "absolute",
		top: 0,
		right: 0,
		width: 50,
		height: 50,
		backgroundColor: "transparent"
	},

	text: {
		color: "black",
		fontSize: 22
	}

});


function mapStateToProps(state) {
	let test = state.PersonalRD.get('test');
	return {
		test: test
	};
}

function mapDispatchToProps(dispatch) {
	return {
		personalTest: bindActionCreators(PersonalAction.personalTest, dispatch),
	};
}


Personal = connect(mapStateToProps, mapDispatchToProps)(Personal)

export default Personal;