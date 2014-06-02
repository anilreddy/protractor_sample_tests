var currentDate = function() {
    var date = new Date();
    day = date.getDate();
    mon = date.getMonth() + 1;
    hrs = date.getHours();
    min = date.getMinutes();

    currDate = (mon + '/' + day + ' ' + hrs + ':' + min)
    return currDate;
};

currentDate();

alert(currDate);

String.prototype.splice = function(idx, rem, s) {
    return (this.slice(0, idx) + s + this.slice(idx + Math.abs(rem)));
};

var text = 'add'

var result = "//input[@value=' ']".splice(16, 0, text);

alert(result);
