const prune = (str = new String()) => {
  Array.from(str.trim())
    .filter((v) => v !== " ")
    .join("")
    .toString();
  return str;
};

const getFullName = (...name) => {
  let fname = prune(name[0]);
  let mname = prune(name[1]);
  let lname = prune(name[2]);

  if (!lname) return fname;
  if (!mname) return `${fname} ${lname}`;

  return `${fname}`;
};

module.exports = { prune, getFullName };
