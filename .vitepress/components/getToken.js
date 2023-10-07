export default () => {
  const strCookie = document.cookie
  const arrCookie = strCookie.split('; ')
  for(let i = 0; i < arrCookie.length; i++) {
      var arr = arrCookie[i].split('=')
      if(arr[0] === 'token'){
        return arr[1]
      }
    }
    return ''
}