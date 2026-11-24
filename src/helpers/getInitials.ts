function getInitials(name: string): string {
  let strArr = name.split(/\s+/);
  console.dir(name);
  console.dir(strArr);
  let initials = strArr[0].slice(0, 1).toUpperCase();
  if (strArr[1]) {
    initials += strArr[1].slice(0, 1).toUpperCase();
  }
  return `<span>${initials}</span>`;
}

export default getInitials;
