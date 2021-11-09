const q = element => document.querySelector(element)
const qAll = elements => document.querySelectorAll(elements)

let bill
let tip
let numberOfPeople



/* Customize tip amount */
q('input[type="number"].custom').addEventListener('click', function(event) {
    qAll('input[type="radio"]').forEach(function(input) {
        if (input.checked === true) {
            input.checked = false
        }
    })
})

qAll('input[type="radio"]').forEach(inputRadio => inputRadio.addEventListener('click', function() {
    q('input[type="number"].custom').value = ''
}))




q('.calculateBtn').addEventListener('click', calculateTip)

function calculateTip(event) {

    event.preventDefault()

    let inputChecked = false

    qAll('input[type="radio"]').forEach(function(input) {
        if (input.checked) {
            inputChecked = true
        }
    })

    if ((q('input[name="bill"]').value == '') || (inputChecked === false && q('input[type="number"].custom').value == '') || (q('input[name="numberPeople"]').value == '')) {
        q('div.error').style.display = 'block'
    } else {
        bill = q('input[name="bill"').value
        numberOfPeople = q('input[name="numberPeople"]').value

        if (q('input[type="number"].custom').value == '') {
            qAll('input[type="radio"').forEach(function(inputRadio) {
                if (inputRadio.checked) {
                    tip = inputRadio.value.replace('%', '')
                }
            })
        } else {
            tip = q('input[type="number"].custom').value
        }

        let tipAmount = tip / 100 * bill / numberOfPeople

        q('div.tipAmount p').innerHTML = `$${tipAmount.toFixed(2).replace('.', ',')}`

        q('div.total p').innerHTML = `$${(bill / numberOfPeople +  tipAmount).toFixed(2).replace('.', ',')}`
    }

}

q('button.resetBtn').addEventListener('click', resetar)

function resetar() {
    bill = undefined
    tip = undefined
    numberOfPeople = undefined
    q('input[type="number"].custom').value = ''
    qAll('input[type="radio"]').forEach(function(input) {
        if (input.checked === true) {
            input.checked = false
        }
    })
    q('div.tipAmount p').innerHTML = '$0,00'
    q('div.total p').innerHTML = '$0,00'
    q('input[name="bill"]').value = ''
    q('input[name="numberPeople"]').value = ''
}