(() => {
    console.clear();
    let day1Start = new Date('2019/08/19 08:47'),
        day1End = new Date('2019/08/19 18:43'),
        day2Start = new Date('2019/08/20 09:11'),
        day2End = new Date('2019/08/20 17:29'),
        day3Start = new Date('2019/08/21 08:26'),
        day3End = new Date('2019/08/21 19:14'),
        day4Start = new Date('2019/08/22 09:37'),
        day4End = new Date('2019/08/22 17:50'),
        day5Start = new Date('2019/08/23 9:00'),
        day5End = new Date('2019/08/23 16:45');
    let weeklyChecking = [{
        start: day1Start,
        end: day1End
    }, {
        start: day2Start,
        end: day2End
    }, {
        start: day3Start,
        end: day3End
    }, {
        start: day4Start,
        end: day4End
    }, {
        start: day5Start,
        end: day5End
    }];
    let workTimeTotalMinutes = 0, workTimeHours = 0, workTimeMinutes = 0,
        dutyTimeTotalMinutes = 0, dutyTimeHours = 0, dutyTimeMinutes = 0,
        targetWorkTimeTotal = 40 * 60, workTimeNeeded = 0,
        targetDutyTimeTotal = 45 * 60, dutyTimeNeeded = 0, dutyTimeHoursNeeded = 0, dutyTimeMinutesNeeded = 0;
    for (let item of weeklyChecking) {
        let dailyTime = (item.end - item.start) / 1000 / 60;
        dutyTimeTotalMinutes += dailyTime;
        if (dailyTime) {
            workTimeTotalMinutes += dailyTime - 60;
        } else {
            workTimeTotalMinutes += dailyTime;
        }
    }

    dutyTimeMinutes = dutyTimeTotalMinutes % 60;
    dutyTimeHours = (dutyTimeTotalMinutes - dutyTimeMinutes) / 60;
    dutyTimeNeeded = targetDutyTimeTotal - dutyTimeTotalMinutes;
    dutyTimeMinutesNeeded = dutyTimeNeeded % 60;
    dutyTimeHoursNeeded = (dutyTimeNeeded - dutyTimeMinutesNeeded) / 60

    workTimeMinutes = workTimeTotalMinutes % 60;
    workTimeHours = (workTimeTotalMinutes - workTimeMinutes) / 60;
    workTimeNeeded = targetWorkTimeTotal - workTimeTotalMinutes;
    console.log('worktime ' + workTimeHours + 'h ' + workTimeMinutes + 'm, ', workTimeNeeded + 'm needed');
    console.log('dutytime ' + dutyTimeHours + 'h ' + dutyTimeMinutes + 'm, ', dutyTimeHoursNeeded + 'h ' + dutyTimeMinutesNeeded + 'm needed');
})()