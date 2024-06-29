import cr7 from '../assets/cr7.png';
import morgan from '../assets/morgan.png';
import boy from '../assets/boy.avif';
import teenM from '../assets/teenM.webp';
import girl from '../assets/girl.webp';
import teenW from '../assets/teenW.webp';

const competitionLevels = ['Competitive', 'Recreational'];
const ageGroups = ['Adult', 'Teenager', 'Kids'];
const genders = ['Male', 'Female'];
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const images = {
  'Adult Male': cr7,
  'Adult Female': morgan,
  'Teenager Male': teenM,
  'Teenager Female': teenW,
  'Kids Male': boy,
  'Kids Female': girl,
};

const getLeagueName = (competition, ageGroup, gender, day) => {
  let genderText = gender === 'Male' ? (ageGroup === 'Adult' ? "Men's" : `Boys (${ageGroup})`) : (ageGroup === 'Adult' ? "Women's" : `Girls (${ageGroup})`);
  return `${competition} ${genderText} ${day} League`;
};

let idCounter = 1;
const leaguesData = [];

competitionLevels.forEach(competition => {
  ageGroups.forEach(ageGroup => {
    genders.forEach(gender => {
      daysOfWeek.forEach(day => {
        const key = `${ageGroup} ${gender}`;
        leaguesData.push({
          id: idCounter++,
          ageGroup,
          gender,
          day,
          competition,
          image: images[key],
          name: getLeagueName(competition, ageGroup, gender, day),
        });
      });
    });
  });
});

export default leaguesData;
