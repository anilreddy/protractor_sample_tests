// For Current Date

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

// For String Interpolation

String.prototype.splice = function(idx, rem, s) {
    return (this.slice(0, idx) + s + this.slice(idx + Math.abs(rem)));
};

var text = 'add'

var result = "//input[@value=' ']".splice(16, 0, text);

alert(result);

// Option Selection

function selectOption(selector, item){
    var selectList, desiredOption;

    selectList = this.findElement(selector);
    selectList.click();

    selectList.findElements(protractor.By.tagName('option'))
        .then(function findMatchingOption(options){
            options.some(function(option){
                option.getText().then(function doesOptionMatch(text){
                    if (item === text){
                        desiredOption = option;
                        return true;
                    }
                });
            });
        })
        .then(function clickOption(){
            if (desiredOption){
                desiredOption.click();
            }
        });
}

// Usage

var browser = protractor.getInstance();
browser.selectOption = selectOption.bind(browser);
browser.selectOption(protractor.By.id('my-dropdown'), 'My Value');
