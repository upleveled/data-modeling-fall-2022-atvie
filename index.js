// - name
// - job position
// - role (editor, admin, no rights)
// - pets (with name and type)

// const teamRoles = ['admin', 'editor', 'no rights'];

const teamRoles = {
  admin: 'administrator',
  editor: 'editor',
  noRights: 'no rights',
};

const teamJobPositions = {
  CEO: 'CEO',
  developer: 'developer',
};

const teamMembers = [
  {
    id: 1,
    name: 'Kimberley',
    jobPosition: teamJobPositions.CEO,
    role: teamRoles.admin,
    pets: [
      { name: 'Wuff', type: 'dog' },
      { name: 'Miau', type: 'cat' },
    ],
  },
  {
    id: 2,
    name: 'Jose',
    jobPosition: teamJobPositions.developer,
    role: teamRoles.editor,
    pets: [],
  },
];

console.log(teamMembers);
// console.log(JSON.stringify(teamMembers));

console.log(typeof teamMembers); // object
console.log(Array.isArray(teamMembers)); // true
console.log(Array.isArray(teamRoles)); // false
console.log(typeof teamMembers.name); // undefined
console.log(typeof teamMembers[0].name); // string, don't forget index
console.log(typeof teamMembers[0].pets); // object

if (typeof teamMembers[0].name !== 'string') {
  throw new Error('name is not a string');
}

// maps
// <div>Name: <name here></div>
// <div>Job Position: <job position here></div>

// teamMembers.map((teamMember) => {
//   return (
//     <div key={`teamMember-${teamMember.id}`}>
//       <div>Name: {teamMember.name}</div>
//       <div>Job Position: {teamMember.jobPosition}</div>
//     </div>
//   );
// });

teamMembers.push({
  id: 3,
  name: 'Victor',
  jobPosition: teamJobPositions.developer,
  role: teamRoles.noRights,
  pets: [],
});

console.log('team members after push()', teamMembers);

// filter team members that are developers

const filteredTeamMembers = teamMembers.filter((teamMember) => {
  return teamMember.jobPosition === teamJobPositions.developer;
});

console.log('filtered team members', filteredTeamMembers);

// find a team member with findIndex

const teamMemberIndex = teamMembers.findIndex((teamMember) => {
  return teamMember.name === 'Kimberley';
});

console.log('team member index', teamMemberIndex);

teamMembers[teamMemberIndex].name = 'Karl';

console.log('after name change', teamMembers);

// find a team member with find

const findTeamMember = teamMembers.find((teamMember) => {
  return teamMember.name === 'Jose';
});

console.log('find Jose', findTeamMember.jobPosition);
