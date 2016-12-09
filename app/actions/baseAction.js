export const loginState = (data) => {
	return {
		type: 'LOGINSTATE',
		data
	}
}
export const loadingTip = (data) => {
	return {
		type: 'LOADINGTIP',
		data
	}
}
export const ajaxFailed = (data) => {
	let date = !data;
	return {
		type: 'AJAXFAILED',
		date
	}
}