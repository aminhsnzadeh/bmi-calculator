document.querySelector('.submit').addEventListener('click', function() {
    let _height = document.getElementById('height').value
    let _weight = document.getElementById('weight').value
    let _result = document.querySelector('.main-result')
    let _sugest = document.querySelector('.sugest')
    if(_height === null || _height === '' || _weight === null || _weight === '' ) {
        alert('please fill all fileds')
    } else {
        let _bmi = ((_weight / ((_height * _height)) * 10000)).toFixed(2)
    // console.log(_bmi)
    document.querySelector('.number-result').innerHTML = _bmi
    let temp = _bmi * 2.5
    if(_bmi < 18.4) {
        _result.innerHTML = '<span class="under-weight">Under Weight</span>'
        _sugest.innerHTML = `
            <li><span class="bi-dot"></span>You are under weight that means you need to gain more weight.</li>
            <li><span class="bi-dot"></span>Eat five to six smaller meals during the day rather than two or three large meals.</li>
            <li><span class="bi-dot"></span>Also looking for a doctor is a great way to control your problem.</li> 
        `
    }
    if(_bmi >= 18.5 && _bmi < 24.9) {
        _result.innerHTML = '<span class="normal-weight">Normal Weight</span>'
        _sugest.innerHTML = `
            <li><span class="bi-dot"></span>You are in normal weight. No need for everything. just have fun and don't change this range ;)</li>
        `
    }
    if(_bmi >= 25 && _bmi < 29.9) {
        _result.innerHTML = '<span class="over-weight">Over Weight</span>'
        _sugest.innerHTML = `
            <li><span class="bi-dot"></span>You gaind more weight than normal. Just a little.</li>
            <li><span class="bi-dot"></span>A lower-calorie diet such as 1,200 to 1,500 calories a day for women and 1,500 to 1,800 calories a day for men is great for preventing over weighting</li>
            <li><span class="bi-dot"></span>Also you can exercise a sport in a week.</li> 
        `
    }
    if(_bmi >= 30 && _bmi < 34.9) {
        _result.innerHTML = '<span class="obese">Obese</span>'
        _sugest.innerHTML = `
            <li><span class="bi-dot"></span>You gained weight more than normal !</li>
            <li><span class="bi-dot"></span>Regular physical activity, a decrease in saturated fat intake, a decrease in sugar consumption, and an increase in fruit and vegetable</li>
            <li><span class="bi-dot"></span>More exercise and preventation need for obese range. You may be in dangers like blood presure, diabet or moving problems</li> 
        `
    }
    if(_bmi >= 35 && _bmi < 40) {
        _result.innerHTML = '<span class="extremly-obese">Extremly Obese</span>'
        _sugest.innerHTML = `
            <li><span class="bi-dot"></span>You are on extremly obese range that means you have weight more than most.</li>
            <li><span class="bi-dot"></span>For this range we suggest to see a health doctor</li>
        `
    }
    if(_bmi > 40) {
        _result.innerHTML = '<span class="extremly-obese">Extremly Obese</span>'
        _sugest.innerHTML = `
            <li><span class="bi-dot"></span>You are on extremly obese range that means you have weight more than most.</li>
            <li><span class="bi-dot"></span>For this range we suggest to see a health doctor.</li>
        `
        temp = 100
    }
    document.querySelector('.controller').style.left = temp + '%'
    }
})

