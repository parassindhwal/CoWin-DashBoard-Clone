const formatTimeLable = (time) => {
    return time.split('-')[1];
}

const selectMonth = (month) => {
    switch(month) {
      case '01':
        return 'Jan';
      case '02':
        return 'Feb';
      case '03':
        return 'Mar';
      case '04':
        return 'Apr';
      case '05':
        return 'May';
      case '06':
        return 'Jun';
      case '07':
        return 'Jul';
      case '08':
        return 'Aug';
      case '09':
        return 'Sep';
      case '10':
        return 'Oct';
      case '11':
        return 'Nov';
      case '12':
        return 'Dec';      
    }
  }
  const formatDate = (date) => {
    var allDate = date.split('-');
    return `${allDate[2]} ${selectMonth(allDate[1])}`
  }

export const vaccinationByTime = (lineData) => {
    const label = [];
    const total = [], dose_one = [], dose_two = [];
    lineData.forEach(set => {
        label.push(formatTimeLable(set.label));
        total.push(set.count);
        dose_one.push(set.dose_one);
        dose_two.push(set.dose_two);
    });
    const state = {
        labels: label,
        datasets: [
          {
            label: 'Total Doses',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(30, 233, 251, 0.2)',
            borderColor: 'rgba(30, 233, 251, 1)',
            borderWidth: 2,
            data: total,
            order: 1
          },
          // rgba(251, 167, 20, 1)
          {
            label: 'Dose Two',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgb(255, 246, 231)',
            borderColor: 'rgba(251, 167, 20, 1)',
            borderWidth: 2,
            data: dose_two,
            order: 3
          },
          {
            label: 'Dose One',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgb(216, 242, 253, 0.1)',
            borderColor: 'rgba(90, 141, 238, 1)',
            borderWidth: 2,
            data: dose_one,
            order: 2
          }
        ]
      }
    return state
}

export const vaccineLast30 = (lineData) => {
    const label = [];
    const total = [], dose_one = [], dose_two = [];
    lineData.forEach(set => {
        label.push(formatDate(set.vaccine_date));
        total.push(set.total);
        dose_one.push(set.dose_1);
        dose_two.push(set.dose_2);
    });
    const state = {
        labels: label,
        datasets: [
          {
            label: 'Total Doses',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(30, 233, 251, 0.2)',
            borderColor: 'rgba(30, 233, 251, 1)',
            borderWidth: 2,
            data: total,
            order: 3
          },
          {
            label: 'Dose One',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(90, 141, 238, 0.2)',
            borderColor: 'rgba(90, 141, 238, 1)',
            borderWidth: 2,
            data: dose_one,
            order: 2
          },
          {
            label: 'Dose Two',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(251, 167, 20, 0.5)',
            borderColor: 'rgba(251, 167, 20, 1)',
            borderWidth: 2,
            data: dose_two,
            order: 1
          }
        ]
      }
    return state
}

export const weekly = (lineData) => {
    const label = [];
    const total = [], dose_one = [], dose_two = [];
    lineData.forEach(set => {
        label.push(set.label);
        total.push(set.total);
        dose_one.push(set.dose1);
        dose_two.push(set.dose2);
    });
    const state = {
        labels: label,
        datasets: [
          {
            label: 'Total Doses',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(30, 233, 251, 0.2)',
            borderColor: 'rgba(30, 233, 251, 1)',
            borderWidth: 2,
            data: total,
            order: 3
          },
          {
            label: 'Dose One',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(90, 141, 238, 0.2)',
            borderColor: 'rgba(90, 141, 238, 1)',
            borderWidth: 2,
            data: dose_one,
            order: 2
          },
          {
            label: 'Dose Two',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(251, 167, 20, 0.5)',
            borderColor: 'rgba(251, 167, 20, 1)',
            borderWidth: 2,
            data: dose_two,
            order: 1
          }
        ]
      }
    return state
}

export const vaccineByAgeToday = (lineData) => {
    const label = [];
    const total = [], vac_18_45 = [], vac_45_60 = [], vac_60_above = [];
    lineData.forEach(set => {
        label.push(formatTimeLable(set.label));
        total.push(set.total);
        vac_18_45.push(set.vac_18_45);
        vac_45_60.push(set.vac_45_60);
        vac_60_above.push(set.vac_60_above)
    });
    const state = {
        labels: label,
        datasets: [
          {
            label: 'Total Doses',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(30, 233, 251, 0.2)',
            borderColor: 'rgba(30, 233, 251, 1)',
            borderWidth: 2,
            data: total,
            order: 4
          },
          {
            label: '18-44',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(90, 141, 238, 0.2)',
            borderColor: 'rgba(90, 141, 238, 1)',
            borderWidth: 2,
            data: vac_18_45,
            order: 3
          },
          {
            label: '45-60',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(251, 167, 20, 0.5)',
            borderColor: 'rgba(251, 167, 20, 1)',
            borderWidth: 2,
            data: vac_45_60,
            order: 2
          },
          {
            label: 'Above 60',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(251, 167, 20, 0.5)',
            borderColor: 'rgba(251, 167, 20, 1)',
            borderWidth: 2,
            data: vac_60_above,
            order: 1
          }
        ]
      }
    return state
}

export const vaccineByAgeLast30 = (lineData) => {
    console.log(lineData);
    const label = [];
    const total = [], vac_18_45 = [], vac_45_60 = [], vac_60_above = [];
    lineData.forEach(set => {
        label.push(formatDate(set.vaccine_date));
        total.push(set.total);
        vac_18_45.push(set.vac_18_45);
        vac_45_60.push(set.vac_45_60);
        vac_60_above.push(set.vac_60_above)
    });
    const state = {
        labels: label,
        datasets: [
          {
            label: 'Total Doses',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(30, 233, 251, 0.2)',
            borderColor: 'rgba(30, 233, 251, 1)',
            borderWidth: 2,
            data: total,
            order: 4
          },
          {
            label: '18-44',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(90, 141, 238, 0.2)',
            borderColor: 'rgba(90, 141, 238, 1)',
            borderWidth: 2,
            data: vac_18_45,
            order: 3
          },
          {
            label: '45-60',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(251, 167, 20, 0.5)',
            borderColor: 'rgba(251, 167, 20, 1)',
            borderWidth: 2,
            data: vac_45_60,
            order: 2
          },
          {
            label: 'Above 60',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(251, 167, 20, 0.5)',
            borderColor: 'rgba(251, 167, 20, 1)',
            borderWidth: 2,
            data: vac_60_above,
            order: 1
          }
        ]
      }
    return state
}

export const vaccineByAgeAll = (lineData) => {
    console.log(lineData);
    const label = [];
    const total = [], vac_18_45 = [], vac_45_60 = [], vac_60_above = [];
    lineData.forEach(set => {
        label.push(set.label);
        total.push(set.total);
        vac_18_45.push(set.vac_18_45);
        vac_45_60.push(set.vac_45_60);
        vac_60_above.push(set.vac_60_above)
    });
    const state = {
        labels: label,
        datasets: [
          {
            label: 'Total Doses',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(30, 233, 251, 0.2)',
            borderColor: 'rgba(30, 233, 251, 1)',
            borderWidth: 2,
            data: total,
            order: 4
          },
          {
            label: '18-44',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(90, 141, 238, 0.2)',
            borderColor: 'rgba(90, 141, 238, 1)',
            borderWidth: 2,
            data: vac_18_45,
            order: 3
          },
          {
            label: '45-60',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(251, 167, 20, 0.5)',
            borderColor: 'rgba(251, 167, 20, 1)',
            borderWidth: 2,
            data: vac_45_60,
            order: 2
          },
          {
            label: 'Above 60',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgba(251, 167, 20, 0.5)',
            borderColor: 'rgba(251, 167, 20, 1)',
            borderWidth: 2,
            data: vac_60_above,
            order: 1
          }
        ]
      }
    return state
}