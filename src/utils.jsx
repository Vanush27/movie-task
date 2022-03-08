
export const sortArrayByDate = (array) => {
    return array.sort(function (a, b) {
        return (b.Date).localeCompare(a.Date);
    })
}

