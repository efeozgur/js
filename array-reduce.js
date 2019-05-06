const arr = [12, 3, 43, 4, 435, 56, 6];
const brr = ['kemal', 'hasan', 'hüseyin', 'nuran']
const total = brr.reduce((gelen, current) => `${gelen} ${current}`, "necmiye");


console.log(total);