export  function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    let date = yyyy + '-' + mm + '-' + dd
    return date;
}
export  function getTime() {
    var today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
}

export  function getMonth() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date();
    let month = months[now.getMonth()]
    return month;
}

export function daysInMonth(month, year) {
    var no = new Date(year, month, 0).getDate().toString();
    return no;
}

export function getYear() {
    var d = new Date();
    var n = d.getFullYear();
    return n;
}

export function getMonthCount() {
    var d = new Date();
    var n = d.getMonth();
    return n + 1;
  }