import { useSelector } from 'react-redux';
import cancelPolicy from '../../constant/cancelPolicy';

export default function HouseRulesBlock() {
  const roomAccom = useSelector((state) => state.room.roomData);
  const fetchedHouseRules = roomAccom.accom.houseRules;

  let HOUSE_RULES = [
    {
      title: 'Check-in',
      content: fetchedHouseRules.checkIn,
    },
    {
      title: 'Check-out',
      content: fetchedHouseRules.checkOut,
    },
    {
      title: 'Cancellation/prepayment',
      content: cancelPolicy[fetchedHouseRules.cancelPolicy],
    },
    {
      title: 'Pets',
      content: fetchedHouseRules.petsRule,
    },
    {
      title: 'Age Restriction',
      content: fetchedHouseRules.ageRule,
    },
  ];

  return (
    <div className='p-4 bg-gray-100 rounded mb-4 shadow-lg'>
      {HOUSE_RULES.map((rule, index) => (
        <div key={index}>
          <p>
            <strong>{rule.title}</strong>
          </p>
          <p className='text-fg-text-black'>{rule.content}</p>
          {index !== HOUSE_RULES.length - 1 && <br />}
        </div>
      ))}
    </div>
  );
}
