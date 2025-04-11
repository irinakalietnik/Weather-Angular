export class NowDate {
  date = `${new Date().getDate().toString().padStart(2, '0')}/${(
    new Date().getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}/${new Date().getFullYear()} ${new Date()
    .getHours()
    .toString()
    .padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`;
}