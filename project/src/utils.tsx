import {months} from './const';

export function formatDate(dateISO: string): string {
  const date = new Date(dateISO);
  const month = date.getMonth() < 10 ? `0${date.getMonth()+1}` : date.getMonth();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  return `${date.getFullYear()}-${month}-${day}`;
}

export function humanizeDate(dateISO: string): string {
  const date = new Date(dateISO);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function formatTime(filmDuration: number): string {
  const hours = Math.trunc(filmDuration/60) > 0 ? Math.trunc(filmDuration/60) : '';
  const minutes = filmDuration%60;

  return `${hours}h ${minutes}m`;
}
