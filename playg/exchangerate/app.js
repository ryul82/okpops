const currency1El = document.getElementById('currency1')
const currency2El = document.getElementById('currency2')
const amount1El = document.getElementById('amount1')
const amount2El = document.getElementById('amount2')

const rateEl = document.getElementById('rate')
const swapEl = document.getElementById('swap')

// 환율정보를 읽고 DOM에 업데이트
function calulate() {
  // 선택한 목록 확인
  const currency1ElValue = currency1El.value;
  const currency2ElValue = currency2El.value;
  console.log(currency1ElValue, currency2ElValue)

  fetch(`https://v6.exchangerate-api.com/v6/102c6af387c4a6ba8017a7e2/latest/${currency1ElValue}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      let rate = data.conversion_rates[currency2ElValue]
      console.log(rate)
      amount2El.value = (amount1El.value * rate).toFixed(2); // 환율 계산

      rateEl.innerText = `1 ${currency1ElValue} = ${rate} ${currency2ElValue}`


    })
}

// 국가 목록 변경시
currency1El.addEventListener('change', calulate);
currency2El.addEventListener('change', calulate);

// 입력값 변경시
amount1El.addEventListener('input', calulate)
amount2El.addEventListener('input', calulate)

// 상하 전환
swapEl.addEventListener('click', () => {
  const val1 = currency1El.value;
  const val2 = currency2El.value;
  currency1El.value = val2;
  currency2El.value = val1;
  calulate();
})

calulate();