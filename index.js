const prediction = (_val, _predOnly) => {
    // define money
    const fragment = [
        100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50
    ]
    let pred = []
    pred.push(_val)

    for (let idx = 0; idx < fragment.length; idx++) {
        const mod = _val % fragment[idx] 
        if (mod < _val) {
            const rslt = (Math.ceil(_val / fragment[idx])) * fragment[idx]
            if (!_predOnly) pred.push(parseInt(rslt) + parseInt(mod))
            pred.push(rslt)
        } else {
            pred.push(fragment[idx])
        }
    }

    // filtrate data
    const rslt = pred.filter((item, index) => {
        return pred.indexOf(item) === index
    })

    return rslt
}

// export default prediction

const bayar = 21000
const rslt = prediction(bayar, true)
console.log("Nominal Bayar : " + bayar)
console.log('Prediksi Bayar : ')
console.log(rslt)