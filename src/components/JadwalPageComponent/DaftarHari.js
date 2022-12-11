import dayjs from "dayjs";

const hariPerMinggu = (week, selectedMonth) => {
  let dataTanggal = [];
  const numberOfWeek = Math.ceil(week / 7);
  const curr = new Date();
  curr.setMonth(selectedMonth);

  if (numberOfWeek === 1) {
    curr.setDate(1);
  } else if (numberOfWeek === 2) {
    curr.setDate(8);
  } else if (numberOfWeek === 3) {
    curr.setDate(15);
  } else if (numberOfWeek === 4) {
    curr.setDate(22);
  } else if (numberOfWeek === 5) {
    curr.setDate(29);
  }

  const first = curr.getDate();
  for (let i = 0; i < 7; i++) {
    const next = new Date(curr.getTime());
    next.setDate(first + i);
    if (
      dayjs(`${curr.getFullYear()}-${curr.getMonth() + 1}`).daysInMonth() ===
        28 &&
      curr.getMonth() === 1
    ) {
      if (/* numberOfWeek === 5 && */ next.getDate() === 28) {
        if (next.getDay() === 0 || next.getDay() === 6) {
          console.log("sabtu/minggu cuk tgl 28" + i);
          break;
        } else {
          dataTanggal.push(next);
          break;
        }
      } else if (next.getDate() < 28) {
        if (next.getDay() === 0 || next.getDay() === 6) {
          console.log("sabtu/minggu cuk " + i);
        } else {
          dataTanggal.push(next);
        }
      } else if (numberOfWeek === 1 && next.getDate() === 1) {
        if (next.getDay() === 0 || next.getDay() === 6) {
          console.log("sabtu/minggu cuk tgl 1" + i);
          break;
        } else {
          dataTanggal.push(next);
          break;
        }
      }
    } else if (
      dayjs(`${curr.getFullYear()}-${curr.getMonth() + 1}`).daysInMonth() ===
        29 &&
      curr.getMonth() === 1
    ) {
      if (/* numberOfWeek === 5 && */ next.getDate() === 29) {
        if (next.getDay() === 0 || next.getDay() === 6) {
          console.log("sabtu/minggu cuk tgl 29" + i);
          break;
        } else {
          dataTanggal.push(next);
          break;
        }
      } else if (next.getDate() < 29) {
        if (next.getDay() === 0 || next.getDay() === 6) {
          console.log("sabtu/minggu cuk " + i);
        } else {
          dataTanggal.push(next);
        }
      } else if (numberOfWeek === 1 && next.getDate() === 1) {
        if (next.getDay() === 0 || next.getDay() === 6) {
          console.log("sabtu/minggu cuk tgl 1" + i);
          break;
        } else {
          dataTanggal.push(next);
          break;
        }
      }
    } else if (
      dayjs(`${curr.getFullYear()}-${curr.getMonth() + 1}`).daysInMonth() === 31
    ) {
      if (/* numberOfWeek === 5 && */ next.getDate() === 31) {
        if (next.getDay() === 0 || next.getDay() === 6) {
          console.log("sabtu/minggu cuk tgl 31" + i);
          break;
        } else {
          dataTanggal.push(next);
          break;
        }
      } else if (next.getDate() < 31) {
        if (next.getDay() === 0 || next.getDay() === 6) {
          console.log("sabtu/minggu cuk " + i);
        } else {
          dataTanggal.push(next);
        }
      } else if (numberOfWeek === 1 && next.getDate() === 1) {
        if (next.getDay() === 0 || next.getDay() === 6) {
          console.log("sabtu/minggu cuk tgl 1" + i);
          break;
        } else {
          dataTanggal.push(next);
          break;
        }
      }
    } else if (
      dayjs(`${curr.getFullYear()}-${curr.getMonth() + 1}`).daysInMonth() === 30
    ) {
      if (/* numberOfWeek === 5 && */ next.getDate() === 30) {
        if (next.getDay() === 0 || next.getDay() === 6) {
          console.log("sabtu/minggu cuk tgl 30" + i);
          break;
        } else {
          dataTanggal.push(next);
          break;
        }
      } else if (next.getDate() < 30) {
        if (next.getDay() === 0 || next.getDay() === 6) {
          console.log("sabtu/minggu cuk " + i);
        } else {
          dataTanggal.push(next);
        }
      } else if (numberOfWeek === 1 && next.getDate() === 1) {
        if (next.getDay() === 0 || next.getDay() === 6) {
          console.log("sabtu/minggu cuk tgl 1" + i);
          break;
        } else {
          dataTanggal.push(next);
          break;
        }
      }
    }
  }

  return dataTanggal;
};

export default hariPerMinggu;
