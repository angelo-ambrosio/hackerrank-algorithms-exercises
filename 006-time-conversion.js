function timeConversion(s) {
    // Write your code here

    let amTimeConverting = Number(s[0] + s[1]) + 12
    let timeConverted = "";

    if(s.slice(0, 2) == "12" && s.includes('AM')){
        timeConverted = `00${s.slice(2,8)}`
    } else if(s.slice(0, 2) == "12" && s.includes('PM')){
        timeConverted = s.slice(0,8)
    } else if(s.includes('PM')){
        timeConverted = `${amTimeConverting}${s.slice(2, 8)}`
    } else if (s.includes('AM')){
        timeConverted = s.slice(0, 8)
    }

    return timeConverted
}

timeConversion("12:45:54PM")
