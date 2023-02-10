export const MOCKED_DATA = {
    user: {
        id: 18,
        userInfos: {
            firstName: "Cecilia*",
            lastName: "Ratorez",
            age: 34
        },
        score: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120
        }
    },
    sessions: [
        {
            day: 1,
            sessionLength: 30,
            x: "L"
        },
        {
            day: 2,
            sessionLength: 40,
            x: "M"
        },
        {
            day: 3,
            sessionLength: 50,
            x: "M"
        },
        {
            day: 4,
            sessionLength: 30,
            x: "J"
        },
        {
            day: 5,
            sessionLength: 30,
            x: "V"
        },
        {
            day: 6,
            sessionLength: 50,
            x: "S"
        },
        {
            day: 7,
            sessionLength: 50,
            x: "D"
        }
    ],
    performance: [
        {
            value: 200,
            kind: 1,
            subject: "Cardio"
        },
        {
            value: 240,
            kind: 2,
            subject: "Energy"
        },
        {
            value: 80,
            kind: 3,
            subject: "Endurance"
        },
        {
            value: 80,
            kind: 4,
            subject: "Strength"
        },
        {
            value: 220,
            kind: 5,
            subject: "Speed"
        },
        {
            value: 110,
            kind: 6,
            subject: "Intensity"
        }
    ],
    activity: {
        userId: 18,
        sessions: [
            {
                day: "2020-07-01",
                kilogram: 70,
                calories: 240,
                x: "1"
            },
            {
                day: "2020-07-02",
                kilogram: 69,
                calories: 220,
                x: "2"
            },
            {
                day: "2020-07-03",
                kilogram: 70,
                calories: 280,
                x: "3"
            },
            {
                day: "2020-07-04",
                kilogram: 70,
                calories: 500,
                x: "4"
            },
            {
                day: "2020-07-05",
                kilogram: 69,
                calories: 160,
                x: "5"
            },
            {
                day: "2020-07-06",
                kilogram: 69,
                calories: 162,
                x: "6"
            },
            {
                day: "2020-07-07",
                kilogram: 69,
                calories: 390,
                x: "7"
            }
        ],
        legend: {
            kilogram: "Poids (kg)",
            calories: "Calories brûlées (kCal)"
        },
        title: "Activité quotidienne"
    }
}

// module.exports = {
//     MOCKED_DATA
// }
