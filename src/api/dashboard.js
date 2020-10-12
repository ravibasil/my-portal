import moment from 'moment';

export const getMonthlyInterview = (month, year) => {
    const data = [
        {
            "weekname": "week 1",
            "noofinterviews": "4",
            "month": "10",
            "year": "2020"
        },
        {
            "weekname": "week 2",
            "noofinterviews": "4",
            "month": "10",
            "year": "2020"
        },
        {
            "weekname": "week 3",
            "noofinterviews": "4",
            "month": "10",
            "year": "2020"
        },
        {
            "weekname": "week 1",
            "noofinterviews": "5",
            "month": "11",
            "year": "2020"
        },
        {
            "weekname": "week 2",
            "noofinterviews": "6",
            "month": "11",
            "year": "2020"
        },
        {
            "weekname": "week 1",
            "noofinterviews": "6",
            "month": "08",
            "year": "2019"
        },
        {
            "weekname": "week 2",
            "noofinterviews": "6",
            "month": "08",
            "year": "2019"
        },
        {
            "weekname": "week 3",
            "noofinterviews": "6",
            "month": "08",
            "year": "2019"
        }
    ]

    return data.filter(dataItem => {
        if (dataItem.month == month && dataItem.year == year) {
            return true;
        }
        else {
            return false;
        }
    });
}



export const getDailyInterview = (day, month, year) => {
    const data = [
        {
            "timename": "7 AM",
            "noofinterviews": "10"
        },
        {
            "timename": "9 AM",
            "noofinterviews": "5"
        },
        {
            "timename": "10 AM",
            "noofinterviews": "10"
        },
        {
            "timename": "12 PM",
            "noofinterviews": "6"
        },
        {
            "timename": "9 PM",
            "noofinterviews": "9"
        },
        {
            "timename": "9:30 AM",
            "noofinterviews": "3"
        }
    ]

    const sortedArray = data.sort((a, b) => moment(a.timename, 'hh:mm A').format('HH') - moment(b.timename, 'hh:mm A').format('HH'))
    console.log(sortedArray)

    return sortedArray
}