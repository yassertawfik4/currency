fetch('https://api.currencyfreaks.com/latest?apikey=23e11af1755349f58f33d4837eed637a').then((result)=>{
    console.log(result)
    let data=result.json()
    console.log(data)
    return data
}).then((currancy)=>{
    let amount=document.querySelector('.amount')
    let egp=document.querySelector('.egp span')
    let sar=document.querySelector('.sar span')
    amount.addEventListener('keyup',()=>{
        egp.innerHTML=Math.round(amount.value * currancy.rates["EGP"])
        sar.innerHTML=Math.round(amount.value * currancy.rates["SAR"])
    })
    
    console.log(currancy.rates["EGP"])
    console.log(currancy.rates["SAR"])
})