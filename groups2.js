let female = [];
let male = [];
let students = [
  // 'Jouza &#127831;',
  'Abdulhamid Al-Elaiyan',
  'Afnan Al-Mutairi',
  'Afnan Basudan',
  'Ali Al-Jamid',
  'Amirah Al-Mani',
  'Bader Al-Mazrou',
  'Bedour Al-Shuaibi',
  'Faisal Al-Jazaeri',
  'Haya Binkhtahran',
  'Huda Al-Ismail',
  'Lama Askar',
  'Maimona Al-Hwaymil',
  'Mashael Al-Saadan',
  'Mohammed Al-Muhanna',
  'Mohammed Al-Hadab',
  'Najwa Al-Mutairi',
  'Omar Al-Hazmi',
  'Raghad Al-Abdulwahab',
  'Rana Al-Malki',
  'Ranen Khlabi',
  'Rawan Al-Dawsari',
  'Renad Al-Obaid',
  'Roba Arishi',
  'Salman Al-Suwailem',
  'Sara Kuddah',
  'Shahad Al-Qahtani',
  'Wejdan Al-Rasheedi'
];
const DIVS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const GRUOPS_OF = {
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8
};
$('button').on('click', function() {
  let ID = this.id.split('_')[1];
  let groupsOf = createGroupsOf(GRUOPS_OF[ID]);
  putStudents(groupsOf);
});

const putStudents = answer => {
  $('#groups').html('');
  for (const group in answer) {
    const div = $('<div/>').addClass('list-group');
    for (let index = 0; index < answer[group].length; index++) {
      const studentName = answer[group][index];
      if (studentName !== undefined) {
        const p = $('<p/>')
          .addClass('list-group-item')
          .text(studentName);
        console.log(p);
        div.append(p);
      }
    }
    $('#groups').append(div);
  }
};

function createGroupsOf(groupLength) {
  let nameOfGroups = {
    [DIVS[0]]: [],
    [DIVS[1]]: [],
    [DIVS[2]]: [],
    [DIVS[3]]: [],
    [DIVS[4]]: [],
    [DIVS[5]]: [],
    [DIVS[6]]: [],
    [DIVS[7]]: [],
    [DIVS[8]]: []
  };
  let newStudents = students.slice();
  while (newStudents.length > 0) {
    for (let index = 0; index < (students.length - 1) / groupLength; index++) {
      let studentIndex = Math.floor(Math.random() * newStudents.length);
      let randomStudent = newStudents[studentIndex];
      nameOfGroups[DIVS[index]].push(randomStudent);
      newStudents.splice(studentIndex, 1);
    }
  }
  return nameOfGroups;
}
