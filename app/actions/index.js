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
	let a = !data;
	return {
		type: 'AJAXFAILED',
		a
		// data
	}
}


/*   holiday begin   */
export const xxx = (data) => {
	return {
		type: 'printHello',
		data
	}
}
export const yyy = (data) => {
	return {
		type: 'YYY',
		data
	}
}
/*   holiday end   */
